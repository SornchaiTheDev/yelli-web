import { ArrowLeft } from "react-bootstrap-icons";
import Link from "next/link";
function BackToGallery() {
  return (
    <Link href="/gallery" passHref>
      <div className="flex space-x-2 items-center mb-10 cursor-pointer px-4">
        <ArrowLeft className="text-lg" />
        <h2 className="text-lg">Back to Gallery</h2>
      </div>
    </Link>
  );
}

export default BackToGallery;
