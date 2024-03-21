import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const PublicXProject = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full relative pt-40">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 1 } }}
        className={`bg-[#FFB300] w-96 h-52 px-20 py-7 ${
          isSticky ? "sticky top-0 z-20 bg-transparent" : "sticky top-5"
        }`}
      >
        <h3
          className={`uppercase text-xl font-semibold ${
            isSticky ? "text-white z-20" : "text-black z-20"
          }`}
        >
          {" "}
          <div
            className={`h-2 w-20 rounded-full bg-white absolute top-10 -left-14 ${
              isSticky ? "block" : "hidden"
            }`}
          ></div>{" "}
          Public X Projects
        </h3>
      </motion.div>
      <div className="relative -mt-20 z-0">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="bg-[url('/img_1.webp')] bg-fixed h-screen w-full bg-cover bg-center"
        >
          <div className="text-white p-10 h-full w-full flex items-center">
            <div className="w-full space-y-10">
              <div className="w-full">
                <h3
                  style={{ fontFamily: "Roboto" }}
                  className="text-white text-2xl md:text-3xl"
                >
                  What if beams of light could provide <br />
                  global access to fast, affordable connectivity?
                </h3>
              </div>
              <div className="text-2xl text-black group cursor-pointer h-full md:text-3xl flex justify-start text-start w-full gap-7 ">
                <div className="text-3xl bg-[#F5F5F5] group-hover:bg-[#FFB300] rounded w-12 h-12 flex justify-center items-center overflow-x-hidden">
                  <FaArrowRight className="-translate-x-10 group-hover:translate-x-3 duration-200 " />{" "}
                  <FaArrowRight className=" -translate-x-3 group-hover:translate-x-12 duration-200" />
                </div>
                <h3 className="text-white group-hover:text-[#FFB300] pt-2">
                  Explore Taara
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="bg-[url('/img_2.webp')] bg-fixed h-screen w-full bg-cover bg-center"
        >
          <div className="text-white p-10 h-full w-full flex items-center">
            <div className="w-full space-y-10">
              <div className="w-full">
                <h3 className="text-white text-2xl md:text-3xl">
                  What if we could make the world’s electric grid <br /> visible
                </h3>
                <h3 className="text-white text-2xl md:text-3xl">
                  so everyone could access clean, reliable <br /> energy
                </h3>
              </div>
              <div className="text-2xl text-black group cursor-pointer h-full md:text-3xl flex justify-start text-start w-full gap-7 ">
                <div className="text-3xl bg-[#F5F5F5] group-hover:bg-[#FFB300] rounded w-12 h-12 flex justify-center items-center overflow-x-hidden">
                  <FaArrowRight className="-translate-x-10 group-hover:translate-x-3 duration-200 " />{" "}
                  <FaArrowRight className=" -translate-x-3 group-hover:translate-x-12 duration-200" />
                </div>
                <h3 className="text-white group-hover:text-[#FFB300] pt-2">
                  Explore Tapestry
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 1 },
          }}
          className="bg-[url('/img_3.webp')] bg-fixed h-screen w-full bg-cover bg-center"
        >
          <div className="text-white p-10 h-full w-full flex items-center">
            <div className="w-full space-y-10">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 1 },
                }}
                className="w-full"
              >
                <h3 className="text-white text-2xl md:text-3xl">
                  What if we could protect the ocean <br />
                  while feeding the world sustainably?
                </h3>
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 1 },
                }}
                className="text-2xl text-black group cursor-pointer h-full md:text-3xl flex justify-start text-start w-full gap-7 "
              >
                <div className="text-3xl bg-[#F5F5F5] group-hover:bg-[#FFB300] rounded w-12 h-12 flex justify-center items-center overflow-x-hidden">
                  <FaArrowRight className="-translate-x-10 group-hover:translate-x-3 duration-200 " />{" "}
                  <FaArrowRight className=" -translate-x-3 group-hover:translate-x-12 duration-200" />
                </div>
                <h3 className="text-white group-hover:text-[#FFB300] pt-2">
                  Explore Tidal
                </h3>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PublicXProject;
