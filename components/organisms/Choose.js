import Image from "next/image";
import Container from "../layout/Container";
import Link from "next/link";
import { Arrow, CarBox, Coins, Coins2 } from "../atoms/Icons";
import TextContainer from "../molecules/TextContainer";
import { motion } from "framer-motion";

const Choose = () => {
  const titleChoose = {
    title: "Best valued deals you will ever find",
    subtitle: "Why Choose Us",
    text: "Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate rentin experience, so don't miss out on your chance to save big.",
  };

  const { title } = titleChoose;
  const { subtitle } = titleChoose;
  const { text } = titleChoose;

  const details = [
    {
      image: <CarBox />,
      title: "Cross Country Drive",
      text: "Take your driving experience to the next level with our top-notch vehicles for your cros-country adventures.",
    },
    {
      image: <Coins />,
      title: "All Inclusive Pricing",
      text: "Get everything you need in one convenient, transparent price with our all-iclusive pricing policy.",
    },
    {
      image: <Coins2 />,
      title: "No Hidden Charges",
      text: "Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.",
    },
  ];

  return (
    <section>
      <Container>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <Image
            src="/images/cars/cars.png"
            width={0}
            height={0}
            alt="car"
            sizes="100vw"
            className="w-full h-auto "
          />
        </motion.div>
        <div className="flex flex-col items-center 1024:flex-row 1024:justify-between ">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
            className=" mt-20 text-center flex flex-col items-center max-w-[500px] text-16 1024:items-start 1024:text-start"
          >
            <TextContainer title={title} subtitle={subtitle} text={text} />

            <Link
              className="flex shadow-[#02546452] shadow-lg hover:shadow-[#0254649a] w-max p-8 bg-[#025464] text-[#F8F1F1] items-center rounded-md border-2 border-[#025464] hover:bg-inherit hover:text-[#025464] transition-all font-bold"
              href="/#hero"
            >
              <span>Find Details</span>
              <div className="w-5 ml-4">
                <Arrow />
              </div>
            </Link>
          </motion.div>

          <div className="1024:flex-col">
            {details.map((detail, i) => {
              return (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                  key={i}
                  className="text-center flex flex-col items-center 640:flex-row 640:max-w-[500px] my-16  1024:text-start gap-8"
                >
                  <div className="relative">
                    <div className="w-72">
                      <Image
                        src="/images/orangespot2.png"
                        width={0}
                        height={0}
                        alt="car"
                        sizes="100vw"
                        className="w-full h-auto opacity-30"
                      />
                    </div>

                    <div className="w-36 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-[#E57C23]">
                      {detail.image}
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold text-24 my-8">{detail.title}</h2>
                    <p className="text-16">{detail.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Choose;
