import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const ExtText = () => {
  return (
    <div className="w-full">
      <motion.h1
        style={{ fontSize: "60px", lineHeight: "84px" }}
        className="md:min-h-60 text-2xl md:text-4xl lg:text-6xl tracking-widest px-5 md:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ReactTyped
          strings={[
            "We create radical new technologies to solve some of the world’s hardest problems",
          ]}
          typeSpeed={40}
          showCursor={false}
        />
      </motion.h1>

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 px-5 md:px-20 py-20">
        <h2
          data-aos="fade-up"
          data-aos-duration="500"
          className="w-full md:w-2/5 text-2xl md:text-5xl"
        >
          X - <br className="hidden md:block" />
          The Moonshot Factory
        </h2>
        <h5
          data-aos="fade-up"
          data-aos-duration="1500"
          className="w-full md:w-3/5 text-md md:text-2xl md:pr-16"
          style={{ lineHeight: "1.8" }}
        >
          X-Company is a diverse group of inventors and entrepreneurs who build
          and launch technologies that aim to improve the lives of millions,
          even billions, of people. Our goal: 10x impact on the world’s most
          intractable problems, not just 10% improvement. We approach projects
          that have the aspiration and riskiness of research with the speed and
          ambition of a startup.
        </h5>
      </div>
    </div>
  );
};

export default ExtText;
