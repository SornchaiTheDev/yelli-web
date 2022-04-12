import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Loading from "../assets/lottie/loading.json";
import { useRouter } from "next/router";

function Uploading() {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  return (
    <div className="text-white font-bold text-xl">
      <Player style={{ width: 300, height: 300 }} loop autoplay src={Loading} />
      <h2 className="text-center">
        {locale === "en"
          ? "Your photo is uploading"
          : locale === "th"
          ? "รูปของคุณกำลังอัพโหลด"
          : locale === "jp"
          ? "あなたの写真がアップロードされています"
          : "上傳你的照片"}
      </h2>
      <h2 className="text-center">
        {locale === "en" ? "Please wait for a while" : "กรุณารอสักครู่"}
      </h2>
    </div>
  );
}

export default Uploading;
