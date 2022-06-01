import {
  collection,
  doc,
  query,
  startAfter,
  orderBy,
  limit,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useState, useCallback } from "react";
import { store } from "@firebase/index";
import { Event } from "@decor/Event";
import { v4 as uuid } from "uuid";
import { PhotoI } from "@decor/Photo";

const useFetchEvents = (clientAmount: number, lastEvent: Event) => {
  const [_lastEvent, setLastEvent] = useState<Event>(lastEvent);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const checkEnd = async () => {
    try {
      const q = doc(store, `count/events`);
      const events = await getDoc(q);
      const serverAmount = events.data()!.amount;
      if (clientAmount >= serverAmount) {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(!!err);
    }
  };

  const fetchEvent = useCallback(async () => {
    setLoading(true);
    const events: Event[] = [];

    try {
      const lastEventSnap = await getDoc(doc(store, "events", _lastEvent.id));
      const q = query(
        collection(store, "events"),
        orderBy("date", "desc"),
        startAfter(lastEventSnap),
        limit(2)
      );

      const fetchedEvents = await getDocs(q);

      fetchedEvents.forEach((event) =>
        events.push({
          ...(event.data() as Event),
          id: event.id,
        })
      );

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
    } catch (err) {
      setError(!!err);
    }
    await checkEnd();
    setLoading(false);
    return events;
  }, [_lastEvent]);

  return { fetchEvent, loading, error, hasNextPage, setLastEvent };
};

export default useFetchEvents;
