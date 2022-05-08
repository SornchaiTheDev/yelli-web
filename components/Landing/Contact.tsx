import { BsTelephone, BsMailbox } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div className="flex flex-col items-center my-14 w-full p-4 drop-shadow-md">
      <h2 className="text-2xl font-bold my-10">Contact</h2>
      <div className="grid grid-cols-6 w-full rounded-lg overflow-hidden max-w-4xl">
        <div className="col-span-6 md:col-span-2 bg-yellow-300 w-full h-full flex flex-col p-6">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p>Fill up the form and we will get back to you in a few hours</p>
          <div className="mt-4 flex flex-col gap-2">
            <div className="inline-flex items-center gap-4">
              <BsTelephone />
              <h2>090-240-1701</h2>
            </div>
            <div className="inline-flex items-center gap-4">
              <AiOutlineMail />
              <h2>contact@goodshot.com</h2>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 bg-white w-full h-full flex flex-col p-4">
          <form className="flex flex-col gap-4">
            <label>Name</label>
            <input type="text" placeholder="John Doe" className="rounded-lg" />
            <label>Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="rounded-lg"
            />
            <label>Phone</label>
            <input
              type="text"
              placeholder="+66966353408"
              className="rounded-lg"
            />
            <label>Plan You Need</label>
            <div className="flex gap-2">
              {["Bronze", "Silver", "Gold", "Platinum"].map((type) => (
                <label className="inline-flex items-center" key={type}>
                  <input
                    type="radio"
                    name="plan"
                    value={type}
                    className="text-yellow-500 focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent"
                  />
                  <span className="ml-2">{type}</span>
                </label>
              ))}
            </div>

            <button className="bg-yellow-300 px-12 py-3 md:py-2 rounded-lg md:w-fit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
