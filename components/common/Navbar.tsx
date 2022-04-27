function Navbar() {
  return (
    <nav className="w-full flex justify-start items-center fixed shadow-sm bg-white">
      <div className="container mx-auto px-2 py-4 flex justify-between items-center relative">
        <h1 className="text-2xl md:text-3xl text-gray-900">Yelli</h1>

        <ul className="flex items-stretch space-x-3 cursor-pointer">
          <li className="">Home</li>
          <li className="">Portfolio</li>
          <li className="font-bold border-b-2 border-yellow-500">Gallery</li>
          <li className="">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
