import { MutableRefObject, useEffect, useState } from "react";

function useClickOutSide(ref: MutableRefObject<HTMLDivElement | null>) {
  const [isOutside, setIsOutside] = useState(true);
  const handleClickOutside = (e: any) => {
    if (ref.current) {
      setIsOutside(!ref.current.contains(e.target));
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return isOutside;
}

export default useClickOutSide;
