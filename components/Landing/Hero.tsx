import Button from "@components/Button";
import { useRouter } from "next/router";
import useWindow from "../../hooks/useWindow";
import Image from "next/image";
type HeroProps = {
  plansRef: React.RefObject<HTMLDivElement>;
};
const Hero = ({ plansRef }: HeroProps) => {
  const { width } = useWindow();
  const scrollToPlans = () => {
    const isMobile = width < 728;
    plansRef.current?.scrollIntoView({
      behavior: "smooth",
      block: isMobile ? "nearest" : "center",
    });
  };
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full mt-48">
      <div className="h-full flex flex-col justify-center gap-4 px-10">
        <h2 className="text-6xl font-bold">Save your memories into photos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto
          nostrum libero. Id, numquam totam unde reiciendis possimus magnam
          quasi obcaecati
        </p>
        <div className="flex gap-2">
          <Button className="bg-yellow-300 shadow-md" onClick={scrollToPlans}>
            View Plans
          </Button>
          <Button
            className="bg-gray-200 shadow-md"
            onClick={() => router.push("/gallery")}
          >
            Gallery
          </Button>
        </div>
      </div>

      <div className="relative">
        <Image
          layout="fill"
          className="absolute top-28 -left-10 -z-10"
          width={200}
          height={300}
          src="/decoration/blur.svg"
          alt="Blur decoration for Hero Section"
        />
      </div>
    </div>
  );
};

export default Hero;
