import { ArrowLeft } from "react-bootstrap-icons";
import Link from "next/link";
import { useIntl } from "react-intl";

function BackToGallery() {
  const intl = useIntl()
  return (
    <Link href="/gallery" passHref>
      <div className="flex space-x-2 items-center mb-10 cursor-pointer px-4">
        <ArrowLeft className="text-lg" />
        <h2 className="text-lg">{intl.formatMessage({id : "gallery.back"})}</h2>
      </div>
    </Link>
  );
}

export default BackToGallery;
