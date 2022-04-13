import type { NextPage, GetStaticProps } from "next";
import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import ImagePreview from "../components/ImagePreview";
import Uploading from "../components/Uploading";
import { store } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

type Props = {
  src: string | null;
};
const Home: NextPage<Props> = (props) => {
  const { src } = props;

  return (
    <div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Yelli</title>
      </Head>
      <Header />
      <div className="mt-5 flex flex-col justify-start space-y-10 items-center">
        {src !== null ? <ImagePreview src={src} /> : <Uploading />}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const docRef = doc(store, "upload", "wH53zwoP0QhhGh8WKl28");
  const photo = await getDoc(docRef);
  const isUploaded = photo.exists();
  return {
    props: {
      src: isUploaded ? photo.data().src : null,
    },
  };
};
