import { motion } from "framer-motion";

const JoinNow = () => {
  return (
    <motion.div
      whileTap={{
        scale: 0.9,
      }}
      className="bg-secondly py-2 px-4 rounded-full flex justify-between w-40 items-center ml-auto cursor-pointer mt-5"
    >
      <p className="font-medium">Join Now</p>
      <p className="bg-firstly w-8 h-8 text-secondly rounded-full flex items-center justify-center">
        <i className="fa-solid fa-angle-right" />
      </p>
    </motion.div>
  );
};

export default JoinNow;
