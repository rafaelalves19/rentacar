import Container from "../layout/Container";
import Image from "next/image";
import FleetTable from "../molecules/FleetTableDescription";
import TextContainer from "../molecules/TextContainer";
import { useState } from "react";
import { motion } from "framer-motion";

const Fleet = ({ fleet }) => {
  const fleetTitle = {
    title: "Our rental fleet",
    subtitle: "Vehicles Models",
    text: "Choose from a variety of our amazing vehicles to rent for your next adventure or business trip.",
  };

  const { title } = fleetTitle;
  const { subtitle } = fleetTitle;
  const { text } = fleetTitle;

  const [isSelected, setIsSelected] = useState(0);

  const toggle = (i) => {
    setIsSelected(i);
  };

  return (
    <Container>
      <section className="text-16 mb-52">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-20"
        >
          <TextContainer title={title} subtitle={subtitle} text={text} />
        </motion.div>

        <div className="grid grid-cols-2 gap-12 640:gap-4 640:grid-cols-12 ">
          <ul className="text-18 font-semibold text-[#F8F1F1] cursor-pointer col-span-2 640:col-span-12 1024:col-span-3">
            {fleet.map((car, i) => {
              return (
                <motion.li
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                  onClick={() => toggle(i)}
                  key={i}
                  className={`w-full mb-4 p-8 hover:bg-[#E57C23] rounded-md border-2 border-[#E57C23] text-[#E57C23] hover:text-[#F8F1F1] bg-[#F8F1F1] transition-all ${
                    isSelected === i ? "active-fleet" : ""
                  }`}
                >
                  {`
                  ${car.brand} 
                  ${car.model}
                  `}
                </motion.li>
              );
            })}
          </ul>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center max-w-[640px] col-span-2 640:col-span-7 1024:col-span-6 "
          >
            <Image
              src={fleet[isSelected].image}
              width={0}
              height={0}
              alt="car"
              sizes="100vw"
              className="w-full h-auto "
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
            className="w-full col-span-2 640:col-span-5 1024:col-span-3"
          >
            <FleetTable fleet={fleet[isSelected]} />
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default Fleet;
