import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../components/common/Navbar";
import ImagePreview from "../components/PhotoExplorer/ImagePreview";
import Uploading from "../components/PhotoExplorer/Uploading";
import { store } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import NotFound from "../components/PhotoExplorer/NotFound";
import { Photo } from "../@types/Photo";

type Props = {
  src: string | null;
};

const Home: NextPage<Props> = () => {
  const router = useRouter();
  const { id } = router.query;
  const [photo, setPhoto] = useState<Photo>({ src: null, name: "" });
  const [isExist, setIsExist] = useState<boolean>(true);
  useEffect(() => {
    const docId = id as string;
    const docRef = doc(store, "upload", docId);
    onSnapshot(docRef, (snapshot) => {
      if (!snapshot.exists()) return setIsExist(false);
      setPhoto(snapshot.data() as Photo);
    });
  }, []);

  return (
    <div className="min-h-screen h-screen">
      <Head>
        <title>Yelli</title>
      </Head>
      <Navbar />
      <div className="h-full flex flex-col justify-center items-center px-4 container mx-auto">
        {!isExist ? (
          <NotFound />
        ) : photo.src === "uploading" ? (
          <Uploading />
        ) : (
          photo.src !== null && (
            <ImagePreview src={photo.src} name={photo.name} />
          )
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
