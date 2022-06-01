import Navbar from "@components/common/Navbar";
import Album from "@components/Album";
import { EventProps, Event } from "@decor/Event";
import { useIntl } from "react-intl";
import useFetchEvents from "@hooks/useFetchEvents";
import { useState } from "react";

function Index({ fetch_events }: EventProps) {
  const _events = JSON.parse(fetch_events) as Event[];
  const [events, setEvent] = useState<Event[]>(_events);
  const intl = useIntl();

  const { loading, hasNextPage, error, fetchEvent, setLastEvent } =
    useFetchEvents(_events.length, _events[_events.length - 1]);

  // init infinite scroll
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    disabled: error,
    onLoadMore: () => {
      fetchEvent().then((res) => {
        setLastEvent(res[res.length - 1]);
        setEvent([...events, ...res]);
      });
    },
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <div>
      <title>Phuket Instant Print - Gallery</title>
      <Navbar activeSection="Gallery" />
      <div className="mt-24 w-full flex flex-col items-center">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-semibold my-14">
            {intl.formatMessage({ id: "gallery.title" })}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14 p-4">
            {events.map(({ name, amount, imgset, id }) => (
              <Album
                key={id}
                name={name}
                amount={amount}
                imgset={imgset}
                id={id}
              />
            ))}
            <div ref={sentryRef} />
          </div>
        </div>
        {loading && hasNextPage && (
          <div className="flex justify-center mt-18">
            <AiOutlineLoading3Quarters className="animate-spin fill-yellow-500 text-2xl" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;

import { collection, query, limit, orderBy, getDocs } from "firebase/firestore";
import { store } from "../../firebase";
import { PhotoI } from "@decor/Photo";
import { v4 as uuid } from "uuid";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const getServerSideProps = async () => {
  const eventRef = collection(store, "events");
  const queryEvent = query(eventRef, limit(2), orderBy("date", "desc"));
  const getEvents = await getDocs(queryEvent);
  const events: Event[] = [];

  getEvents.forEach((event) => {
    events.push({
      ...(event.data() as Event),
      id: event.id,
    });
  });

  let index = 0;
  for await (let event of events) {
    const photoRef = collection(store, `events/${event.id}`, "photos");
    const queryPhotos = query(
      photoRef,
      limit(4),
      orderBy("created_at", "desc")
    );
    const getPhotos = await getDocs(queryPhotos);
    let photos: PhotoI[] = [];
    getPhotos.forEach((photo) =>
      photos.push({ ...(photo.data() as PhotoI), id: photo.id })
    );

    if (photos.length < 4) {
      const dummyPhoto = Array(4 - photos.length).fill({ src: null });
      dummyPhoto.forEach(
        (photo, index) => (dummyPhoto[index] = { ...photo, id: uuid() })
      );
      photos = photos.concat(dummyPhoto) as PhotoI[];
    }

    events[index] = { ...event, imgset: photos, id: event.id };
    index += 1;
  }

  return {
    props: {
      fetch_events: JSON.stringify(events),
    },
  };
};
