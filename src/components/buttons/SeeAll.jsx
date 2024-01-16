import { motion } from "framer-motion";

const SeeAll = ({ className }) => {
  return (
    <motion.p
      whileTap={{
        scale: 0.9,
      }}
      className={`${className} font-semibold text-fourthly cursor-pointer`}
    >
      See All
    </motion.p>
  );
};

export default SeeAll;
