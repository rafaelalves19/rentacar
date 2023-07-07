import Image from "next/image";
import ButtonVehicles from "./ButtonVehicles";
import SpecificationsVehicles from "./SpecificationsVehicles";
import BrandPricevehicles from "./BrandPricevehicles";
import { motion } from "framer-motion";

const VehiclesCard = ({ car }) => {
  const { image, brand, price, model, doors, transmission, fuel } = car;

  //console.log(car);

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      className="w-[350px] border-2 border-[#025464] text-center text-18 col-span-2 768:col-span-1 1024:col-span-4 1440:col-span-4 mx-auto"
    >
      <div className="h-[250px]">
        <Image
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          alt={brand}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      <div className="capitalize">
        <BrandPricevehicles brand={model} price={price} />
        <div className="flex justify-around">
          <SpecificationsVehicles text={brand} />
          <SpecificationsVehicles text={transmission} />
        </div>
        <div className="flex justify-around">
          <SpecificationsVehicles text={doors} />
          <SpecificationsVehicles text={fuel} />
        </div>
      </div>
      <div className="w-full flex justify-center mb-8">
        <div className="border-b-2 border-[#025464] w-[90%] "></div>
      </div>
      <div className="flex flex-col items-center mb-8">
        <ButtonVehicles />
      </div>
    </motion.div>
  );
};

export default VehiclesCard;
