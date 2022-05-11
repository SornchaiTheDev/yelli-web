import React from "react";
import Navbar from "@components/common/Navbar";
import { AiOutlineHome } from "react-icons/ai";
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
          <div className="flex flex-col justify-center items-center my-10">
            <h2 className="text-center text-3xl font-semibold">
              Home Party
            </h2>
            <p>28 April</p>
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
              .map(() => (
                <ImagePreview
                  src="https://images.unsplash.com/photo-1651156358469-9c33c285685d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  name="IMG_001.jpeg"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
