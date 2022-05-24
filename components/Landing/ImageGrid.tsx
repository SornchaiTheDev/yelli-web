import Image from "next/image";
import { PhotoI } from "@decor/Photo";

interface ImageGridI {
  className: string;
  imgset: PhotoI[];
}
const ImageGrid = ({ imgset, className }: ImageGridI) => {
  return (
    <div className={`flex flex-col items-center gap-4 col-span-1 ${className}`}>
      <div className="grid grid-cols-2 gap-2 justify-items-stretch place-items-stretch w-full h-full">
        {imgset
          .filter((_, index) => index < imgset.length - 1)
          .map((photo) => (
            <div
              key={photo.src}
              className="relative rounded-lg overflow-hidden bg-gray-50  aspect-w-3 aspect-h-2 cursor-pointer h-fit"
            >
              {photo.src !== null && (
                <Image
                  alt="Features"
                  placeholder="blur"
                  blurDataURL={photo.src!}
                  layout="fill"
                  src={photo.src!}
                />
              )}
            </div>
          ))}

        <div className="relative  rounded-lg overflow-hidden bg-gray-50  aspect-w-3 aspect-h-2 cursor-pointer h-fit">
          {imgset[imgset.length - 1].src !== null && (
            <Image
              alt="Features"
              placeholder="blur"
              blurDataURL={imgset[imgset.length - 1].src!}
              layout="fill"
              src={imgset[imgset.length - 1].src!}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
