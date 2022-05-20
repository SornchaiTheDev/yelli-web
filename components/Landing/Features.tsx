import React from "react";
import { BsFillBrushFill } from "react-icons/bs";
interface FeatureProps {
  icon: any;
  heading: string;
  body: string;
}

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
      <div className="w-full h-96 rounded-lg bg-gray-200"></div>
      <div className="grid grid-cols-2 gap-6">
        {[...Array(3)].map((_, i) => (
          <Feature
            icon={<BsFillBrushFill />}
            heading="Drawing"
            body="You can draw anything on the screen"
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
