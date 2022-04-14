import { useRouter } from "next/router";
import Download from "../public/icons/download.svg";
import Image from "next/image";

function DownloadBtn({ onClick }: { onClick: () => void }) {
  const router = useRouter();
  const { locale } = router;
  return (
    <div
      className="flex flex-col justify-center space-y-4 items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 flex justify-center items-center p-4 bg-white drop-shadow-lg rounded-full pointer-events-none">
        <div className="w-6 h-6 relative">
          <Image src={Download} layout="fill" />
        </div>
      </div>
      <h2 className="text-white font-semibold">
        {locale === "en"
          ? "Download Image"
          : locale === "th"
          ? "ดาวน์โหลดรูป"
          : locale === "jp"
          ? "ダウンロード"
          : "下載"}
      </h2>
    </div>
  );
}

export default DownloadBtn;
