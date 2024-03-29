import { useState, useEffect } from "react";
import Navbar from "@components/common/Navbar";
import {
  AiOutlineCalendar,
  AiOutlineFileImage,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import ImagePreview from "@components/Gallery/ImagePreview";
import BackToGallery from "@components/Gallery/Buttons/BackToGallery";
import BigImage from "@components/Gallery/BigImage";
import { GetServerSideProps } from "next";
import { PhotoI } from "@decor/Photo";
import { InEventProps } from "@decor/Event";
import { format } from "date-fns";
import useInfiniteScroll from "react-infinite-scroll-hook";
import useFetchPhoto from "@hooks/useFetchPhoto";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { store } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  getDocs,
  Timestamp,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

function Event({ photos, name, date, amount, id, queryPhoto }: InEventProps) {
  const intl = useIntl();
  const { locale } = useRouter();

  const [photosAlbum, setPhotosAlbum] = useState<PhotoI[]>(photos);
  const [previewImg, setPreviewImg] = useState<PhotoI>(
    queryPhoto || {
      src: null,
    }
  );
  const clearPreviewImg = () => setPreviewImg({ src: null });
  const { fetchPhoto, loading, hasNextPage, error, setLastPhoto } =
    useFetchPhoto(id, photosAlbum.length, photos[photos.length - 1]);

  // init infinite scroll
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    disabled: error,
    onLoadMore: () => {
      fetchPhoto().then((res) => {
        setLastPhoto(res[res.length - 1]);
        setPhotosAlbum([...photosAlbum, ...res]);
      });
    },
    rootMargin: "0px 0px 400px 0px",
  });

  const handleImagePreviewClick = (src: string) => {
    setTimeout(() => {
      setPreviewImg({
        src,
      });
    }, 50);
  };

  /* handle on image status is uploading */
  const handleOnPhotoIsUploading = async () => {
    if (previewImg.src === "uploading") {
      const photoRef = doc(store, "events", id, "photos", previewImg.id!);

      onSnapshot(photoRef, (doc) => {
        if (doc.data()!.src !== "uploading") {
          setPreviewImg({ src: doc.data()!.src });
        }
      });
    }
  };

  useEffect(() => {
    handleOnPhotoIsUploading();
  }, [handleOnPhotoIsUploading]);

  return (
    <>
      <title>Phuket Instant Print - Gallery</title>
      {previewImg.src !== null && (
        <BigImage
          src={previewImg.src!}
          onClose={clearPreviewImg}
          eventName={name}
        />
      )}

      <div>
        <Navbar activeSection="Gallery" />
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
                  <p>
                    {amount} {intl.formatMessage({ id: "gallery.photos" })}
                    {locale === "en" && amount > 1 && "s"}
                  </p>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14 p-4">
              {photosAlbum.map(({ src }, i) => (
                <ImagePreview
                  name={name}
                  key={i}
                  onClick={() => handleImagePreviewClick(src!)}
                  src={src!}
                />
              ))}
            </div>
          </div>
          <div ref={sentryRef} />
          {loading && hasNextPage && (
            <div className="flex justify-center mt-18">
              <AiOutlineLoading3Quarters className="animate-spin fill-blue-500 text-2xl" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Event;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.event as string;
  const eventRef = doc(store, "events", id);
  const photosRef = collection(store, "events", id, "photos");
  const q = query(photosRef, orderBy("created_at", "desc"), limit(2));
  const photoQuery = await getDocs(q);
  const eventQuery = await getDoc(eventRef);
  const photos: PhotoI[] = [];
  const { name, date, amount } = eventQuery.data() as {
    name: string;
    date: Timestamp;
    amount: number;
  };

  photoQuery.forEach((photo) => {
    if (photo.data().src !== "uploading") {
      photos.push({ src: photo.data().src, id: photo.id });
    }
  });

  let queryPhoto: PhotoI | null = null;
  if (ctx.query.p) {
    const p = ctx.query.p as string;
    const photoRef = doc(store, "events", id, "photos", p);
    const photo = await getDoc(photoRef);
    if (photo.exists()) {
      queryPhoto = { src: photo.data()!.src, id: photo.id };
    }
  }
  return {
    props: {
      id,
      photos,
      name,
      date: date.toDate().toString(),
      amount,
      queryPhoto,
    },
  };
};
