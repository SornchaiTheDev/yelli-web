import Button from "@components/Button";
import { useRouter } from "next/router";
import useWindow from "../../hooks/useWindow";
import Image from "next/image";
import Scroll from "./Scroll";
import Typewriter from "typewriter-effect";
import { forwardRef } from "react";
import { useIntl } from "react-intl";
type HeroProps = {
  plansRef: React.RefObject<HTMLDivElement>;
};
const Hero = forwardRef<HTMLDivElement, HeroProps>(({ plansRef }, ref) => {
  const { width } = useWindow();
  const intl = useIntl();
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
      <div className="mt-32 md:mt-48 gap-20" ref={ref}>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 h-full mt-48"> */}
        <div className="h-full px-10 flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold text-center">
            {intl.formatMessage({ id: "hero.title" })}
          </h2>

          <p className="max-w-lg mt-10 text-center">
            {intl.formatMessage({ id: "hero.body" })}
          </p>
          <div className="flex gap-2 justify-center my-10">
            <Button className="bg-yellow-300" onClick={scrollToPlans}>
            {intl.formatMessage({ id: "hero.viewplans" })}
            </Button>
            <Button
              className="bg-gray-200"
              onClick={() => router.push("/gallery")}
            >
              {intl.formatMessage({ id: "hero.gallery" })}
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
});

Hero.displayName = "Hero";

export default Hero;
