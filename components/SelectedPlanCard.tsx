import { PlanProps } from "@decor/Plan";
import { BiTime } from "react-icons/bi";

type SelectedPlanCardProps = {
  plan: PlanProps;
};
const SelectedPlanCard = ({ plan }: SelectedPlanCardProps) => {
  const { plan_name, plan_hours, plan_tools } = plan;
  return (
    <div className="bg-white border-2 w-full rounded-lg p-4 h-fit flex flex-col gap-4">
      <span className="inline-flex gap-2 items-center justify-between w-full">
        <h2 className="text-2xl font-semibold">{plan_name}</h2>
        <h2 className="font-bold text-xl">
          {(plan_tools * 5000 + plan_hours * 2000)
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
            <h2>{plan_tools} ชุด</h2>
          </span>
          <p>(กล้อง DSLR , ปริ้นท์เตอร์ , ชุดไฟสตูดิโอ , พร็อพในงาน )</p>
          <div className="inline-flex items-center gap-2">
            <BiTime />
            <h2>{plan_hours} ชั่วโมง</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlanCard;
