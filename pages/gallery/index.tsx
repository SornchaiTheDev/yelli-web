import React from "react";
import Navbar from "@components/common/Navbar";
import Album from "@components/Album";
import { EventProps } from "@decor/Event";

function Index({ events }: EventProps) {
  const _events = JSON.parse(events) as Event[];

  return (
    <div>
      <Navbar active="Gallery" />
      <div className="mt-24 w-full flex flex-col items-center">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-semibold my-14">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14 p-4">
            {_events.map(({ name, amount, imgset }) => (
              <Album name={name} amount={amount} imgset={imgset} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

import { collection, query, limit, orderBy, getDocs } from "firebase/firestore";
import { store } from "../../firebase";
import { Event } from "@decor/Event";
import { Photo } from "@decor/Photo";

export const getServerSideProps = async () => {
  const eventRef = collection(store, "events");
  const queryEvent = query(eventRef, limit(5), orderBy("date", "desc"));
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
    const queryPhotos = query(photoRef, limit(4));
    const getPhotos = await getDocs(queryPhotos);
    let photos: Photo[] = [];
    getPhotos.forEach((photo) => photos.push(photo.data() as Photo));
    console.log(photos.length);
    if (photos.length < 4) {
      photos = photos.concat(
        Array(4 - photos.length).fill({ src: null })
      ) as Photo[];
    }

    events[index] = { ...event, imgset: photos };
    index += 1;
  }

  return {
    props: {
      events: JSON.stringify(events),
    },
  };
};
