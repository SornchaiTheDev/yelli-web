import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
const Hamburger = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="md:hidden" onClick={onClick}>
    {isOpen ? <MdClose size="1.5rem" /> : <GiHamburgerMenu size="1.5rem" />}
  </div>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`fixed md:static left-0 top-0 z-20 p-2 w-full bg-white`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 w-full">
        <div className="px-2 py-4 flex justify-between items-center relative w-full">
          <h1 className="text-2xl md:text-2xl text-gray-900">GoodShot</h1>
          <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        {isOpen && (
          <ul className="flex md:hidden flex-col items-stretch px-2 space-y-3 cursor-pointer w-full z-20">
            <li className="font-bold border-b-2 border-yellow-500">Home</li>
            <li className="">Plans</li>
            <li className="">Gallery</li>
            <li className="">Contact</li>
          </ul>
        )}

        <ul className="hidden md:flex items-stretch px-0 space-x-3 cursor-pointer w-fit z-20">
          <li className="font-bold border-b-2 border-yellow-500">Home</li>
          <li className="">Plans</li>
          <li className="">Gallery</li>
          <li className="">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
