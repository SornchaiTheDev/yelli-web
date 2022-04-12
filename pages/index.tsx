import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import DownloadBtn from "../components/DownloadBtn";
import Header from "../components/Header";
import ImagePreview from "../components/ImagePreview";
import Uploading from "../components/Uploading";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  return (
    <div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Yelli</title>
      </Head>
      <Header />
      <div className="mt-5 flex flex-col justify-start space-y-10 items-center">
        {isUploaded ? (
          <>
            <ImagePreview />
            <DownloadBtn />
          </>
        ) : (
          <Uploading />
        )}
      </div>
    </div>
  );
};

export default Home;
