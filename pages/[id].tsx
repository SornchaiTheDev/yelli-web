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
import BackToGallery from "../components/PhotoExplorer/Buttons/BackToGallery";
import ImageCard from "../components/PhotoExplorer/ImageCard";

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
    <div className="min-h-screen h-screen bg-gray-50">
      <Head>
        <title>Yelli</title>
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 mt-10">
        <BackToGallery />
        <div className="grid grid-cols-2 bg-yellow-500">
          <ImagePreview
            src="https://images.unsplash.com/photo-1651156358469-9c33c285685d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            name="IMG_001.jpeg"
          />
          
          <h2 className="text-center mt-10 font-medium">More Photos</h2>
          <div className="grid grid-cols-2 justify-items-center place-items-center gap-4">
            {photo.src !== null && (
              <>
                <ImageCard
                  src="https://images.unsplash.com/photo-1651156358469-9c33c285685d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  name="IMG_001.jpeg"
                />
                <ImageCard
                  src="https://images.unsplash.com/photo-1651156358469-9c33c285685d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  name="IMG_001.jpeg"
                />
                <ImageCard
                  src="https://images.unsplash.com/photo-1651156358469-9c33c285685d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  name="IMG_001.jpeg"
                />
                <ImageCard
                  src="https://images.unsplash.com/photo-1651156358469-9c33c285685d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  name="IMG_001.jpeg"
                />
              </>
            )}
          </div>
        </div>
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
