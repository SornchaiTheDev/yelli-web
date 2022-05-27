import { forwardRef } from "react";
import { PlanProps } from "@decor/Plan";
import CustomCard from "@components/CustomCard";
import Card from "@components/PlanCard";

const plans = [
  { name: "แพ็คเกจ 1", tools: 1, hours: 4 },
  { name: "แพ็คเกจ 2", tools: 2, hours: 4 },
  { name: "แพ็คเกจ 3", tools: 3, hours: 4 },
];

type PlansProps = {
  contactRef: React.RefObject<HTMLDivElement>;
  planSelected: (plan: PlanProps) => void;
};
const Plans = forwardRef<HTMLDivElement, PlansProps>(
  ({ contactRef, planSelected }, ref) => {
    return (
      <div
        ref={ref}
        id="plans"
        className="my-14 flex flex-col justify-center items-center h-full"
      >
        <h2 className="text-2xl font-semibold">Plans</h2>
        <div className="flex justify-center flex-wrap md:flex-nowrap w-full gap-4 h-full mt-10 px-2">
          {plans.map(({ name, hours, tools }, i) => (
            <Card
              name={name}
              hours={hours}
              tools={tools}
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
