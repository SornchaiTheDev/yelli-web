import React from "react";

const Feature = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 h-fit">
        <div className="w-12 h-12 rounded-lg bg-gray-200 shadow-sm flex justify-center items-center">
          H
        </div>
        <h2 className="text-xl font-semibold">Feature 1</h2>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quam id,
        quibusdam mollitia ab quasi neque. Animi quas maiores quo officia
        corrupti, culpa sit quaerat dolorem expedita eaque, repellat
        consectetur!
      </p>
    </div>
  );
};
function Features() {
  return (
    <div className="flex gap-4 mt-14 p-6 w-full">
      <div className="w-full h-96 rounded-lg bg-gray-200"></div>
      <div className="grid grid-cols-2 gap-6">
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      </div>
    </div>
  );
}

export default Features;
