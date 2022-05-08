import Button from "@components/Button";
type HeroProps = {
  plansRef: React.RefObject<HTMLDivElement>;
};
const Hero = ({ plansRef }: HeroProps) => {
  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full mt-32 ">
      <div className="relative">
        <img
          src="./decoration/blur.svg"
          className="absolute -top-24 -left-10 -z-10"
        />
        <div className="top-1/4 flex flex-col gap-4 px-10">
          <h2 className="text-6xl font-bold">Save your memories into photos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            iusto nostrum libero. Id, numquam totam unde reiciendis possimus
            magnam quasi obcaecati
          </p>
          <div className="flex gap-2">
            <Button background="#FF8C32" onClick={scrollToPlans}>
              View Plans
            </Button>
            <Button background="#DDDDDD">Gallery</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
