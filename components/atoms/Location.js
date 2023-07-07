import { Pin } from "./Icons";
import Link from "next/link";

const Location = () => {
  return (
    <Link
      href="https://www.google.com/maps/place/Porto/data=!4m2!3m1!1s0xd2465abc4e153c1:0xa648d95640b114bc?sa=X&ved=2ahUKEwjigYXExfX_AhWtUaQEHfQCB0AQ8gF6BAgPEAA&ved=2ahUKEwjigYXExfX_AhWtUaQEHfQCB0AQ8gF6BAgQEAI"
      className="flex font-semibold hover:text-[#E57C23] transition-all cursor-pointer"
      target="_blank"
    >
      <div className="w-8 mr-8">
        <Pin />
      </div>
      <p>Porto, Portugal</p>
    </Link>
  );
};

export default Location;
