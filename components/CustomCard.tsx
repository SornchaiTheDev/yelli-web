import { useState } from "react";
import { PlanProps } from "@decor/Plan";
import useWindow from "@hooks/useWindow";
import { BiTime } from "react-icons/bi";
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
      <div className="bg-white border-2 w-3/4 md:w-full rounded-lg p-4 shadow-lg h-[55vh] flex flex-col gap-4">
        <span className="inline-flex gap-2 items-center justify-between w-full">
          <h2 className="text-2xl font-semibold">
            {intl.formatMessage({ id: "plans.custom.title" })}
          </h2>
          <h2 className="font-bold text-xl">
            {(plan_tools * 5000 + plan_hours * 2000)
              .toString()
              .replace(/(\d)(?=(\d{3})+\b)/g, "$1,")}{" "}
            {intl.formatMessage({ id: "plans.currency" })}
          </h2>
        </span>
        <hr />
        <div className="flex flex-col gap-2 h-full">
          <div className="flex flex-col gap-4">
            <span className="flex flex-col gap-2">
              <span className="inline-flex gap-2 items-center justify-between w-full">
                <h2 className="text-xl">
                  {intl.formatMessage({ id: "plans.tools" })}
                </h2>
                <h2>{plan_tools} {intl.formatMessage({ id: "plans.tools.unit" })}</h2>
              </span>
              <p>{intl.formatMessage({ id: "plans.tools.description" })}</p>

              <input
                type="range"
                className="appearance-none overflow-hidden bg-gray-200 rounded-full h-5"
                value={plan_tools}
                min={1}
                max={3}
                onChange={handleOnToolsChange}
              />
            </span>
            <div className="inline-flex items-center gap-2 mt-10">
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
        </div>
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
