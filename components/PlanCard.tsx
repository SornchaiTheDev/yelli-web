import useWindow from "@hooks/useWindow";
import { PlanProps } from "@decor/Plan";
import { BiTime } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { toCurrency } from "@utils/currency";
import { useIntl } from "react-intl";

type CardProps = {
  plan_number: number;
  plan_tools: number;
  plan_hours: number;
  contactRef: React.RefObject<HTMLDivElement>;
  selectPlan: (plan: PlanProps) => void;
};

const Card = ({
  contactRef,
  plan_number,
  plan_tools,
  plan_hours,
  selectPlan,
}: CardProps) => {
  const { width } = useWindow();
  const intl = useIntl();
  const plan_name =
    intl.formatMessage({ id: "plans.title" }) + " " + plan_number;
  const handleOnPricingClick = () => {
    const isMobile = width < 728;
    selectPlan({
      plan_name,
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
  return (
    <div className="bg-white border-2 rounded-lg p-4 shadow-lg flex flex-col gap-4 w-[400px] lg:w-[350px]">
      <span className="inline-flex gap-2 items-center justify-between w-full">
        <h2 className="text-2xl font-normal">{plan_name}</h2>
        <h2 className="font-bold text-xl">
          {toCurrency(plan_tools * 5000 + plan_hours * 2000)} ฿
        </h2>
      </span>

      <hr />

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl">
            {intl.formatMessage({ id: "plans.tools" })} ({plan_tools}{" "}
            {intl.formatMessage({ id: "plans.tools.unit" })})
          </h2>

          <h2>{toCurrency(plan_tools * 5000)} ฿</h2>
        </div>
        <div className="flex-1 mt-5 hidden md:block"></div>

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

        <div className="flex justify-between mt-3">
          <div className="inline-flex items-center gap-2">
            <BiTime />
            <h2>
              {intl.formatMessage({ id: "plans.hours.amount" })} {plan_hours}{" "}
              {intl.formatMessage({ id: "plans.hours.unit" })}
            </h2>
          </div>
          <h2>{toCurrency(plan_hours * 2000)} ฿</h2>
        </div>
      </div>

      <div className="flex-1 my-10"></div>

      <button
        onClick={handleOnPricingClick}
        className="px-8 py-4 bg-blue-300 rounded-lg font-bold flex-1 hover:brightness-95 duration-200"
      >
        {intl.formatMessage({ id: "contact.title" })}
      </button>
    </div>
  );
};

export default Card;
