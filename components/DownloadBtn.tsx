function DownloadBtn() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4  cursor-pointer">
      <div className="w-12 h-12 flex justify-center items-center p-4 bg-white drop-shadow-lg rounded-full">
        <img src="icons/download.svg" />
      </div>
      <h2 className="text-white font-semibold">Download Image</h2>
    </div>
  );
}

export default DownloadBtn;
