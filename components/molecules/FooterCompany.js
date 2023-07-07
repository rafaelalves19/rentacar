import Link from "next/link";

const FooterCompany = () => {
  return (
    <div className="col-span-2 640:col-span-6 1140:col-span-3">
      <h2 className="font-bold uppercase text-24 mb-8">Company</h2>
      <ul className="space-y-6 ">
        <li>
          <Link href="/#hero" className="hover:text-[#E57C23] transition-all">
            Porto
          </Link>
        </li>
        <li>
          <Link href="/#hero" className="hover:text-[#E57C23] transition-all">
            Careers
          </Link>
        </li>
        <li>
          <Link href="/#hero" className="hover:text-[#E57C23] transition-all">
            Mobile
          </Link>
        </li>
        <li>
          <Link href="/#hero" className="hover:text-[#E57C23] transition-all">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/#hero" className="hover:text-[#E57C23] transition-all">
            How we work
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterCompany;
