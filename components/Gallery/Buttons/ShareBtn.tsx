import { Share } from "react-bootstrap-icons";
function ShareBtn({ onClick }: { onClick: () => void }) {
  return (
    <div className="text-lg lg:text-xl cursor-pointer" onClick={onClick}>
      <Share />
    </div>
  );
}

export default ShareBtn;
