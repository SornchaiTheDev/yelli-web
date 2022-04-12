import Image from "next/image";

function ImagePreview() {
  return (
    <div className="p-2">
      <Image
        className="rounded-lg"
        width={900}
        height={600}
        src="https://images.unsplash.com/photo-1649709456475-9ef813c583a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
    </div>
  );
}

export default ImagePreview;
