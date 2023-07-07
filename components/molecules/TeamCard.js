import Image from "next/image";
import { motion } from "framer-motion";

const TeamCard = ({ member }) => {
  const { lastName, firstName, company, image } = member;
  const { department } = company;

  const src = image;

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      className="w-[330px] border-[1px] shadow-xl bg-[#f8f1f1] col-span-2 768:col-span-1 1024:col-span-4 1440:col-span-4 mx-auto"
    >
      <div className="aspect-square">
        <Image
          loader={() => src}
          src={src}
          width={0}
          height={0}
          sizes="100vw"
          alt="Salesman"
          className="w-full h-full object-cover"
          priority
          unoptimized
        />
      </div>
      <div className="p-14 text-center">
        <h2 className="text-22 font-bold mb-4">{`${firstName} ${lastName}`}</h2>
        <p className="text-16">{department}</p>
      </div>
    </motion.div>
  );
};
export default TeamCard;
