import { useState, FormEvent, useRef, useEffect } from "react";
import { countryCode } from "@assets/countryCode";
import sortedArray from "utils/sortArray";
import Flag from "react-world-flags";
import useClickOutSide from "@hooks/useClickOutside";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

type codeType = { dial_code: number; code: string };
interface PhoneInputI {
  onValueChange: (value: string) => void;
}
function PhoneInput({ onValueChange }: PhoneInputI) {
  const [country, setCountry] = useState<codeType>({
    dial_code: 66,
    code: "TH",
  });
  const ref = useRef<HTMLDivElement | null>(null);
  const isOutside = useClickOutSide(ref, true);
  const [phone, setPhone] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value.replace(/\D/g, "");
    if (input.length <= 10) {
      setPhone(input);
    }
    onValueChange(`+${country.dial_code}${input}`);
  };

  const handleSelectCode = (code: string, dial_code: number) => {
    setCountry({ code, dial_code });
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOutside) setIsOpen(false);
  }, [isOutside]);

  return (
    <div className="relative gap-2 flex justify-start items-center" ref={ref}>
      {isOpen && (
        <div className="top-12 absolute flex flex-col w-full gap-4 h-64 bg-white overflow-y-scroll rounded-lg shadow-md">
          {sortedArray(countryCode, "dial_code", "asc").map(
            ({ code, dial_code }) => (
              <div
                key={code}
                className="inline-flex gap-4 items-center cursor-pointer hover:bg-gray-50 p-2"
                onClick={() => handleSelectCode(code, dial_code)}
              >
                <Flag code={code} width="20rem" />{" "}
                <span className="">+{dial_code}</span>
              </div>
            )
          )}
        </div>
      )}
      <div
        className="inline-flex items-center mr-2 rounded-lg bg-white border-black px-2 h-full cursor-pointer gap-2"
        style={{ border: "1px solid black" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flag code={country.code} width="20rem" /> +{country.dial_code}{" "}
        {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>
      <input
        maxLength={10}
        required
        value={phone}
        onChange={onChange}
        type="text"
        placeholder="966353408"
        className="rounded-lg w-fit"
      />
    </div>
  );
}

export default PhoneInput;
