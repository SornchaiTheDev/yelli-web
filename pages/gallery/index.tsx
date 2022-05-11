import React from "react";
import Navbar from "@components/common/Navbar";
import Album from "@components/Album";
function Index() {
  return (
    <div>
      <Navbar active="Gallery" />
      <div className="mt-24 w-full flex flex-col items-center">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-semibold my-14">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14 p-4">
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
