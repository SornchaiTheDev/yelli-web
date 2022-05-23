import Link from "next/link";
import Image from "next/image";
import { AlbumProps } from "@decor/Album";

const Album = ({ imgset, name, amount, id }: AlbumProps) => {
  return (
    <div className="flex flex-col items-center gap-4 col-span-1">
      <div className="grid grid-cols-2 gap-2 justify-items-stretch place-items-stretch w-full h-full">
        {imgset
          .filter((_, index) => index < imgset.length - 1)
          .map((photo) => (
            <Link href={`/gallery/${id}`} key={photo.src} passHref>
              <div className="relative rounded-lg overflow-hidden bg-gray-50  aspect-w-3 aspect-h-2 cursor-pointer h-fit">
                {photo.src !== null && (
                  <Image
                    alt={`${name} Album`}
                    placeholder="blur"
                    blurDataURL={photo.src!}
                    layout="fill"
                    src={photo.src!}
                  />
                )}
              </div>
            </Link>
          ))}
        <Link href="/gallery/test" passHref>
          <div className="relative  rounded-lg overflow-hidden bg-gray-50  aspect-w-3 aspect-h-2 cursor-pointer h-fit">
            {amount > 4 && (
              <div className="bg-[rgba(0,0,0,.40)] top-0 left-0 w-full h-full absolute flex justify-center items-center z-10">
                <h2 className="text-white font-semibold text-xl">
                  +{amount - 4}
                </h2>
              </div>
            )}
            {imgset[imgset.length - 1].src !== null && (
              <Image
                alt={`${name} Album`}
                placeholder="blur"
                blurDataURL={imgset[imgset.length - 1].src!}
                layout="fill"
                src={imgset[imgset.length - 1].src!}
              />
            )}
          </div>
        </Link>
      </div>
      <h2 className="text-center">{name}</h2>
    </div>
  );
};

export default Album;
