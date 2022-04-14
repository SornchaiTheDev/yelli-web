import { Player } from "@lottiefiles/react-lottie-player";
import Slot from "../assets/lottie/slot.json";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();
  const { locale } = router;
  return (
    <div className="text-white font-bold text-xl">
      <Player style={{ width: 300, height: 300 }} loop autoplay src={Slot} />
      <h2 className="text-center">
        {locale === "en"
          ? "Your photo is not found"
          : locale === "th"
          ? "ไม่พบรูปภาพของคุณ"
          : locale === "jp"
          ? "写真が見つかりません"
          : "找不到您的照片"}
      </h2>
      <h2 className="text-center">
        {locale === "en"
          ? "Make sure that your link is correct"
          : locale === "th"
          ? "ตรวจสอบให้แน่ใจว่าลิงก์ของคุณนั้นถูกต้อง"
          : locale === "jp"
          ? "リンクが正しいことを確認してください"
          : "確保您的鏈接正確"}
      </h2>
    </div>
  );
}

export default NotFound;
