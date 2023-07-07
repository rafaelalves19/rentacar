import Container from "../layout/Container";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      className="text-[#F8F1F1] text-center bg-[#025464] text-20 py-24 my-32"
    >
      <Container>
        <h2 className="text-45 font-bold mb-8">
          Save big with our cheap car rental!
        </h2>
        <p className="font-semibold">
          Top Airports. Local Suppliers.{" "}
          <span className="text-[#E57C23] font-bold">24/7</span> Support
        </p>
      </Container>
    </motion.section>
  );
};
export default Banner;
