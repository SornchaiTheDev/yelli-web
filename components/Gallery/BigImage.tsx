import React from "react";
import { IoClose } from "react-icons/io5";
import ImagePreview from "@components/Gallery/ImagePreview";

const BigImage = ({ src, onClose }: { src: string; onClose: () => void }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen bg-[rgba(0,0,0,.5)] p-4 flex flex-col justify-center items-center">
      <div
        className="absolute top-6 right-6 w-fit h-fit bg-white shadow-md p-2 rounded-full cursor-pointer"
        onClick={onClose}
      >
        <IoClose size="1.25rem" />
      </div>
      <div className=" w-full md:w-3/4">
        <ImagePreview Horizontal BigPreview src={src} />
      </div>
    </div>
  );
};

export default BigImage;
