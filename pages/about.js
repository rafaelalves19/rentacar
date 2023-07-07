import Container from "../components/layout/Container";
import Image from "next/image";
import TextContainer from "../components/molecules/TextContainer";
import TitlePages from "../components/atoms/TitlePages";
import { motion } from "framer-motion";

import { CarAbout, CarOutlet, CarRepair } from "../components/atoms/Icons";
import Plans from "../components/organisms/Plans";
import BookBanner from "../components/molecules/BookBanner";

const About = () => {
  const aboutTitle = {
    title: "You start the engine and your adventure begins",
    subtitle: "About Company",
    text: "With years of experience in the industry, we pride ourselves on offering top-notch service and a wide selection of vehicles to suit every need. Whether you're planning a family vacation, a business trip, or simply need a temporary vehicle, we've got you covered. Our team of dedicated professionals is committed to providing a seamless booking process, competitive pricing, and excellent customer support. Trust us to make your car rental experience smooth and enjoyable.",
  };

  const { text, subtitle, title } = aboutTitle;

  const aboutCars = [
    {
      icon: <CarAbout />,
      number: "20",
      text: "Car Types",
    },
    {
      icon: <CarOutlet />,
      number: "85",
      text: "Rental Outlets",
    },
    {
      icon: <CarRepair />,
      number: "75",
      text: "Repair Shop",
    },
  ];

  return (
    <section className="mt-40">
      <Container>
        <TitlePages title="About" />
        <div className="flex flex-col items-center justify-center text-center 1024:flex-row">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          >
            <Image
              src="/images/aboutpeople.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt="People"
              className="w-[400px] "
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
            className="max-w-[500px] my-16 640:ml-12 "
          >
            <TextContainer title={title} text={text} subtitle={subtitle} />
            <div className="640:flex 640:justify-between">
              {aboutCars.map((about, i) => {
                return (
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                    key={i}
                    className="flex flex-col items-center mb-12 "
                  >
                    <div className="w-32 text-[#E57C23] 640:mx-8">
                      {about.icon}
                    </div>
                    <div className="flex flex-col justify-center items-center mt-8 ">
                      <p className="text-45 font-semibold">{about.number}</p>
                      <p className="text-16">{about.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
        <Plans />
      </Container>
      <BookBanner />
    </section>
  );
};

export default About;
