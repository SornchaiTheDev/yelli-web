import React from "react";
import { BiMouse } from "react-icons/bi";
import { HiArrowNarrowDown } from "react-icons/hi";
function Scroll() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <BiMouse size="2rem" />
      <HiArrowNarrowDown size="1.5rem" />
    </div>
  );
}

export default Scroll;
