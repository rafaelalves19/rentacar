import TextContainer from "../molecules/TextContainer";
import Image from "next/image";
import Container from "../layout/Container";
import { Arrow } from "../atoms/Icons";
import { useScroll } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";

const Faq = () => {
  const titleFaq = {
    title: "Frequently Asked Questions",
    subtitle: "FAQ",
    text: "Frequently asked questions about the car rental booking process on our website: answers to common concerns and inquiries.",
  };

  const { title } = titleFaq;
  const { subtitle } = titleFaq;
  const { text } = titleFaq;

  const faqs = [
    {
      id: "1",
      question: "What is special about comparing rental car deals?",
      answer:
        "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by     researching online and comparing prices from different rental companies.",
    },
    {
      id: "2",
      question: "How do i find the car rental deals?",
      answer:
        "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
    },
    {
      id: "3",
      question: "How do i find such low rental car prices?",
      answer:
        "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
    },
  ];

  const [isSelected, setIsSelected] = useState(0);

  const toggle = (i) => {
    if (isSelected === i) {
      return setIsSelected(null);
    }

    setIsSelected(i);
  };

  return (
    <section className="relative flex flex-col items-center text-center my-[100px] 640:my-[200px]">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 -left-32 scale-x-[-1] min-w-[100px] max-w-[600px] -z-10"
      >
        <Image
          src="/images/cars/carsfaq.png"
          width={0}
          height={0}
          alt="cars"
          sizes="100vw"
          className="w-full h-auto "
        />
      </motion.div>
      <Container>
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          >
            <TextContainer title={title} subtitle={subtitle} text={text} />
          </motion.div>

          <motion.ul
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
            className=" w-full text-16 shadow-xl border-[1px] my-20 "
          >
            {faqs.map((answer, i) => {
              return (
                <li key={i}>
                  <div
                    onClick={() => toggle(i)}
                    className={`cursor-pointer w-full ${
                      isSelected === i ? "active-faq" : "bg-white"
                    }  flex border-[1px] shadow-sm text-18 px-16 py-8 justify-between overflow-hidden transition-all`}
                  >
                    <p className="font-semibold">
                      <span className="text-red-400 mr-4">{answer.id}.</span>
                      {answer.question}
                    </p>
                    <div className="ml-8 640:ml-0 ">
                      <div
                        className={`w-7 transition-all ${
                          isSelected === i ? "-rotate-90" : "rotate-90"
                        }`}
                      >
                        <Arrow />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`grid overflow-y-hidden ${
                      isSelected === i ? "grid-rows-[1fr]" : "accordion-content"
                    }`}
                  >
                    <div>
                      <p className="text-start py-10 px-16 leading-relaxed bg-opacity-70 backdrop-blur-3xl ">
                        {answer.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
};
export default Faq;
