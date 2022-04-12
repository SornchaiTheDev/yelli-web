import Image from "next/image";
import Placeholder from "../public/AqOFjm9W.JPG";

function ImagePreview() {
  return (
    <div className="p-4">
      <Image
        className="rounded-lg"
        width={600}
        height={400}
        src={Placeholder}
      />
    </div>
  );
}

export default ImagePreview;
