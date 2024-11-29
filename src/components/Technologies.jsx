import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaPython, FaRobot } from "react-icons/fa";
import { GiMicrochip } from "react-icons/gi"; // Microchip icon for Electronics
import { SiCplusplus } from "react-icons/si"; // C++ icon
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="sm:p-10 md:p-16 lg:p-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* React */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          aria-label="ReactJS"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* MongoDB (swapped with C++) */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
          aria-label="MongoDB"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        {/* Python */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
          aria-label="Python"
        >
          <FaPython className="text-7xl text-blue-500" />
        </motion.div>

        {/* Electronics (Microchip) */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
          aria-label="Electronics"
        >
          <GiMicrochip className="text-7xl text-green-500" />
        </motion.div>

        {/* C++ (swapped with MongoDB) */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
          aria-label="C++"
        >
          <SiCplusplus className="text-7xl text-blue-600" />
        </motion.div>

        {/* Robotics */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4"
          aria-label="Robotics"
        >
          <FaRobot className="text-7xl text-red-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
