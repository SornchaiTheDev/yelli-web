import type { NextPage } from "next";
import Head from "next/head";
import DownloadBtn from "../components/DownloadBtn";
import Header from "../components/Header";
import ImagePreview from "../components/ImagePreview";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Yelli</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="flex flex-col space-y-4 justify-center items-center h-screen">
        <ImagePreview />
        <DownloadBtn />
      </div>
    </div>
  );
};

export default Home;
