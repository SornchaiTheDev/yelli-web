import Image from "next/image";
import { PhotoI } from "@decor/Photo";

interface ImageGridI {
  className?: string;
  imgset: { src: string }[];
}
const ImageGrid = ({ imgset, className }: ImageGridI) => {
  return (
    <div
      className={`grid grid-cols-2 gap-2 w-full h-full ${className}`}
    >
      {imgset
        .filter((_, index) => index < imgset.length - 1)
        .map((photo) => (
          <div
            key={photo.src}
            className="relative rounded-lg overflow-hidden bg-gray-50  aspect-w-3 aspect-h-2"
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

      <div className="relative  rounded-lg overflow-hidden bg-gray-50  aspect-w-3 aspect-h-2 h-fit">
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
  );
};

export default ImageGrid;
