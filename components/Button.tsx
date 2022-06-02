import { CSSProperties } from "react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

const Button = ({
  className,
  style,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-4  rounded-lg font-semibold hover:brightness-95 duration-200 ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
