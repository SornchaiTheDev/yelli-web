import { Player } from "@lottiefiles/react-lottie-player";
import Loading from "../../assets/lottie/loading.json";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

function Uploading() {
  const router = useRouter();
  const intl = useIntl();
  const { locale } = router;
  return (
    <div className="text-gray-900 font-bold text-xl flex-1 flex flex-col justify-center items-center">
      <Player style={{ width: 300, height: 300 }} loop autoplay src={Loading} />
      <h2 className="text-center">
        {intl.formatMessage({ id: "gallery.photo.uploading" })}
      </h2>
      <h2 className="text-center">
        {intl.formatMessage({ id: "gallery.photo.uploading.wait" })}
      </h2>
    </div>
  );
}

export default Uploading;
