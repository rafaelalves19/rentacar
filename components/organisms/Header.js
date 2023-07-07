import { Logo } from "../atoms/Icons";
import Container from "../layout/Container";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-5 w-full h-auto z-10 fixed bg-[#f8f1f1] bg-opacity-70 backdrop-blur-sm ">
      <div className="m-auto max-w-screen-1280">
        <Container>
          <div className="flex items-center justify-between ">
            <div className="w-56 h-max shrink-0 ">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <Nav />
          </div>
        </Container>
      </div>
    </header>
  );
};
export default Header;
