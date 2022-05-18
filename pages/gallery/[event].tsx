import { useState } from "react";
import Navbar from "@components/common/Navbar";
import { AiOutlineCalendar, AiOutlineFileImage } from "react-icons/ai";
import ImagePreview from "@components/Gallery/ImagePreview";
import BackToGallery from "@components/Gallery/Buttons/BackToGallery";
import BigImage from "@components/Gallery/BigImage";

import { Photo } from "@decor/Photo";
import { InEventProps } from "@decor/Event";
import { format } from "date-fns";

function Event({ photos, name, date, amount }: InEventProps) {
  const [previewImg, setPreviewImg] = useState<Photo>({ src: null });
  const clearPreviewImg = () => setPreviewImg({ src: null });

  return (
    <>
      {previewImg.src !== null && (
        <BigImage src={previewImg.src} onClose={clearPreviewImg} />
      )}

      <div>
        <Navbar active="Gallery" />
        <div className="mt-24 w-full flex flex-col items-center">
          <div className="container mx-auto">
            <BackToGallery />
            <div className="flex flex-col justify-center items-center gap-4 my-10">
              <h2 className="text-center text-3xl font-semibold">{name}</h2>
              <div className="inline-flex gap-4">
                <span className="inline-flex items-center gap-1">
                  <AiOutlineCalendar />
                  <p>{format(new Date(date), "dd MMMM yyyy")}</p>
                </span>
                <p>•</p>
                <span className="inline-flex items-center gap-1">
                  <AiOutlineFileImage />
                  <p>{amount} Photos</p>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14 p-4">
              {photos.map(({ src }) => (
                <ImagePreview
                  key={src}
                  onClick={() =>
                    setPreviewImg({
                      src,
                    })
                  }
                  src={src}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;

import { store } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";
export const getServerSideProps = async () => {
  const eventRef = doc(store, "events", "homeparty");
  const photosRef = collection(store, "events", "homeparty", "photos");
  const photoQuery = await getDocs(photosRef);
  const eventQuery = await getDoc(eventRef);
  const photos: Photo[] = [];
  const { name, date, amount } = eventQuery.data() as {
    name: string;
    date: Timestamp;
    amount: number;
  };

  photoQuery.forEach((photo) => photos.push({ src: photo.data().src }));
  return {
    props: {
      photos,
      name,
      date: date.toDate().toString(),
      amount,
    },
  };
};
