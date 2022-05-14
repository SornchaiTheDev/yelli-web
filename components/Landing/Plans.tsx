import { BsCheckLg } from "react-icons/bs";
import { forwardRef } from "react";

const Card = () => {
  return (
    <div className="bg-white border-2 w-full rounded-lg p-4 shadow-lg h-[60vh] flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Bronze</h2>
      <hr />
      <div className="flex flex-col gap-2 h-full">
        <div className="flex items-center gap-4">
          <BsCheckLg />
          <h2>Photo Shoot</h2>
        </div>
      </div>
      <button className="px-8 py-4 bg-yellow-300 rounded-full font-bold flex-1 hover:brightness-95 duration-200">
        Contact
      </button>
    </div>
  );
};

const Plans = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      id="plans"
      className="my-14 flex flex-col justify-center items-center h-full"
    >
      <h2 className="text-2xl font-semibold">Plans</h2>
      <div className="flex flex-wrap md:flex-nowrap w-full gap-4 h-full mt-10 px-2">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
});

export default Plans;
