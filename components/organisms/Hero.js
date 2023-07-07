import Link from "next/link";
import { Check, Arrow } from "../atoms/Icons";
import Container from "../layout/Container";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex relative justify-center h-screen items-center text-center 768:justify-start 768:text-left max-w-screen-1280 mx-auto"
    >
      <Container>
        <div className="flex flex-col max-w-4xl mx-auto 768:m-0">
          <p className="text-22 font-bold">Plan your trip now</p>
          <h1 className="text-52 font-bold mt-4 mb-10 ">
            Save <span className="text-[#E57C23]">big</span> with our car rental
          </h1>
          <p className="text-16 mb-16 font-semibold">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up and much more.
          </p>
          <div className="flex flex-col 414:flex-row 768:justify-start justify-center text-16 font-bold leading-none items-center w-full gap-12">
            <Link
              className="flex shadow-[#e57e2352] shadow-lg hover:shadow-[#e57e239a] w-max p-8 bg-[#E57C23] items-center text-white rounded-md hover:bg-inherit border-2 border-[#E57C23] hover:text-[#E57C23] transition-all"
              href="/#booking"
            >
              <span>Book Ride</span>
              <div className="w-7 ml-4 ">
                <Check />
              </div>
            </Link>
            <Link
              className="flex shadow-[#02546452] shadow-lg hover:shadow-[#0254649a] w-max p-8 bg-[#025464] text-[#F8F1F1] items-center rounded-md border-2 border-[#025464] hover:bg-inherit hover:text-[#025464] transition-all"
              href="/"
            >
              <span>Learn More</span>
              <div className="w-5 ml-4">
                <Arrow />
              </div>
            </Link>
          </div>
          <div className="absolute hidden 768:flex right-0 -z-10 ">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/images/heroCar.png"
              alt="orange car"
              className="w-[600px]"
            />
          </div>
        </div>
      </Container>
      <div className="hidden 768:flex absolute top-64 -right-12 rotate-90 opacity-50 -z-20">
        <Image
          src="/images/wateroranges.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="orange water mark"
          className="w-[800px]"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
