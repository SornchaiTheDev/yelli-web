import { useState } from "react";
import { PlanProps } from "@decor/Plan";
import useWindow from "@hooks/useWindow";
import { BiTime } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { useIntl } from "react-intl";

type CustomCardProps = {
  contactRef: React.RefObject<HTMLDivElement>;
  selectPlan: (plan: PlanProps) => void;
};

const CustomCard = ({ contactRef, selectPlan }: CustomCardProps) => {
  const { width } = useWindow();
  const intl = useIntl();
  const [plan_tools, setTools] = useState<number>(1);
  const [plan_hours, setHours] = useState<number>(1);
  const handleOnPricingClick = () => {
    const isMobile = width < 728;
    selectPlan({
      plan_name: intl.formatMessage({ id: "plans.custom.title" }),
      plan_tools,
      plan_hours,
      plan_price: (plan_tools * 5000 + plan_hours * 2000)
        .toString()
        .replace(/(\d)(?=(\d{3})+\b)/g, "$1,"),
    });
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: isMobile ? "nearest" : "center",
    });
  };

  const handleOnToolsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTools(Number(e.target.value));
  };

  const handleOnHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHours(Number(e.target.value));
  };

  return (
    <>
      <div className="bg-white border-2 rounded-lg p-4 shadow-lg flex flex-col gap-4 w-[400px] lg:w-[350px]">
        <span className="inline-flex gap-2 items-center justify-between w-full">
          <h2 className="text-2xl">
            {intl.formatMessage({ id: "plans.custom.title" })}
          </h2>
          <h2 className="font-bold text-xl">
            {(plan_tools * 5000 + plan_hours * 2000)
              .toString()
              .replace(/(\d)(?=(\d{3})+\b)/g, "$1,")}{" "}
            ฿
          </h2>
        </span>
        <hr />

        <div className="flex flex-col gap-4">
          <span className="flex flex-col gap-2">
            <span className="inline-flex gap-2 items-center justify-between w-full">
              <h2 className="text-xl">
                {intl.formatMessage({ id: "plans.tools" })}
              </h2>
              <h2>
                {plan_tools} {intl.formatMessage({ id: "plans.tools.unit" })}
              </h2>
            </span>

            <input
              type="range"
              className="appearance-none overflow-hidden bg-gray-200 rounded-full h-5 my-2"
              value={plan_tools}
              min={1}
              max={3}
              onChange={handleOnToolsChange}
            />

            <div className="inline-flex items-center gap-2 text-md">
              <BsCheckCircleFill />
              <h2>Photographer</h2>
            </div>
            <div className="inline-flex items-center gap-2 text-md">
              <BsCheckCircleFill />
              <h2>DSLR Camera</h2>
            </div>
            <div className="inline-flex items-center gap-2 text-md">
              <BsCheckCircleFill />
              <h2>Printer</h2>
            </div>
            <div className="inline-flex items-center gap-2 text-md">
              <BsCheckCircleFill />
              <h2>Studio Lighting</h2>
            </div>
          </span>
          <div className="inline-flex items-center gap-2">
            <BiTime />
            <h2>
              {intl.formatMessage({ id: "plans.hours.amount" })} {plan_hours}{" "}
              {intl.formatMessage({ id: "plans.hours.unit" })}
            </h2>
          </div>

          <input
            type="range"
            className="appearance-none overflow-hidden bg-gray-200 rounded-full h-5"
            value={plan_hours}
            min={1}
            max={5}
            onChange={handleOnHoursChange}
          />
        </div>

        <div className="flex-1 my-10"></div>

        <button
          onClick={handleOnPricingClick}
          className="px-8 py-4 bg-blue-300 rounded-lg font-bold flex-1 hover:brightness-95 duration-200"
        >
          {intl.formatMessage({ id: "contact.title" })}
        </button>
      </div>
    </>
  );
};

export default CustomCard;
