import Link from "next/link";
import { AlbumProps } from "@decor/Album";
const Album = ({ imgset, name, amount, id }: AlbumProps) => {
  return (
    <div className="flex flex-col items-center gap-4 col-span-1 ">
      <div className="grid grid-cols-2 gap-2 justify-items-stretch place-items-stretch w-full h-full">
        {imgset
          .filter((_, index) =>
            imgset.length > 1 ? index < imgset.length - 1 : true
          )
          .map(({ src }, index) => (
            <Link href={`/gallery/${id}`} key={src}>
              <div className="rounded-lg overflow-hidden bg-gray-50  aspect-w-3 aspect-h-2 cursor-pointer h-fit">
                {src !== null && (
                  <img
                    className="h-full object-cover object-center pointer-events-none"
                    src={src!}
                  />
                )}
              </div>
            </Link>
          ))}
        <Link href="/gallery/test">
          <div className="rounded-lg overflow-hidden bg-gray-50 relative  aspect-w-3 aspect-h-2 cursor-pointer">
            {imgset.filter(({ src }) => src !== null).length > 3 && (
              <>
                <div className="bg-[rgba(0,0,0,.40)] top-0 left-0 w-full h-full absolute flex justify-center items-center z-10">
                  <h2 className="text-white font-semibold text-xl">
                    +{amount - 4}
                  </h2>
                </div>
                <img
                  className="h-full object-cover object-center pointer-events-none"
                  src={imgset[imgset.length - 1].src!}
                />
              </>
            )}
          </div>
        </Link>
      </div>
      <h2 className="text-center">{name}</h2>
    </div>
  );
};

export default Album;
