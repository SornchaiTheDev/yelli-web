import React from "react";
import Album from "@components/Album";

function Gallery() {
  return (
    <div className="p-4">
      <h2 className="my-10 font-bold text-2xl text-center">Recent Event</h2>
      <div className="grid grid-cols-3 gap-4 my-24">
        <Album />
      </div>
    </div>
  );
}

export default Gallery;
