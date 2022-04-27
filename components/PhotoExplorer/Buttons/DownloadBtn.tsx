import { Download } from "react-bootstrap-icons";

function DownloadBtn({ onClick }: { onClick: () => void }) {
  return (
    <div className="pointer-events-none text-lg lg:text-xl" onClick={onClick}>
      <Download />
    </div>
  );
}

export default DownloadBtn;
