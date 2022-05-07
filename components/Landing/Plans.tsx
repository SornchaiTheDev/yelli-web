import { BsCheckLg } from "react-icons/bs";

const Card = () => {
  return (
    <div className="bg-white border-2 w-full rounded-lg p-4 shadow-lg h-[60vh] flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <h2 className="text-2xl font-semibold">Bronze</h2>
        <h2>12,500 บาท</h2>
      </div>
      <hr />
      <div className="flex flex-col gap-2 h-full">
        <div className="flex items-center gap-4">
          <BsCheckLg />
          <h2>Photo Shoot</h2>
        </div>
      </div>
      <button className="px-10 py-4 bg-yellow-500 rounded-lg font-bold flex-1">
        Contact
      </button>
    </div>
  );
};

function Plans() {
  return (
    <div className="mt-10 flex flex-col justify-center items-center h-full">
      <h2 className="text-2xl font-semibold">Plans</h2>
      <div className="flex flex-wrap md:flex-nowrap w-full gap-4 h-full mt-10 px-2">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Plans;
