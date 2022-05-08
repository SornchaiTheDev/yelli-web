import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center my-10 w-full p-4">
      <h2 className="text-2xl font-bold my-10">Contact</h2>
      <div className="grid grid-cols-6 w-full drop-shadow-md rounded-lg overflow-hidden max-w-4xl">
        <div className="col-span-2 bg-yellow-200 w-full h-full flex flex-col p-4">
          <h2>Tel : 090-240-1701</h2>
          <h2>Email : contact@goodshot.com</h2>
        </div>
        <div className="col-span-4 bg-white w-full h-full flex flex-col p-4">
          <form className="flex flex-col gap-4">
            <label>Name</label>
            <input type="text" placeholder="John Doe" />
            <label>Email</label>
            <input type="email" placeholder="johndoe@gmail.com" />
            <label>Phone</label>
            <input type="text" placeholder="+66966353408" />
            <label>Plan You Need</label>
            <div className="flex gap-2">
              <label className="inline-flex items-center">
                <input type="radio" name="Bronze" value="Bronze" />
                <span className="ml-2">Bronze</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="Bronze" value="Bronze" />
                <span className="ml-2">Bronze</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="Bronze" value="Bronze" />
                <span className="ml-2">Bronze</span>
              </label>
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
