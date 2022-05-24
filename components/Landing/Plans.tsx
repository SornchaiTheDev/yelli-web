import { BiTime } from "react-icons/bi";
import { forwardRef } from "react";
import useWindow from "@hooks/useWindow";
import { useState } from "react";

type CardProps = {
  name: string;
  tools: number;
  hours: number;
  contactRef: React.RefObject<HTMLDivElement>;
};

const plans = [
  { name: "แพ็คเกจ 1", tools: 1, hours: 1 },
  { name: "แพ็คเกจ 2", tools: 2, hours: 2 },
  { name: "แพ็คเกจ 3", tools: 3, hours: 3 },
];
const Card = ({ contactRef, name, tools, hours }: CardProps) => {
  const { width } = useWindow();
  const handleOnPricingClick = () => {
    const isMobile = width < 728;
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: isMobile ? "nearest" : "center",
    });
  };
  return (
    <div className="bg-white border-2 w-full rounded-lg p-4 shadow-lg h-[50vh] flex flex-col gap-4">
      <span className="inline-flex gap-2 items-center justify-between w-full">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <h2 className="font-bold text-xl">
          {(tools * 5000 + hours * 2000)
            .toString()
            .replace(/(\d)(?=(\d{3})+\b)/g, "$1,")}{" "}
          บาท
        </h2>
      </span>

      <hr />
      <div className="flex flex-col gap-2 h-full">
        <div className="flex flex-col gap-4">
          <span className="inline-flex gap-2 items-center justify-between w-full">
            <h2 className="text-xl">ค่าอุปกรณ์</h2>
            <h2>{tools} ชุด</h2>
          </span>
          <p>(กล้อง DSLR , ปริ้นท์เตอร์ , ชุดไฟสตูดิโอ , พร็อพในงาน )</p>
          <div className="inline-flex items-center gap-2">
            <BiTime />
            <h2>{hours} ชั่วโมง</h2>
          </div>
        </div>
      </div>
      <button
        onClick={handleOnPricingClick}
        className="px-8 py-4 bg-yellow-300 rounded-full font-bold flex-1 hover:brightness-95 duration-200"
      >
        Contact
      </button>
    </div>
  );
};

type CustomCardProps = {
  contactRef: React.RefObject<HTMLDivElement>;
};

const CustomCard = ({ contactRef }: CustomCardProps) => {
  const { width } = useWindow();
  const [tools, setTools] = useState<number>(1);
  const [hours, setHours] = useState<number>(1);
  const handleOnPricingClick = () => {
    const isMobile = width < 728;
    // contactRef.current?.scrollIntoView({
    //   behavior: "smooth",
    //   block: isMobile ? "nearest" : "center",
    // });
  };

  const handleOnToolsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTools(Number(e.target.value));
  };

  const handleOnHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHours(Number(e.target.value));
  };

  return (
    <>
      <div className="bg-white border-2 w-full rounded-lg p-4 shadow-lg h-[50vh] flex flex-col gap-4">
        <span className="inline-flex gap-2 items-center justify-between w-full">
          <h2 className="text-2xl font-semibold">กำหนดเอง</h2>
          <h2 className="font-bold text-xl">
            {(tools * 5000 + hours * 2000)
              .toString()
              .replace(/(\d)(?=(\d{3})+\b)/g, "$1,")}{" "}
            บาท
          </h2>
        </span>
        <hr />
        <div className="flex flex-col gap-2 h-full">
          <div className="flex flex-col gap-4">
            <span className="flex flex-col gap-2">
              <span className="inline-flex gap-2 items-center justify-between w-full">
                <h2 className="text-xl">ค่าอุปกรณ์</h2>
                <h2>{tools} ชุด</h2>
              </span>
              <p>(กล้อง DSLR , ปริ้นท์เตอร์ , ชุดไฟสตูดิโอ , พร็อพในงาน )</p>

              <input
                type="range"
                className="appearance-none overflow-hidden bg-gray-200 rounded-full h-5"
                value={tools}
                min={1}
                max={10}
                onChange={handleOnToolsChange}
              />
            </span>
            <div className="inline-flex items-center gap-2">
              <BiTime />
              <h2>{hours} ชั่วโมง</h2>
            </div>

            <input
              type="range"
              className="appearance-none overflow-hidden bg-gray-200 rounded-full h-5"
              value={hours}
              min={1}
              max={20}
              onChange={handleOnHoursChange}
            />
          </div>
        </div>
        <button
          onClick={handleOnPricingClick}
          className="px-8 py-4 bg-yellow-300 rounded-full font-bold flex-1 hover:brightness-95 duration-200"
        >
          Contact
        </button>
      </div>
    </>
  );
};

type PlansProps = {
  contactRef: React.RefObject<HTMLDivElement>;
};
const Plans = forwardRef<HTMLDivElement, PlansProps>(({ contactRef }, ref) => {
  return (
    <div
      ref={ref}
      id="plans"
      className="my-14 flex flex-col justify-center items-center h-full"
    >
      <h2 className="text-2xl font-semibold">Plans</h2>
      <div className="flex flex-wrap md:flex-nowrap w-full gap-4 h-full mt-10 px-2">
        {plans.map(({ name, hours, tools }, i) => (
          <Card
            name={name}
            hours={hours}
            tools={tools}
            key={i}
            contactRef={contactRef}
          />
        ))}
        <CustomCard contactRef={contactRef} />
      </div>
    </div>
  );
});

Plans.displayName = "Plans";

export default Plans;
