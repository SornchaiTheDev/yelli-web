import { forwardRef } from "react";
import { PlanProps } from "@decor/Plan";
import CustomCard from "@components/CustomCard";
import Card from "@components/PlanCard";
import { useIntl } from "react-intl";

type PlansProps = {
  contactRef: React.RefObject<HTMLDivElement>;
  planSelected: (plan: PlanProps) => void;
};
const Plans = forwardRef<HTMLDivElement, PlansProps>(
  ({ contactRef, planSelected }, ref) => {
    const intl = useIntl();

    const plans = [
      {
        name: 1,
        tools: 1,
        hours: 4,
      },
      {
        name: 2,
        tools: 2,
        hours: 4,
      },
      {
        name: 3,
        tools: 3,
        hours: 4,
      },
    ];

    return (
      <div ref={ref} id="plans" className="my-14 h-full">
        <h2 className="text-2xl font-semibold text-center">
          {intl.formatMessage({ id: "plans.title" })}
        </h2>
        <div className="flex flex-wrap justify-center gap-4 h-full mt-10 px-2">
          {plans.map(({ name, hours, tools }, i) => (
            <Card
              plan_number={name}
              plan_hours={hours}
              plan_tools={tools}
              key={i}
              contactRef={contactRef}
              selectPlan={planSelected}
            />
          ))}
          <CustomCard contactRef={contactRef} selectPlan={planSelected} />
        </div>
      </div>
    );
  }
);

Plans.displayName = "Plans";

export default Plans;
