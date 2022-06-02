import { MdClose } from "react-icons/md";

const MenuOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-blue-300  z-20 px-10">
      <div className="flex flex-col justify-center items-center gap-20 pt-10">
        <MdClose size="2rem" className="self-end" />
        <h2 className="font-bold text-4xl ">Home</h2>
        <h2 className="text-4xl font-semibold text-white">Portfolio</h2>
        <h2 className="text-4xl font-semibold text-white">Gallery</h2>
        <h2 className="text-4xl font-semibold text-white">Contact</h2>
      </div>
    </div>
  );
};

export default MenuOverlay;
