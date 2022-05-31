import { PlanProps } from "@decor/Plan";
import { BiTime } from "react-icons/bi";
import { useIntl } from "react-intl";

type SelectedPlanCardProps = {
  plan: PlanProps;
};
const SelectedPlanCard = ({ plan }: SelectedPlanCardProps) => {
  const intl = useIntl();
  const { plan_name, plan_hours, plan_tools } = plan;
  return (
    <div className="bg-white border-2 w-full rounded-lg p-4 h-fit flex flex-col gap-4">
      <span className="inline-flex gap-2 items-center justify-between w-full">
        <h2 className="text-2xl font-semibold">{plan_name}</h2>
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
          <span className="inline-flex gap-2 items-center justify-between w-full">
            <h2 className="text-xl">
              {intl.formatMessage({ id: "plans.tools" })}
            </h2>
            <h2>
              {plan_tools} {intl.formatMessage({ id: "plans.tools.unit" })}
            </h2>
          </span>
          <p>{intl.formatMessage({ id: "plans.tools.description" })}</p>
          <div className="inline-flex items-center gap-2">
            <BiTime />
            <h2>{intl.formatMessage({ id: "plans.hours.amount" })} {plan_hours} {intl.formatMessage({ id: "plans.hours.unit" })}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlanCard;
