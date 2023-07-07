import Link from "next/link";
import { useState } from "react";
import { CloseBurgerMenu, OpenBurgerMenu } from "../atoms/Icons";
import NavButtons from "../molecules/NavButtons";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //console.log(isMenuOpen);

  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Vehicles Models",
      url: "/vehicles",
    },
    {
      title: "Testemonials",
      url: "/testemonials",
    },
    {
      title: "Our Team",
      url: "/team",
    },
    {
      title: "Contacts",
      url: "/contacts",
    },
  ];

  return (
    <nav className="w-full h-full flex justify-end text-24 text-[#F8F1F1] 1024:text-inherit 1024:text-16 1280:text-18">
      <div className="1024:hidden">
        <button
          className={`w-20 h-max ${isMenuOpen ? "hidden" : ""}`}
          onClick={handleMenuOpen}
        >
          <OpenBurgerMenu />
        </button>
        <button
          className={`w-20 h-max ${isMenuOpen ? "" : "hidden"}`}
          onClick={handleMenuOpen}
        >
          <CloseBurgerMenu />
        </button>
      </div>
      <div
        className={`bg-[#025464] fixed top-0 w-[70%] h-screen duration-500 z-[-1] flex justify-center 1024:bg-transparent 1024:relative 1024:left-0 1024:w-auto 1024:h-auto 1024:z-0 ${
          isMenuOpen ? "left-[30%]" : "left-full"
        }`}
      >
        <ul className="flex flex-col font-semibold w-full h-full items-center justify-center 1024:flex-row  ">
          {navLinks.map((link, i) => {
            return (
              <li
                className="pb-12 1024:pb-0 1024:pr-8"
                key={i}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <Link
                  className="hover:text-[#E57C23] transition-colors"
                  href={link.url}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
          <li className="pt-8 w-[70%] border-t-[1px] border-[#E57C23] 1024:border-none 1024:w-max 1024:pt-0 1280:ml-14">
            <NavButtons />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
