import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const XTimeline = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 5500) {
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
      <div
        className={`bg-[#FFB300] w-96 h-52 px-20 py-7 ${
          isSticky ? "sticky top-0 z-20 bg-transparent" : "sticky top-5"
        }`}
      >
        <h3
          className={`uppercase tracking-widest text-xl font-semibold ${
            isSticky ? "text-white z-20" : "text-black z-20"
          }`}
        >
          {" "}
          <div
            className={`h-2 w-20 rounded-full bg-white absolute top-10 -left-14 ${
              isSticky ? "block" : "hidden"
            }`}
          ></div>{" "}
          X Timeline
        </h3>
      </div>
      <div className="relative -mt-20 z-0">
        <div data-aos="fade-up" className="bg-black h-screen w-full">
          <div className="text-white bg-black p-10 h-full w-full flex items-center">
            <div className="w-full space-y-10">
              <motion.h3
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 0.5 },
                }}
                style={{ fontFamily: "Roboto" }}
                className="text-white text-2xl md:text-3xl"
              >
                Ten years of moonshots
              </motion.h3>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 1 },
                }}
                className="text-md md:text-xl tracking-wider pt-10"
              >
                In 2024, Google founders Larry Page and Sergei Brin decided to
                form a new division of the company to work on moonshots:
                far-out, sci-fi sounding technologies that could one day make
                the world a radically better place. It was a grand experiment —
                some might say a moonshot unto itself. 10 years in, X has
                incubated hundreds of different moonshot projects, many of which
                have gone on to become independent businesses.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XTimeline;
