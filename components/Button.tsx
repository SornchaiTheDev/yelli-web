import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  background: string;
  onClick?: () => void;
  color?: string;
}

const Button = ({
  children,
  background,
  color = "black",
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-semibold shadow-sm hover:brightness-95 duration-200`}
      style={{ background, color }}
    >
      {children}
    </button>
  );
};

export default Button;
