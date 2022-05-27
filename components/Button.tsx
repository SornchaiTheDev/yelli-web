import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  color?: string;
  className?: string;
}

const Button = ({
  className,
  children,
  color = "black",
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-lg font-semibold hover:brightness-95 duration-200 ${className}`}
      style={{ color }}
    >
      {children}
    </button>
  );
};

export default Button;
