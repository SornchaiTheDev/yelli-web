import React from "react";

interface BarInterface {
  animationDuration: number;
  progress: number;
}

function Bar({ animationDuration, progress }: BarInterface) {
  return (
    <div
      className="fixed top-0 left-0 bg-yellow-500 w-full h-1 shadow-sm shadow-yellow-500 z-50"
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms ease-in-out`,
      }}
    ></div>
  );
}

export default Bar;
