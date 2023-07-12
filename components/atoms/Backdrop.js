import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-60 flex justify-center items-center z-20"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="h-[90%] w-[90%] overflow-y-auto bg-white">{children}</div>
    </motion.div>
  );
};

export default Backdrop;
