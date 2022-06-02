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
      <div className="pt-32 md:pt-22 bg-white py-10" ref={ref}>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-4 lg:px-20 ">
          <div>
            <div>
              <h2 className="text-4xl xl:text-5xl  font-medium">
                {intl.formatMessage({ id: "hero.title1" })}{" "}
                <span className="underline underline-offset-4 decoration-blue-400 decoration-wavy  leading-loose">
                  {intl.formatMessage({ id: "hero.title.memory" })}
                </span>{" "}
                {""} <br />
                {intl.formatMessage({ id: "hero.title2" })}
              </h2>

              <p className="max-w-lg mt-4">
                {intl.formatMessage({ id: "hero.body" })}
              </p>
            </div>
            <div className="inline-flex gap-2 justify-center my-4">
              <Button
                className="bg-blue-400 text-white"
                onClick={scrollToPlans}
              >
                {intl.formatMessage({ id: "hero.viewplans" })}
              </Button>
              <Button
                className="border-blue-400 text-blue-400"
                style={{ borderWidth: 2 }}
                onClick={() => router.push("/gallery")}
              >
                {intl.formatMessage({ id: "hero.gallery" })}
              </Button>
            </div>
          </div>

          <video
            className="w-full lg:w-1/2 rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            src="https://firebasestorage.googleapis.com/v0/b/yelli-bebb3.appspot.com/o/assets%2Fpip.mp4?alt=media&token=38de6dec-b00b-4005-a76c-6b5801ef1316"
          />
          {/* <video
              className="w-full md:w-1/2 rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              src="https://firebasestorage.googleapis.com/v0/b/yelli-bebb3.appspot.com/o/assets%2F3d.mp4?alt=media&token=5db42a80-7ac8-441e-add0-20fcb46409f4"
            /> */}
        </div>
      </div>
    </>
  );
});

Hero.displayName = "Hero";

export default Hero;
