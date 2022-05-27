import { BsTelephone, BsMailbox } from "react-icons/bs";
import { AiOutlineMail, AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FormEvent, forwardRef, useState, useEffect } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import PhoneInput from "@components/PhoneInput";
import { BiTime } from "react-icons/bi";
import { PlanProps } from "@decor/Plan";

type SelectedPlanCardProps = {
  plan: PlanProps;
};
const SelectedPlanCard = ({ plan }: SelectedPlanCardProps) => {
  const { name, hours, tools } = plan;
  return (
    <div className="bg-white border-2 w-full rounded-lg p-4 h-fit flex flex-col gap-4">
      <span className="inline-flex gap-2 items-center justify-between w-full">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <h2 className="font-bold text-xl">
          {(tools * 5000 + hours * 2000)
            .toString()
            .replace(/(\d)(?=(\d{3})+\b)/g, "$1,")}{" "}
          บาท
        </h2>
      </span>

      <hr />
      <div className="flex flex-col gap-2 h-full">
        <div className="flex flex-col gap-4">
          <span className="inline-flex gap-2 items-center justify-between w-full">
            <h2 className="text-xl">ค่าอุปกรณ์</h2>
            <h2>{tools} ชุด</h2>
          </span>
          <p>(กล้อง DSLR , ปริ้นท์เตอร์ , ชุดไฟสตูดิโอ , พร็อพในงาน )</p>
          <div className="inline-flex items-center gap-2">
            <BiTime />
            <h2>{hours} ชั่วโมง</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

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

interface ContactProps {
  selectedPlan: PlanProps;
  cancelPlan: () => void;
}

interface FormI {
  name: string;
  email: string;
  phone: string;
  message: string;
  plan_name: string;
  plan_tools: number;
  plan_hours: number;
  plan_price: string;
}

const Contact = forwardRef<HTMLDivElement, ContactProps>(
  ({ selectedPlan, cancelPlan }, ref) => {
    const [formStatus, setFormStatus] = useState<string>("INITIAL");
    const [form, setForm] = useState<FormI>({
      name: "",
      email: "",
      phone: "",
      message: "",
      plan_name: "",
      plan_tools: 0,
      plan_hours: 0,
      plan_price: "",
    });

    useEffect(() => {
      setForm((prev) => ({
        ...prev,
        plan_name: selectedPlan.name,
        plan_hours: selectedPlan.hours,
        plan_tools: selectedPlan.tools,
        plan_price: selectedPlan.price,
      }));
    }, [selectedPlan]);

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
            form as any,
            "r5JxDrTgFL6MEWyG_"
          );
        }
        setFormStatus("SUCCESS");
      });
    };

    const handleMessageChange = (e: FormEvent<HTMLTextAreaElement>) => {
      setForm({ ...form, message: e.currentTarget.value });
    };

    const handleCancelPlan = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      cancelPlan();
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
            {selectedPlan === null && (
              <ul className="text-red-500 my-2">
                <li>*Please Select Plan First</li>
              </ul>
            )}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {contact.map(({ name, placeholder, type, required, key }) => (
                <div key={name} className="flex flex-col gap-4">
                  <label>
                    {name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    required={required}
                    onChange={(e) =>
                      setForm({ ...form, [key]: e.target.value })
                    }
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

              {selectedPlan !== null && (
                <>
                  <button
                    className="inline-flex items-center gap-1 self-end bg-red-500 rounded-lg p-1 text-white"
                    onClick={handleCancelPlan}
                  >
                    <IoClose />
                    <p>ยกเลิกแพ็คเกจ</p>
                  </button>
                  <SelectedPlanCard plan={selectedPlan} />
                </>
              )}

              <label>Message (optional)</label>
              <textarea
                className="rounded-lg"
                placeholder="Message to us"
                onChange={handleMessageChange}
              />

              <button
                className="bg-yellow-300 w-32 h-10 rounded-lg flex justify-center items-center disabled:bg-gray-200 disabled:cursor-not-allowed"
                disabled={formStatus === "SUBMITTING" || selectedPlan === null}
              >
                {formStatus === "SUBMITTING" ? (
                  <AiOutlineLoading3Quarters className="animate-spin fill-white text-2xl" />
                ) : (
                  <p>Send</p>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
);

Contact.displayName = "Contact";

export default Contact;
