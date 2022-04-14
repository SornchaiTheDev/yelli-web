import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import ImagePreview from "../components/ImagePreview";
import Uploading from "../components/Uploading";
import { store } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import NotFound from "../components/NotFound";

type Props = {
  src: string | null;
};

const Home: NextPage<Props> = () => {
  const router = useRouter();
  const { photo } = router.query;
  const [src, setSrc] = useState<string>("uploading");
  const [isExist, setIsExist] = useState<boolean>(true);
  useEffect(() => {
    const docId = photo as string;
    const docRef = doc(store, "upload", docId);
    onSnapshot(docRef, (snapshot) => {
      if (!snapshot.exists()) return setIsExist(false);
      const { src } = snapshot.data();
      setSrc(src);
    });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Yelli</title>
      </Head>
      <Header />
      <div className="mt-5 flex flex-col justify-start space-y-10 items-center">
        {!isExist ? (
          <NotFound />
        ) : src === "uploading" ? (
          <Uploading />
        ) : (
          <ImagePreview src={src} />
        )}
      </div>
    </div>
  );
};

export default Home;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
