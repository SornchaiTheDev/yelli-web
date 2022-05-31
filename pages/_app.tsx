import { useState, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import LoadingBar from "@components/LoadingBar";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import th from "@locale/th.json";
import en from "@locale/en.json";

interface MessagesI {
  [key: string]: {
    [key: string]: string;
  };
}
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

  const messages: MessagesI = {
    th,
    en,
  };

  return (
    <IntlProvider locale={router.locale!} messages={messages[router.locale!]}>
      <LoadingBar isStart={isStart} />
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
