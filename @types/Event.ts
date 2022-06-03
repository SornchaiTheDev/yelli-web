import { PhotoI } from "@decor/Photo";
import { Timestamp } from "firebase/firestore";

export type InEventProps = {
  id: string;
  photos: PhotoI[];
  name: string;
  date: Date;
  amount: number;
  queryPhoto: PhotoI | null;
};

export interface EventProps {
  fetch_events: string;
}

export interface Event {
  name: string;
  date: Timestamp;
  amount: number;
  imgset: PhotoI[];
  id: string;
}
