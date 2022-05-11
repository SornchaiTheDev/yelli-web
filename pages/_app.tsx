import { useState, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import LoadingBar from "@components/LoadingBar";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
  const [isStart, setIsStart] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = () => setIsStart(true);
    const handleRouteStop = () => setIsStart(false);
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteStop);
    router.events.on("routeChangeError", handleRouteStop);
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteStop);
      router.events.off("routeChangeError", handleRouteStop);
    };
  }, [router]);

  return (
    <>
      <LoadingBar isStart={isStart} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
