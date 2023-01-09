import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
import emailjs from "emailjs-com";

export default function Document() {
  useEffect(() => {
    const emailJsPrivateKey = process.env.EMAILJS_PRIVATE_KEY;
    emailjs.init(emailJsPrivateKey!);
  }, []);
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700&family=Kanit:wght@300;400;500;600;700&family=Pacifico&family=Prompt:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="logo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="logo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="logo/favicon-16x16.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
