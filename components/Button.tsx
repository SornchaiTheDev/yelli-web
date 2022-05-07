import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  background: string;
  color?: string;
}

const Button = ({ children, background, color = "black" }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold shadow-sm hover:brightness-95 duration-200`}
      style={{ background, color }}
    >
      {children}
    </button>
  );
};

export default Button;
