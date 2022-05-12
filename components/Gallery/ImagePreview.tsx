import { useRef } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import DownloadBtn from "./Buttons/DownloadBtn";
import { ref, getBlob } from "firebase/storage";
import { storage } from "../../firebase";
import ShareBtn from "./Buttons/ShareBtn";
import { Photo } from "../../@types/Photo";
type ImagePreviewProps = { Horizontal?: boolean; BigPreview?: boolean };
const ImagePreview: NextPage<Photo & ImagePreviewProps> = (props) => {
  const { src, Horizontal, BigPreview } = props;
  const downloadImage = useRef<HTMLAnchorElement | null>(null);
  const handleDownload = async () => {
    try {
      const photo = ref(storage, src!);
      const blobPhoto = await getBlob(photo);
      const blob = new Blob([blobPhoto], { type: "image/jpeg" });
      const download = URL.createObjectURL(blob);

      if (downloadImage.current) {
        downloadImage.current.href = download;
        downloadImage.current.click();
      }
    } catch (err) {
      throw err;
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <a ref={downloadImage} download target="_blank"></a>
      <div className="w-full overflow-hidden rounded-t-md">
        <Image
          placeholder="blur"
          blurDataURL={src!}
          layout="responsive"
          className={`h-full object-cover object-center pointer-events-none ${
            BigPreview ? "rounded-t-lg" : "rounded-lg"
          }`}
          width={900}
          height={600}
          src={src!}
        />
      </div>
      {BigPreview && (
        <div
          className={`flex ${
            Horizontal ? "flex-row" : "flex-column"
          }  justify-end items-start gap-4 md:items-center bg-white p-4 w-full overflow-hidden rounded-b-md shadow-md`}
        >
          {/* <h2 className="text-md">{name}</h2> */}

          <div className="flex items-center space-x-4">
            <DownloadBtn onClick={handleDownload} />
            <ShareBtn onClick={() => alert("shared")} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
