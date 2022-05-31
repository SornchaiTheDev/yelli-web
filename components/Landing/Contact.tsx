import { FormEvent, forwardRef, useState, useEffect, useCallback } from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail, AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import emailjs from "emailjs-com";
import PhoneInput from "@components/PhoneInput";
import SelectedPlanCard from "@components/SelectedPlanCard";
import { ContactProps } from "@decor/Contact";
import { FormI } from "@decor/Form";
import { useIntl } from "react-intl";
import { intlFormat } from "date-fns";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const Contact = forwardRef<HTMLDivElement, ContactProps>(
  ({ selectedPlan, cancelPlan }, ref) => {
    const intl = useIntl();
    const [formStatus, setFormStatus] = useState<string>("DISABLED");
    const [errorStatus, setErrorStatus] = useState<string[]>([]);
    const [form, setForm] = useState<FormI>({
      name: "",
      email: "",
      dial_code: 1,
      phone_number: "",
      message: "",
    });

    const contact = [
      {
        name: intl.formatMessage({ id: "contact.form.name" }),
        key: "name",
        placeholder: "Dylan Serif",
        type: "text",
        required: true,
      },
      {
        name: intl.formatMessage({ id: "contact.form.email" }),
        key: "email",
        placeholder: "Dylan@gmail.com",
        type: "email",
        required: true,
      },
    ];

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
            { ...(form as any), ...selectedPlan },
            "r5JxDrTgFL6MEWyG_"
          );
        }
        setFormStatus("INITIAL");
        setForm({
          name: "",
          email: "",
          phone_number: "",
          message: "",
        });
        cancelPlan();
      });
    };

    const handleMessageChange = (e: FormEvent<HTMLTextAreaElement>) => {
      setForm({ ...form, message: e.currentTarget.value });
    };

    const handleCancelPlan = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      cancelPlan();
    };

    type ERROR_STATUS = "NAME_ERROR" | "EMAIL_ERROR" | "PHONE_ERROR";

    useEffect(() => {
      let _errorStatus: ERROR_STATUS[] = [];
      if (selectedPlan) {
        if (form.name === "") {
          if (!_errorStatus.includes("NAME_ERROR")) {
            _errorStatus.push("NAME_ERROR");
          }
        } else {
          _errorStatus = _errorStatus.filter((err) => err !== "NAME_ERROR");
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
          if (!_errorStatus.includes("EMAIL_ERROR"))
            _errorStatus.push("EMAIL_ERROR");
        } else {
          _errorStatus = _errorStatus.filter((err) => err !== "EMAIL_ERROR");
        }

        if (form.phone_number.replace(/\+\w{2}/, "").length < 9) {
          if (!_errorStatus.includes("PHONE_ERROR"))
            _errorStatus.push("PHONE_ERROR");
        } else {
          _errorStatus = _errorStatus.filter((err) => err !== "PHONE_ERROR");
        }

        if (_errorStatus.length) {
          setFormStatus("DISABLED");
        } else {
          setFormStatus("INITIAL");
        }

        setErrorStatus(_errorStatus);
      }
    }, [form, selectedPlan]);

    return (
      <div
        ref={ref}
        id="contact"
        className="flex flex-col items-center my-2 w-full p-4"
      >
        <h2 className="text-2xl font-bold my-10">
          {intl.formatMessage({ id: "contact.title" })}
        </h2>
        <div className="grid grid-cols-6 w-full rounded-lg overflow-hidden max-w-4xl drop-shadow-md">
          <div className="col-span-6 md:col-span-2 bg-yellow-300 w-full h-full flex flex-col p-6">
            <h2 className="text-2xl font-semibold">
              {intl.formatMessage({ id: "contact.information" })}
            </h2>
            <p>{intl.formatMessage({ id: "contact.description" })}</p>
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
                <li>*{intl.formatMessage({ id: "contact.error.plan" })}</li>
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
                    value={form[key as keyof FormI]}
                    type={type}
                    placeholder={placeholder}
                    className="rounded-lg"
                  />
                  {errorStatus.find(
                    (err) => err === `${key.toUpperCase()}_ERROR`
                  ) && (
                    <span className="text-red-500">
                      *{intl.formatMessage({ id: "contact.error.form" })} {name}
                    </span>
                  )}
                </div>
              ))}

              <label>
                {intl.formatMessage({ id: "contact.form.phone" })}{" "}
                <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                value={form.phone_number}
                onValueChange={(dial_code: number, phone_number: string) =>
                  setForm({ ...form, dial_code, phone_number })
                }
              />
              {errorStatus.includes("PHONE_ERROR") && (
                <span className="text-red-500">
                  *{intl.formatMessage({ id: "contact.error.phone" })}
                </span>
              )}

              {selectedPlan !== null && (
                <>
                  <button
                    className="inline-flex items-center gap-1 self-end bg-red-500 rounded-lg p-1 text-white"
                    onClick={handleCancelPlan}
                  >
                    <IoClose />
                    <p>
                      {intl.formatMessage({ id: "contact.package.cancel" })}
                    </p>
                  </button>
                  <SelectedPlanCard plan={selectedPlan} />
                </>
              )}

              <label>
                {" "}
                {intl.formatMessage({ id: "contact.form.message" })}
              </label>
              <textarea
                className="rounded-lg"
                placeholder={intl.formatMessage({
                  id: "contact.form.message.placeholder",
                })}
                onChange={handleMessageChange}
              />

              <button
                className="bg-yellow-300 w-32 h-10 rounded-lg flex justify-center items-center disabled:bg-gray-200 disabled:cursor-not-allowed"
                disabled={formStatus === "DISABLED"}
              >
                {formStatus === "SUBMITTING" ? (
                  <AiOutlineLoading3Quarters className="animate-spin fill-white text-2xl" />
                ) : (
                  <p>{intl.formatMessage({ id: "contact.form.send" })}</p>
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
