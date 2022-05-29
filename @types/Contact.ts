import { PlanProps } from "./Plan";

export interface ContactProps {
  selectedPlan: PlanProps;
  cancelPlan: () => void;
}
