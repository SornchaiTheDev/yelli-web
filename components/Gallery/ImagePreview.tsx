import { useRef } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { ref, getBlob } from "firebase/storage";
import { storage } from "../../firebase";
import { PhotoI } from "@decor/Photo";

type ImagePreviewProps = {
  name: string;
  className?: string;
  Horizontal?: boolean;
  BigPreview?: boolean;
  onClick?: () => void;
};
const ImagePreview: NextPage<PhotoI & ImagePreviewProps> = (props) => {
  const { name, src, Horizontal, BigPreview, onClick, className } = props;

  return (
    <div
      className="w-full flex flex-col justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full overflow-hidden rounded-t-md">
        <Image
          placeholder="blur"
          blurDataURL={src!}
          layout="responsive"
          className="h-full object-cover object-center pointer-events-none rounded-lg"
          alt={`${name} Album's photo`}
          width={900}
          height={600}
          src={src!}
        />
      </div>
    </div>
  );
};

export default ImagePreview;
