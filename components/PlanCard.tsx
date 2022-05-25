import useWindow from "@hooks/useWindow";
import { PlanProps } from "@decor/Plan";
import { BiTime } from "react-icons/bi";
import { toCurrency } from "@utils/currency";

type CardProps = {
  name: string;
  tools: number;
  hours: number;
  contactRef: React.RefObject<HTMLDivElement>;
  selectPlan: (plan: PlanProps) => void;
};

const Card = ({ contactRef, name, tools, hours, selectPlan }: CardProps) => {
  const { width } = useWindow();
  const handleOnPricingClick = () => {
    const isMobile = width < 728;
    selectPlan({ name, tools, hours });
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
          {toCurrency(tools * 5000 + hours * 2000)} บาท
        </h2>
      </span>

      <hr />
      <div className="flex flex-col gap-2 h-full">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h2>ค่าอุปกรณ์</h2>
            <h2>{tools} ชุด</h2>
            <h2>{toCurrency(tools * 5000)} บาท</h2>
          </div>
          <p>( ช่างภาพ , กล้อง DSLR , ปริ้นท์เตอร์ , ชุดไฟสตูดิโอ )</p>
          <div className="flex justify-between mt-16">
            <div className="inline-flex items-center gap-2">
              <BiTime />
              <h2>จำนวน {hours} ชั่วโมง</h2>
            </div>
            <h2>{toCurrency(hours * 2000)} บาท</h2>
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

export default Card;
