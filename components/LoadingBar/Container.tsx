import { ReactNode } from "react";

interface ContainerInterface {
  animationDuration: number;
  isFinished: boolean;
  children: ReactNode;
}

function Container({
  animationDuration,
  isFinished,
  children,
}: ContainerInterface) {
  return (
    <div
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms ease-in-out`,
      }}
    >
      {children}
    </div>
  );
}

export default Container;
