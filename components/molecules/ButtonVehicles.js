import Link from "next/link";
import { Arrow } from "../atoms/Icons";

const ButtonVehicles = () => {
  return (
    <Link
      className="flex shadow-[#02546452] shadow-lg hover:shadow-[#0254649a] w-max p-8 bg-[#025464] text-[#F8F1F1] items-center rounded-md border-2 border-[#025464] hover:bg-inherit hover:text-[#025464] transition-all font-bold"
      href="/home"
    >
      <span>Book Ride</span>
      <div className="w-5 ml-4">
        <Arrow />
      </div>
    </Link>
  );
};

export default ButtonVehicles;
