import Link from "next/link";

const NavButtons = () => {
  return (
    <div className="flex flex-col items-center 1024:flex-row">
      <Link
        className=" pb-8 hover:text-[#E57C23] transition-colors font-semibold 1024:pb-0 1024:px-8"
        href="/"
      >
        Sign in
      </Link>

      <Link
        className="bg-[#E57C23] border-[#E57C23] border-2 font-semibold py-6 px-8  text-[#F8F1F1] hover:text-[#E57C23] hover:bg-inherit transition-all rounded-md"
        href="/"
      >
        Register
      </Link>
    </div>
  );
};
export default NavButtons;
