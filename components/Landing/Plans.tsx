import { BsCheckLg } from "react-icons/bs";
import { forwardRef } from "react";
import useWindow from "@hooks/useWindow";

type CardProps = {
  contactRef: React.RefObject<HTMLDivElement>;
};
const Card = ({ contactRef }: CardProps) => {
  const { width } = useWindow();
  const handleOnPricingClick = () => {
    const isMobile = width < 728;
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: isMobile ? "nearest" : "center",
    });
  };
  return (
    <div className="bg-white border-2 w-full rounded-lg p-4 shadow-lg h-[60vh] flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Bronze</h2>
      <hr />
      <div className="flex flex-col gap-2 h-full">
        <div className="flex items-center gap-4">
          <BsCheckLg />
          <h2>Photo Shoot</h2>
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
        {[...Array(4)].map((_, i) => (
          <Card contactRef={contactRef} />
        ))}
      </div>
    </div>
  );
});

export default Plans;
