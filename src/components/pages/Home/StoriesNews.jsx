import { useEffect, useState } from "react";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const StoriesNews = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 3500) {
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
          Stories + News
        </h3>
      </div>
      <div className="relative -mt-20 z-0">
        <div
          data-aos="fade-up"
          className="bg-[url('/img_4.webp')] bg-inherit h-screen w-full bg-cover bg-center"
        >
          <div className="text-white p-10 h-full w-full flex items-end">
            <div className="w-full space-y-10">
              <div className="w-full">
                <h3
                  style={{ fontFamily: "Roboto" }}
                  className="text-white text-2xl md:text-3xl"
                >
                  We choose to go to the moon
                </h3>
              </div>
              <div className="text-2xl text-black group cursor-pointer h-full md:text-3xl flex justify-between text-start w-full gap-7 ">
                <h3 className="text-sm text-[#FFB300] pt-2">
                  MOONSHOT THINKING
                </h3>
                <div className="text-3xl bg-[#000000] text-white hover:bg-[#FFB300] rounded w-12 h-12 flex justify-center items-center overflow-x-hidden">
                  <FaArrowRight className="-translate-x-10 group-hover:translate-x-3 duration-200 " />{" "}
                  <FaArrowRight className=" -translate-x-3 group-hover:translate-x-12 duration-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="h-full w-full bg-[#F5F5F5] py-10 md:px-20"
        >
          <div data-aos="fade-up" className="h-full w-full mx-auto py-10">
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-4">
              <div className="group relative h-[52vh] md:h-[52vh] w-full  overflow-hidden ">
                <img
                  className=" h-[52vh] md:h-[52vh] w-full object-cover group-hover:scale-100 duration-200"
                  src="/i_1.webp"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 w-full h-0 p-5 bg-[#FFFFFF]  opacity-0 group-hover:h-full group-hover:opacity-100 duration-200">
                  <div className="text start relative">
                    <h3 className="text-2xl font-semibold">
                      Introducing Tidal
                    </h3>
                    <p className="pt-10">
                      A Moonshot of project the ocean and feed humanity
                      sustainably
                    </p>
                    <div className="cursor-pointer md:pt-12 h-full flex justify-between text-start w-full gap-7 ">
                      <h3 className="text-md text-[#FFB300] pt-3">
                        X PROJECTS
                      </h3>
                      <div className="text-3xl text-[#FFB300] rounded w-12 h-12 flex justify-center items-center overflow-x-hidden">
                        <FaArrowRight className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative h-[52vh] md:h-[80vh] w-full overflow-hidden ">
                <img
                  className=" h-[52vh] md:h-[80vh] w-full object-cover group-hover:scale-100 duration-200"
                  src="/i_2.jpg"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 w-full h-0 p-5 flex flex-col justify-center items-center bg-[#FFFFFF]  opacity-0 group-hover:h-full group-hover:opacity-100 duration-200">
                  <div className="text start relative">
                    <h3 className="text-2xl font-semibold">
                      Introducing Tidal
                    </h3>
                    <p className="pt-10">
                      {" "}
                      On the 10 year anniversary of X, WIRED UK takes a look at
                      what we’ve been up to at the factory — featuring
                      prototypes, plant buggies and Astro dressed as Gandalf{" "}
                    </p>
                    <div className="cursor-pointer md:pt-20 h-full flex justify-between text-start w-full gap-7 ">
                      <h3 className="text-md text-[#FFB300] pt-3">
                        X PROJECTS
                      </h3>
                      <div className="text-3xl text-[#FFB300] rounded w-12 h-12 flex justify-center items-center overflow-x-hidden">
                        <FaArrowRight className="" />
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="group relative h-[52vh] md:h-[52vh] w-full  overflow-hidden ">
                <img
                  className=" h-[52vh] md:h-[52vh] w-full object-cover group-hover:scale-100 duration-200"
                  src="/i_3.jpg"
                  alt=""
                />
                <div className="absolute bottom-0 p-5 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#FFFFFF]  opacity-0 group-hover:h-full group-hover:opacity-100 duration-200">
                  <div className="text start relative">
                    <h3 className="text-2xl font-semibold">
                      Introducing Tidal
                    </h3>
                    <p className="pt-10">
                      A Moonshot of project the ocean and feed humanity
                      sustainably
                    </p>
                    <div className="cursor-pointer md:pt-12 h-full flex justify-between text-start w-full gap-7 ">
                      <h3 className="text-md text-[#FFB300] pt-3">
                        X PROJECTS
                      </h3>
                      <div className="text-3xl text-[#FFB300] rounded w-12 h-12 flex justify-center items-center overflow-x-hidden">
                        <FaArrowRight className="" />
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="group relative h-[52vh] md:h-[80vh] w-full md:-mt-[28vh] overflow-hidden ">
                <img
                  className=" h-[52vh] md:h-[80vh] w-full object-cover group-hover:scale-100 duration-200"
                  src="/i_4.jpg"
                  alt=""
                />
                <div className="absolute bottom-0 p-5 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#FFFFFF]  opacity-0 group-hover:h-full group-hover:opacity-100 duration-200">
                  <div className="text start relative">
                    <h3 className="text-2xl font-semibold">
                      Introducing Tidal
                    </h3>
                    <p className="pt-10">
                      {" "}
                      On the 10 year anniversary of X, WIRED UK takes a look at
                      what we’ve been up to at the factory — featuring
                      prototypes, plant buggies and Astro dressed as Gandalf{" "}
                    </p>
                    <div className="cursor-pointer md:pt-20 h-full flex justify-between text-start w-full gap-7 ">
                      <h3 className="text-md text-[#FFB300] pt-3">
                        X PROJECTS
                      </h3>
                      <div className="text-3xl text-[#FFB300] rounded w-12 h-12 flex justify-center items-center overflow-x-hidden">
                        <FaArrowRight className="" />
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="group relative h-[52vh] md:h-[52vh] w-full  overflow-hidden ">
                <img
                  className=" h-[52vh] md:h-[52vh] w-full object-cover group-hover:scale-100 duration-200"
                  src="/i_5.jpg"
                  alt=""
                />
                <div className="absolute bottom-0 p-5 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#FFFFFF]  opacity-0 group-hover:h-full group-hover:opacity-100 duration-200">
                  <div className="text start relative">
                    <h3 className="text-2xl font-semibold">
                      Introducing Tidal
                    </h3>
                    <p className="pt-10">
                      A Moonshot of project the ocean and feed humanity
                      sustainably
                    </p>
                    <div className="cursor-pointer md:pt-12 h-full flex justify-between text-start w-full gap-7 ">
                      <h3 className="text-md text-[#FFB300] pt-3">
                        X PROJECTS
                      </h3>
                      <div className="text-3xl text-[#FFB300] rounded w-12 h-12 flex justify-center items-center overflow-x-hidden">
                        <FaArrowRight className="" />
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="group relative h-[52vh] md:h-[80vh] w-full md:-mt-[28vh] overflow-hidden ">
                <div className=" h-[52vh] text-[#FFB300] md:h-[80vh] w-full bg-black object-cover group-hover:scale-100 duration-200">
                  <div className="p-5 md:py-10">
                    <FaQuoteLeft className="text-[#FFB300] text-3xl" />
                    <p className="pl-5 md:pr-10 pt-5 text-sm md:text-md tracking-widest">
                      {" "}
                      On the 10 year anniversary of X, WIRED UK takes a look at
                      what we’ve been up to at the factory — featuring
                      prototypes, plant buggies and Astro dressed as Gandalf{" "}
                    </p>
                    <p className="pt-7">- Astro Teller</p>
                  </div>
                </div>
                <div className="absolute bottom-0 p-5 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#FFFFFF]  opacity-0 group-hover:h-full group-hover:opacity-100 duration-200">
                  <div className="text start relative">
                    <h3 className="text-2xl font-semibold">
                      Introducing Tidal
                    </h3>
                    <p className="pt-10">
                      {" "}
                      On the 10 year anniversary of X, WIRED UK takes a look at
                      what we’ve been up to at the factory — featuring
                      prototypes, plant buggies and Astro dressed as Gandalf{" "}
                    </p>
                    <div className="cursor-pointer md:pt-20 h-full flex justify-between text-start w-full gap-7 ">
                      <h3 className="text-md text-[#FFB300] pt-3">
                        X PROJECTS
                      </h3>
                      <div className="text-3xl text-[#FFB300] rounded w-12 h-12 flex justify-center items-center overflow-x-hidden">
                        <FaArrowRight className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesNews;
