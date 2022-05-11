import Link from "next/link";
const Album = () => {
  return (
    <div className="flex flex-col items-center gap-4 col-span-1">
      <div className="grid grid-cols-2 gap-2 justify-items-stretch place-items-stretch w-full">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Link href="/gallery/test">
              <div className="rounded-lg overflow-hidden bg-gray-50  aspect-w-3 aspect-h-2 cursor-pointer">
                <img
                  className="h-full object-cover object-center pointer-events-none"
                  src="https://images.unsplash.com/photo-1651821486767-316ebf5a9b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                />
              </div>
            </Link>
          ))}

        <div className="rounded-lg overflow-hidden bg-gray-50 relative  aspect-w-3 aspect-h-2 cursor-pointer">
          <div className="bg-[rgba(0,0,0,.40)] top-0 left-0 w-full h-full absolute flex justify-center items-center z-10">
            <h2 className="text-white font-semibold text-xl">+24</h2>
          </div>
          <img
            className="h-full object-cover object-center pointer-events-none"
            src="https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
        </div>
      </div>
      <h2>Home Party • 28 April</h2>
    </div>
  );
};

export default Album;
