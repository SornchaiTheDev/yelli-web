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
import { useState, useEffect, useCallback } from "react";
import { store } from "@firebase/index";
import { PhotoI } from "@decor/Photo";

const useFetchPhoto = (id: string, clientAmount: number, lastPhoto: PhotoI) => {
  const [_lastPhoto, setLastPhoto] = useState<PhotoI>(lastPhoto);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const checkEnd = async () => {
    try {
      const q = doc(store, `events/${id}`);
      const events = await getDoc(q);
      const serverAmount = events.data()!.amount;
      if (clientAmount >= serverAmount) {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(!!err);
    }
  };

  const fetchPhoto = useCallback(async () => {
    const _photo: PhotoI[] = [];
    try {
      const lastPhotoSnap = await getDoc(
        doc(store, "events", id, "photos", _lastPhoto.id)
      );

      const q = query(
        collection(store, "events", id, "photos"),
        orderBy("created_at", "desc"),
        startAfter(lastPhotoSnap),
        limit(2)
      );

      const fetchedPhotos = await getDocs(q);

      fetchedPhotos.forEach((photo) => {
        _photo.push({ ...(photo.data() as PhotoI), id: photo.id });
      });
    } catch (err) {
      setError(!!err);
    }
    await checkEnd();

    return _photo;
  }, [_lastPhoto]);

  return { fetchPhoto, loading, error, hasNextPage, setLastPhoto };
};

export default useFetchPhoto;
