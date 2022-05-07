import { Download } from "react-bootstrap-icons";

function DownloadBtn({ onClick }: { onClick: () => void }) {
  return (
    <div className="text-lg lg:text-xl cursor-pointer" onClick={onClick}>
      <Download />
    </div>
  );
}

export default DownloadBtn;
