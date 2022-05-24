import { PhotoI } from "@decor/Photo";
import { Timestamp } from "firebase/firestore";

export type InEventProps = {
  photos: PhotoI[];
  name: string;
  date: Date;
  amount: number;
};

export interface EventProps {
  events: string;
}

export interface Event {
  name: string;
  date: Timestamp;
  amount: number;
  imgset: PhotoI[];
  id: string;
}
