import { Timestamp } from "firebase/firestore";

// import { Photo } from "./Photo";
export type EventProps = {
  photos: Photo[];
  name: string;
  date: Date;
  amount: number;
};
