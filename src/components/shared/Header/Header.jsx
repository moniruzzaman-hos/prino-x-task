import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div
      className="w-full h-full relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        delay: 1,
        padding: "35px 80px",
        margin: "-25px 0px",
      }}
      transition={{ duration: 1 }}
      style={{ padding: "0px" }}
    >
      <div className="flex justify-between items-center gap-3 cursor-pointer">
        <motion.img
          src="/logo.svg"
          alt="logo"
          className="md:w-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, marginTop: 25 }}
          transition={{ duration: 1, delay: 1 }}
        />

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, marginTop: 25 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
        </motion.div>
      </div>
      <motion.video
        className="backdrop-saturate-125 h-[100vh] w-[100vw]"
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        initial={{ scale: 1.2 }}
        animate={{ scale: 1, height: 420, padding: "50px 0px" }}
        transition={{ duration: 1, delay: 1 }}
        style={{ objectFit: "cover", objectPosition: "center" }}
      >
        <source
          src="https://media.exclusivecarport.com/videos/1711006305611-544183262-X, the moonshot factory.mp4"
          type="video/mp4"
        />
        Your browser may not support the video tag.
      </motion.video>
    </motion.div>
  );
};

export default Header;
