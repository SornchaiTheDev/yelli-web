import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ImagePreview from "@components/Gallery/ImagePreview";

const BigImage = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen bg-[rgba(0,0,0,.5)] p-4 flex flex-col justify-center items-center">
      <div className="absolute top-6 right-6 w-fit h-fit bg-white shadow-md p-2 rounded-full">
        <IoClose size="1.25rem" />
      </div>
      <div className=" w-full md:w-3/4">
        <ImagePreview
          Horizontal
          BigPreview
          src="https://images.unsplash.com/photo-1652039033536-5d171726e670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
      </div>
    </div>
  );
};

export default BigImage;
