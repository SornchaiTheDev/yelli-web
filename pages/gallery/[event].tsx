import React from "react";
import Navbar from "@components/common/Navbar";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineFileImage,
} from "react-icons/ai";
import Link from "next/link";
import ImagePreview from "@components/PhotoExplorer/ImagePreview";
import BackToGallery from "@components/PhotoExplorer/Buttons/BackToGallery";
function Event() {
  return (
    <div>
      <Navbar active="Gallery" />
      <div className="mt-24 w-full flex flex-col items-center">
        <div className="container mx-auto">
          <BackToGallery />
          <div className="flex flex-col justify-center items-center gap-4 my-10">
            <h2 className="text-center text-3xl font-semibold">Home Party</h2>
            <div className="inline-flex gap-4">
              <span className="inline-flex items-center gap-1">
                <AiOutlineCalendar />
                <p>28 April 2021</p>
              </span>
              <p>•</p>
              <span className="inline-flex items-center gap-1">
                <AiOutlineFileImage />
                <p>142 Photos</p>
              </span>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-6 mb-10">
            <AiOutlineHome />
            <p>
              <Link href="/gallery">
                <span className="font-semibold cursor-pointer">Gallery</span>
              </Link>{" "}
              {">"} Home Party
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14 p-4">
            {Array(20)
              .fill("")
              .map((_, index) => (
                <ImagePreview
                  src="https://images.unsplash.com/photo-1652039033536-5d171726e670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  name={`IMG_0${(index + 1).toString().padStart(2, "0")}.jpeg`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
