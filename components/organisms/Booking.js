import { useState } from "react";
import { Calendar, Car, Pin } from "../atoms/Icons";
import Container from "../layout/Container";
import Modal from "../molecules/Modal";
import { AnimatePresence, motion } from "framer-motion";

const Booking = () => {
  const [formCar, setFormCar] = useState("");
  const [formPickCity, setFormPickCity] = useState("");
  const [formDropCity, setFormDropCity] = useState("");
  const [formPickDate, setFormPickDate] = useState("");
  const [formDropDate, setFormDropDate] = useState("");

  // console.log(formCar);
  //console.log(formPickCity);
  //console.log(formDropCity);
  //console.log(formPickDate);
  //console.log(formDropDate);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Container>
      <motion.section
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
        id="booking"
        className="relative rounded-xl px-10 py-16 border-[1px] shadow-xl bg-[#f8f1f1]"
      >
        <h2 className="text-24 font-bold mb-8">Book a car</h2>
        <div className="text-center text-16 mb-8 font-semibold">
          <p className="p-4 bg-green-300 rounded-xl text-green-500 hidden">
            Check your email to confirm an order.
          </p>
        </div>
        <form className="grid grid-cols-1 gap-8 640:grid-cols-2 1024:grid-cols-3">
          <div>
            <label className="flex items-center w-full text-16 font-semibold pb-4">
              <div className="w-9 mr-4 text-[#E57C23]">
                <Car />
              </div>
              Select Your Car Type
              <span className="text-[#E57C23] ml-2">*</span>
            </label>
            <select
              id="cars"
              name="cars"
              value={formCar}
              onChange={(e) => setFormCar(e.target.value)}
              className="w-full p-4 rounded-md text-16 text-gray-400 border-[1px] border-gray-400"
              required
            >
              <option value="">Select your type car</option>
              <option value="Audi A1 S-Line">Audi A1 S-Line</option>
              <option value="VW Golf 6">VW Golf 6</option>
              <option value="Toyota Camry">Toyota Camry</option>
              <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
              <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
              <option value="VW Passat CC">VW Passat CC</option>
            </select>
          </div>
          <div>
            <label className="flex items-center w-full text-16 font-semibold pb-4">
              <div className="w-8 mr-4 text-[#E57C23]">
                <Pin />
              </div>
              Pick-up <span className="text-[#E57C23] ml-2">*</span>
            </label>
            <select
              id="city"
              name="city"
              value={formPickCity}
              onChange={(e) => setFormPickCity(e.target.value)}
              className="w-full p-4 rounded-md text-16 text-gray-400 border-[1px] border-gray-400"
              required
            >
              <option value="">Select pick up location</option>
              <option value="Porto">Porto</option>
              <option value="Lisboa">Lisboa</option>
              <option value="Leiria">Leiria</option>
              <option value="Viana do Castelo">Viana do Castelo</option>
              <option value="Algarve">Algarve</option>
              <option value="Coimbra">Coimbra</option>
            </select>
          </div>
          <div>
            <label className="flex items-center w-full text-16 font-semibold pb-4">
              <div className="w-8 mr-4 text-[#E57C23]">
                <Pin />
              </div>
              Drop-off <span className="text-[#E57C23] ml-2">*</span>
            </label>
            <select
              id="city"
              name="city"
              value={formDropCity}
              onChange={(e) => setFormDropCity(e.target.value)}
              className="w-full p-4 rounded-md text-16 text-gray-400 border-[1px] border-gray-400"
              required
            >
              <option value="">Select drop off location</option>
              <option value="Porto">Porto</option>
              <option value="Lisboa">Lisboa</option>
              <option value="Leiria">Leiria</option>
              <option value="Viana do Castelo">Viana do Castelo</option>
              <option value="Algarve">Algarve</option>
              <option value="Coimbra">Coimbra</option>
            </select>
          </div>
          <div>
            <label className="flex items-center w-full text-16 font-semibold pb-4">
              <div className="w-8 mr-4 text-[#E57C23]">
                <Calendar />
              </div>
              Pick-up <span className="text-[#E57C23] ml-2">*</span>
            </label>
            <input
              type="date"
              id="pick"
              name="pick"
              value={formPickDate}
              onChange={(e) => setFormPickDate(e.target.value)}
              className="w-full p-4 rounded-md text-16 text-gray-400 border-[1px] border-gray-400"
              required
            />
          </div>
          <div>
            <label className="flex items-center w-full text-16 font-semibold pb-4">
              <div className="w-8 mr-4 text-[#E57C23]">
                <Calendar />
              </div>
              Drop-off <span className="text-[#E57C23] ml-2">*</span>
            </label>
            <input
              type="date"
              id="drop"
              name="drop"
              value={formDropDate}
              onChange={(e) => setFormDropDate(e.target.value)}
              className="w-full p-4 rounded-md text-16 text-gray-400 border-[1px] border-gray-400"
              required
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              modalOpen ? closeModal() : openModal();
            }}
            className="w-full text-center flex items-center justify-center p-8 bg-[#E57C23] rounded-md border-2 border-[#E57C23] text-[#f8f1f1] text-18 font-bold cursor-pointer hover:text-[#E57C23] hover:bg-white transition-all shadow-[#e57e2352] shadow-lg hover:shadow-[#e57e239a]"
          >
            Search
          </button>
        </form>
      </motion.section>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            modalOpen={openModal}
            closeModal={closeModal}
            formCar={formCar}
            formDropCity={formDropCity}
            formDropDate={formDropDate}
            formPickCity={formPickCity}
            formPickDate={formPickDate}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};
export default Booking;
