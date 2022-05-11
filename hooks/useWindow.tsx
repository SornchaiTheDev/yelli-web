import { useEffect, useState } from "react";
type UseWindowProps = { width: number; height: number };
export default function useWindow(): UseWindowProps {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  const onChangeWindowSize = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onChangeWindowSize);
    return () => window.removeEventListener("resize", onChangeWindowSize);
  }, []);
  return { width: size.width, height: size.height };
}
