import { Photo } from "@decor/Photo";
import { Timestamp } from "firebase/firestore";

export type InEventProps = {
  photos: Photo[];
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
  imgset: Photo[];
  id: string;
}
