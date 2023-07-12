import Image from "next/image";
import { Calendar, CloseBurgerMenu, Info, Pin } from "../atoms/Icons";
import Backdrop from "../atoms/Backdrop";
import { motion } from "framer-motion";

const Modal = ({
  closeModal,
  formCar,
  formPickDate,
  formPickCity,
  formDropDate,
  formDropCity,
}) => {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { y: "100vh", opacity: 0 },
  };
  return (
    <Backdrop onClick={closeModal}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 overflow-x-hidden"
      >
        <div className="p-1 text-16 ">
          <div className="flex w-full text-24 uppercase font-bold p-8 bg-[#E57C23] text-[#f8f1f1] justify-between">
            <h2>Complete reservation</h2>
            <div
              onClick={closeModal}
              className="w-12 text-[#f8f1f1] cursor-pointer"
            >
              <CloseBurgerMenu />
            </div>
          </div>
          <div className="p-8 bg-[#f3ebe5c4]">
            <div className="flex items-center font-semibold gap-4 mb-8 text-[#e57c23]">
              <div className="w-10">
                <Info />
              </div>
              <p>Upon completing this reservation enquiry, you will receive:</p>
            </div>
            <p className="text-[#025464]">
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>
          <div className=" 1280:flex">
            <div className="p-12 flex border-r-2">
              <div className="w-1/2">
                <p className="text-[#E57C23] font-semibold">Location & Date</p>
                <div className="flex gap-2 mt-8">
                  <div className="w-6">
                    <Pin />
                  </div>
                  <div className="text-14">
                    <p className="font-bold">Pick-Up Date & Time</p>
                    <div className="flex gap-2 mt-2">
                      <p>{formPickDate} /</p>
                      <input
                        type="time"
                        className="border-[1px] rounded-sm border-[#025464] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 my-12">
                  <div className="w-6">
                    <Pin />
                  </div>
                  <div className="text-14">
                    <p className="font-bold">Drop-Off Date & Time</p>
                    <div className="flex gap-2 mt-2">
                      <p>{formDropDate} /</p>
                      <input
                        type="time"
                        className="border-[1px] rounded-sm border-[#025464] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 my-12">
                  <div className="w-6">
                    <Calendar />
                  </div>
                  <div className="text-14">
                    <p className="font-bold">Pick-Up Location</p>
                    <div className="flex gap-2 mt-2">
                      <p>{formPickCity}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 my-12">
                  <div className="w-6">
                    <Calendar />
                  </div>
                  <div className="text-14">
                    <p className="font-bold">Drop-Off Location</p>
                    <div className="flex gap-2 mt-2">
                      <p>{formDropCity}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <p className="font-semibold">
                  Car - <span className="text-[#E57C23]">{formCar}</span>
                </p>
                <Image
                  src={
                    formCar === "Audi A1 S-Line"
                      ? "/images/cars/audia1.png"
                      : formCar === "VW Golf 6"
                      ? "/images/cars/vwgolf.png"
                      : formCar === "Toyota Camry"
                      ? "/images/cars/toyotacamry.png"
                      : formCar === "BMW 320 ModernLine"
                      ? "/images/cars/bmw320.png"
                      : formCar === "Mercedes-Benz GLK"
                      ? "/images/cars/benz.png"
                      : formCar === "VW Passat CC"
                      ? "/images/cars/vwpassat.png"
                      : ""
                  }
                  width={0}
                  height={0}
                  sizes="(max-width:768px) 1px,
                  40vw"
                  alt="car"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="p-12">
              <h2 className="uppercase text-[#E57C23] font-bold">
                Personal information
              </h2>
              <form action="" method="dialog">
                <div className="flex gap-4 my-8">
                  <div className="flex flex-col w-full gap-4">
                    <label>
                      First Name <span className="text-[#E57C23]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="fname"
                      id="fname"
                      placeholder="Jonh"
                      className="bg-[#e0dfde] p-4"
                    />
                    <label>
                      Phone Number <span className="text-[#E57C23]">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="123-456-789"
                      className="bg-[#e0dfde] p-4"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-4">
                    <label>
                      Last Name <span className="text-[#E57C23]">*</span>
                    </label>
                    <input
                      required
                      name="lname"
                      id="lname"
                      type="text"
                      placeholder="Snow"
                      className="bg-[#e0dfde] p-4"
                    />
                    <label>
                      Age Number <span className="text-[#E57C23]">*</span>
                    </label>
                    <input
                      required
                      type="number"
                      id="age"
                      name="age"
                      placeholder="18"
                      className="bg-[#e0dfde] p-4"
                      min={18}
                      max={100}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label>
                    Email <span className="text-[#E57C23]">*</span>
                  </label>
                  <input
                    required
                    name="email"
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                    className="bg-[#e0dfde] p-4"
                  />
                  <label>
                    Address <span className="text-[#E57C23]">*</span>
                  </label>
                  <input
                    required
                    name="address"
                    id="address"
                    type="text"
                    placeholder="123 Street"
                    className="bg-[#e0dfde] p-4"
                  />
                </div>
                <div className="flex gap-4 my-8">
                  <div className="flex flex-col w-full gap-4">
                    <label>
                      City <span className="text-[#E57C23]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Liboa"
                      className="bg-[#e0dfde] p-4"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-4">
                    <label>
                      Zip Code <span className="text-[#E57C23]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="274"
                      className="bg-[#e0dfde] p-4"
                    />
                  </div>
                </div>
                <input type="checkbox" className="mr-4" />
                <label>Please send me latest news and updates</label>
                <button
                  onClick={closeModal}
                  className="w-full text-center flex items-center justify-center p-8 bg-[#E57C23] rounded-md border-2 border-[#E57C23] text-[#f8f1f1] text-18 font-bold cursor-pointer hover:text-[#E57C23] hover:bg-white transition-all shadow-[#e57e2352] shadow-lg hover:shadow-[#e57e239a] mt-8"
                >
                  Reserve Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};
export default Modal;
