import Album from "@components/Album";
import React from "react";
import { BsFillBrushFill } from "react-icons/bs";
import ImageGrid from "./ImageGrid";
interface FeatureProps {
  icon: any;
  heading: string;
  body: string;
}

const features = [
  { heading: "Drawing", body: "You can draw anything on the screen" },
  { heading: "Sticker", body: "You can draw anything on the screen" },
  { heading: "Instant Print", body: "You can draw anything on the screen" },
];

const Feature = ({ icon, heading, body }: FeatureProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 h-fit">
        <div className="w-12 h-12 rounded-lg bg-gray-200 shadow-sm flex justify-center items-center">
          {icon}
        </div>
        <h2 className="text-xl font-semibold">{heading}</h2>
      </div>
      <p>{body}</p>
    </div>
  );
};

function Features() {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 my-14 p-6 w-full">
      <ImageGrid
        className="flex-1"
        imgset={[
          {
            src: "https://storage.googleapis.com/yelli-bebb3.appspot.com/assets/54090.jpg",
          },
          {
            src: "https://storage.googleapis.com/yelli-bebb3.appspot.com/assets/54091.jpg",
          },
          {
            src: "https://storage.googleapis.com/yelli-bebb3.appspot.com/assets/54094.jpg",
          },
          {
            src: "https://storage.googleapis.com/yelli-bebb3.appspot.com/assets/54098.jpg",
          },
        ]}
      />

      <div className="grid grid-cols-2 gap-6">
        {features.map(({ heading, body }, i) => (
          <Feature
            key={i}
            icon={<BsFillBrushFill />}
            heading={heading}
            body={body}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
