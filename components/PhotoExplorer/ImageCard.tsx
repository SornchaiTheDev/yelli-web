import Image from "next/image";
import DownloadBtn from "./Buttons/DownloadBtn";
import ShareBtn from "./Buttons/ShareBtn";
import { NextPage } from "next";
interface ImageCardProps {
  src: string;
  name: string;
}
const ImageCard: NextPage<ImageCardProps> = ({ src, name }) => {
  return (
    <div className="w-1/2">
      <div className="w-full overflow-hidden rounded-t-md">
        <Image
          src={src}
          placeholder="blur"
          blurDataURL={src}
          layout="responsive"
          width={900}
          height={600}
        />
      </div>
      <div className="flex justify-between items-center bg-white p-4 w-full overflow-hidden rounded-b-md shadow-md">
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          <h2 className="text-md font-semibold">Egypt tour 2022</h2>
        </div>
        <div className="flex items-center space-x-4">
          <DownloadBtn onClick={() => {}} />
          <ShareBtn onClick={() => alert("shared")} />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
