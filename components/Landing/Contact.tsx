import { BsTelephone, BsMailbox } from "react-icons/bs";
import { AiOutlineMail, AiOutlineLoading3Quarters } from "react-icons/ai";
import { FormEvent, forwardRef, useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import PhoneInput from "@components/PhoneInput";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const contact = [
  {
    name: "Name",
    key: "name",
    placeholder: "Dylan Serif",
    type: "text",
    required: true,
  },
  {
    name: "Email",
    key: "email",
    placeholder: "Dylan@gmail.com",
    type: "email",
    required: true,
  },
];

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const [formStatus, setFormStatus] = useState<string>("INITIAL");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.grecaptcha.ready(async () => {
      setFormStatus("SUBMITTING");
      const token = await window.grecaptcha.execute(SITE_KEY, {
        action: "contact",
      });

      const res = await axios.post("/api/contact", { ...form, token });
      const { success } = res.data;

      if (success) {
        await emailjs.send(
          "service_vcp9z2j",
          "template_8505ivy",
          form,
          "r5JxDrTgFL6MEWyG_"
        );
      }
      setFormStatus("SUCCESS");
    });
  };

  const handlePlanChange = (e: FormEvent<HTMLInputElement>) => {
    setForm({ ...form, plan: e.currentTarget.value });
  };
  const handleMessageChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, message: e.currentTarget.value });
  };

  return (
    <div
      ref={ref}
      id="contact"
      className="flex flex-col items-center my-2 w-full p-4"
    >
      <h2 className="text-2xl font-bold my-10">Contact</h2>
      <div className="grid grid-cols-6 w-full rounded-lg overflow-hidden max-w-4xl drop-shadow-md">
        <div className="col-span-6 md:col-span-2 bg-yellow-300 w-full h-full flex flex-col p-6">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p>Fill up the form and we will get back to you in a few hours</p>
          <div className="mt-4 flex flex-col gap-2">
            <div className="inline-flex items-center gap-4">
              <BsTelephone />
              <h2>(+66) 090-240-1701</h2>
            </div>
            <div className="inline-flex items-center gap-4">
              <AiOutlineMail />
              <h2>contact@goodshot.com</h2>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 bg-white w-full h-full flex flex-col p-4">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {contact.map(({ name, placeholder, type, required, key }) => (
              <div key={name} className="flex flex-col gap-4">
                <label>
                  {name} <span className="text-red-500">*</span>
                </label>
                <input
                  required={required}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  type={type}
                  placeholder={placeholder}
                  className="rounded-lg"
                />
              </div>
            ))}

            <label>
              Phone <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              onValueChange={(dial_code: string) =>
                setForm({ ...form, phone: dial_code })
              }
            />

            <label>
              Plan You Need <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              {["Bronze", "Silver", "Gold", "Platinum"].map((type) => (
                <label className="inline-flex items-center" key={type}>
                  <input
                    type="radio"
                    name="plan"
                    onChange={handlePlanChange}
                    value={type}
                    className="text-yellow-500 focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent"
                  />
                  <span className="ml-2">{type}</span>
                </label>
              ))}
            </div>
            <label>Message (optional)</label>
            <textarea
              className="rounded-lg"
              placeholder="Message to us"
              onChange={handleMessageChange}
            />

            <button
              className="bg-yellow-300 w-32 h-10 rounded-lg flex justify-center items-center"
              disabled={formStatus === "PENDING"}
            >
              {formStatus === "SUBMITTING" ? (
                <AiOutlineLoading3Quarters className="animate-spin fill-white text-2xl" />
              ) : (
                <p>Send</p>
              )}
            </button>
            {formStatus === "INVALID" && (
              <ul className="text-red-500">
                <li>*The name field is required</li>
              </ul>
            )}
          </form>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
