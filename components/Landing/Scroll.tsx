import React from "react";
import { BiMouse } from "react-icons/bi";
import { HiArrowNarrowDown } from "react-icons/hi";
function Scroll() {
  return (
    <div className="flex flex-col justify-center items-center gap-2  mb-10">
      <BiMouse size="2rem" />
      <HiArrowNarrowDown size="1.5rem" className="animate-bounce duration-300" />
    </div>
  );
}

export default Scroll;
