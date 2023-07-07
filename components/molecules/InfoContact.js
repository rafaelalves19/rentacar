import Link from "next/link";
import { Email, Phone } from "../atoms/Icons";

const InfoContact = () => {
  return (
    <>
      <Link
        href="tel:123456789"
        className="flex items-center font-semibold mt-8 mb-8 hover:text-[#E57C23] transition-all"
      >
        <div className="w-10 mr-4">
          <Phone />
        </div>
        <p>&#40;123 &#41; - 456 - 789</p>
      </Link>
      <Link
        href="/"
        className="flex items-center font-semibold mb-8 hover:text-[#E57C23] transition-all"
      >
        <div className="w-8 mr-4">
          <Email />
        </div>
        <p>rentacar@gmail.com</p>
      </Link>
    </>
  );
};

export default InfoContact;
