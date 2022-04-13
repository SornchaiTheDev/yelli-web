import { useRef } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import DownloadBtn from "./DownloadBtn";
import { ref, getBlob } from "firebase/storage";
import { storage } from "../firebase";

type Photo = {
  src: string;
};
const ImagePreview: NextPage<Photo> = (props) => {
  const { src } = props;
  const downloadImage = useRef<HTMLAnchorElement | null>(null);
  const handleDownload = async () => {
    try {
      const photo = ref(storage, src);
      const blobPhoto = await getBlob(photo);
      const download = URL.createObjectURL(blobPhoto);

      if (downloadImage.current) {
        downloadImage.current.href = download;
        downloadImage.current.download = "image.jpg";
        downloadImage.current.click();
      }
    } catch (err) {
      throw err;
    }
  };
  return (
    <>
      <div className="p-4">
        <a ref={downloadImage}>
          <Image className="rounded-lg" width={600} height={400} src={src} />
        </a>
      </div>
      <DownloadBtn onClick={handleDownload} />
    </>
  );
};

export default ImagePreview;
