import Image from "next/image";
import { CarInsurance, MovingCar, Operator } from "../atoms/Icons";
import Container from "../layout/Container";
import TextContainer from "../molecules/TextContainer";
import { motion } from "framer-motion";

const Plans = () => {
  const planTitle = {
    title: "Quick & easy car rental",
    subtitle: "Plan your trip now",
  };

  const { title } = planTitle;
  const { subtitle } = planTitle;

  const plans = [
    {
      image: <CarInsurance />,
      title: " Select Car",
      description:
        "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.",
    },
    {
      image: <MovingCar />,
      title: " Contact Operator",
      description:
        "Our knowledgeable and friendly operators are always ready to help with any questions or concerns.",
    },
    {
      image: <Operator />,
      title: "Let's Drive",
      description:
        "Whether you're hitting the open road, we've got you cover with our wide range of cars.",
    },
  ];

  return (
    <section>
      <Container>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          className="mt-52 text-16 mb-52"
        >
          <div className="w-full flex flex-col text-center">
            <TextContainer title={title} subtitle={subtitle} />
          </div>
          <div className="grid gap-28 640:grid-cols-2 640:gap-16 1024:grid-cols-3">
            {plans.map((plan, i) => {
              return (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                  key={i}
                  className="flex flex-col items-center text-center "
                >
                  <div className="relative w-max">
                    <Image
                      src="/images/orangespot.png"
                      width={0}
                      height={0}
                      alt="spot"
                      sizes="100vw"
                      className="opacity-30 w-[150px]"
                    />
                    <div className="w-28 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-[#E57C23]">
                      {plan.image}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-24 mt-12 mb-8">
                      {plan.title}
                    </h3>
                    <p>{plan.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Plans;
