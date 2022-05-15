import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import ImagePreview from "@components/Gallery/ImagePreview";
import DownloadBtn from "./Buttons/DownloadBtn";
import ShareBtn from "./Buttons/ShareBtn";
import { ref, getBlob } from "firebase/storage";
import { storage } from "../../firebase";
import Image from "next/image";

const BigImage = ({ src, onClose }: { src: string; onClose: () => void }) => {
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
    <div
      className="fixed top-0 left-0 z-50 w-full h-screen bg-[rgba(0,0,0,.5)] p-4 flex flex-col justify-center items-center cursor-pointer"
      onClick={onClose}
    >
      <div
        className="absolute top-6 right-6 w-fit h-fit bg-white shadow-md p-2 rounded-full cursor-pointer"
        onClick={onClose}
      >
        <IoClose size="1.25rem" />
      </div>
      <a ref={downloadImage} download target="_blank"></a>
      <div className="w-2/3 flex flex-col justify-center items-center cursor-default">
        <div className="w-full overflow-hidden rounded-t-md">
          <Image
            placeholder="blur"
            blurDataURL={src!}
            layout="responsive"
            className="h-full object-cover object-center pointer-events-none rounded-t-lg"
            width={900}
            height={600}
            src={src!}
          />
        </div>

        <div className="flex flex-row justify-end items-start gap-4 md:items-center bg-white p-4 w-full overflow-hidden rounded-b-md shadow-md">
          <div className="flex items-center space-x-4">
            <DownloadBtn onClick={handleDownload} />
            <ShareBtn onClick={() => alert("shared")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigImage;
