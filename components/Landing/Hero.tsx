import Button from "@components/Button";
import { useRouter } from "next/router";
import useWindow from "../../hooks/useWindow";
import Image from "next/image";
import Scroll from "./Scroll";
import Typewriter from "typewriter-effect";
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
    <>
      <div className="mt-24 md:mt-48 gap-20">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 h-full mt-48"> */}
        <div className="h-full px-10">
          <h2 className="text-5xl font-bold text-center">
            <Typewriter
              options={{
                strings: [
                  "เก็บความทรงจำของคุณให้อยู่ในรูปถ่าย",
                  "ของที่ละลึกในช่วงเวลาพิเศษของคุณ",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <p className="max-w-1/2 mt-10 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            iusto nostrum libero. Id, numquam totam unde reiciendis possimus
            magnam quasi obcaecati
          </p>
          <div className="flex gap-2 justify-center my-10">
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
          <div className="flex justify-center items-center gap-20 flex-wrap">
            <video
              className="w-full md:w-1/2 rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              src="https://firebasestorage.googleapis.com/v0/b/yelli-bebb3.appspot.com/o/assets%2Fpip.mp4?alt=media&token=38de6dec-b00b-4005-a76c-6b5801ef1316"
            />
            <video
              className="w-full md:w-1/2 rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              src="https://firebasestorage.googleapis.com/v0/b/yelli-bebb3.appspot.com/o/assets%2F3d.mp4?alt=media&token=5db42a80-7ac8-441e-add0-20fcb46409f4"
            />
          </div>
        </div>
      </div>
      <Scroll />
    </>
  );
};

export default Hero;
