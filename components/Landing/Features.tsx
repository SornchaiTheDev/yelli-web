import Album from "@components/Album";
import React from "react";
import { BsFillBrushFill } from "react-icons/bs";
import ImageGrid from "./ImageGrid";
import { useIntl } from "react-intl";
interface FeatureProps {
  icon: any;
  heading: string;
  body: string;
}

const Feature = ({ icon, heading, body }: FeatureProps) => {
  return (
    <div className="flex flex-col gap-4 col-span-2">
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
  const intl = useIntl();
  const features = [
    {
      heading: intl.formatMessage({ id: "feature.drawing.title" }),
      body: intl.formatMessage({ id: "feature.drawing.body" }),
    },
    {
      heading: intl.formatMessage({ id: "feature.sticker.title" }),
      body: intl.formatMessage({ id: "feature.sticker.body" }),
    },
    {
      heading: intl.formatMessage({ id: "feature.print.title" }),
      body: intl.formatMessage({ id: "feature.print.body" }),
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4 my-14 p-6 w-full">
     
      <div className="grid grid-cols-2 gap-10 md:gap-6 mt-4 md:mt-0">
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
