import React, { useState } from "react";
import { Carousel } from "flowbite-react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // console.log(activeSlide);

  return (
    <div className=" heroCOntainer  ">
      {/* careusol  */}
      <div className=" h-[25rem] sm:h-[27rem] xmd:h-[29rem] lg:h-[32rem] bg-violet-300 ">
        <Carousel
          leftControl={<AiOutlineLeft />}
          rightControl={<AiOutlineRight />}
          slideInterval={30000}
          onSlideChange={(change) => setActiveSlide(change)}
        >
          {/*  */}
          {/* slide 1  */}
          <div
            className="slide1  flex justify-center items-center w-full h-full bg-cover bg-center  "
            style={{
              backgroundImage:
                'url("https://i.ibb.co/250KXgf/hero-slider-1.jpg")',
            }}
          >
            {/* slider container  */}
            {activeSlide === 0 && (
              <div className="sliderCOntainer   flex flex-col justify-center items-center self-center ">
                {/* top line  */}
                <motion.p
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="  goldenText text-base xsm:text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 xmd:mb-4 text-center "
                >
                  Tradational & Hygine
                </motion.p>
                {/* top line  */}

                {/* sepoerator image  */}

                <motion.div
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 0.7 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="seperatorImg w-[7rem] xsm:w-[8rem] md:w-[9rem] lg:w-[10rem] flex justify-center items-center mb-2 md:mb-3 xmd:mb-4 "
                >
                  <img
                    src="https://i.ibb.co/pr3Ryq7/separator.png"
                    className="  w-full h-full "
                    alt=""
                  />
                </motion.div>
                {/* sepoerator image  */}

                {/* heading sectio  */}

                <motion.h1
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className=" CormorantFont text-3xl xsm:text-4xl md:text-5xl xmd:text-6xl lg:text-7xl text-center font-semibold text-gray-50 mb-5 md:mb-6 xmd:mb-7 "
                >
                  Tradational & Hygine <br />
                  For the love of
                </motion.h1>
                {/* heading sectio  */}

                {/* header bottom line  */}
                <motion.p
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="  mb-4 md:mb-6 xmd:mb-8 text-sm xsm:text-base md:text-lg xmd:text-xl lg:text-2xl text-gray-50 "
                >
                  Come with family & feel the joy of mouthwatering food
                </motion.p>
                {/* header bottom line  */}

                {/* banner button  */}
                <motion.div
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="bannerBtn  "
                >
                  <Link to="menu">
                    <button className="  hover:bg-[#e4c590] transition-all duration-300  py-2 px-4 rounded font-semibold goldenText hover:text-gray-950 border border-[#e4c590] ">
                      Our menu
                    </button>
                  </Link>
                </motion.div>
                {/* banner button  */}

                {/*  */}
              </div>
            )}

            {/* slider container  */}
          </div>
          {/* slide 1  */}
          {/*  */}

          {/*  */}
          {/* slide 2  */}
          <div
            className="slide1 bg-amber-200 flex justify-center items-center w-full h-full bg-cover bg-center   "
            style={{
              backgroundImage:
                'url("https://i.ibb.co/N7XRkyW/hero-slider-2.jpg")',
            }}
          >
            {/* slider container  */}
            {activeSlide === 1 && (
              <div className="sliderCOntainer   flex flex-col justify-center items-center self-center ">
                {/* top line  */}
                <motion.p
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="  goldenText text-base xsm:text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 xmd:mb-4 text-center "
                >
                  delightful experience
                </motion.p>
                {/* top line  */}

                {/* sepoerator image  */}

                <motion.div
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 0.7 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="seperatorImg w-[7rem] xsm:w-[8rem] md:w-[9rem] lg:w-[10rem] flex justify-center items-center mb-2 md:mb-3 xmd:mb-4 "
                >
                  <img
                    src="https://i.ibb.co/pr3Ryq7/separator.png"
                    className="  w-full h-full "
                    alt=""
                  />
                </motion.div>
                {/* sepoerator image  */}

                {/* heading sectio  */}

                <motion.h1
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className=" CormorantFont text-3xl xsm:text-4xl md:text-5xl xmd:text-6xl lg:text-7xl text-center font-semibold text-gray-50 mb-5 md:mb-6 xmd:mb-7 "
                >
                  Flavors Inspired by <br />
                  the Seasons
                </motion.h1>
                {/* heading sectio  */}

                {/* header bottom line  */}
                <motion.p
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="  mb-4 md:mb-6 xmd:mb-8 text-sm xsm:text-base md:text-lg xmd:text-xl lg:text-2xl text-gray-50 "
                >
                  Come with family & feel the joy of mouthwatering food
                </motion.p>
                {/* header bottom line  */}

                {/* banner button  */}
                <motion.div
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="bannerBtn  "
                >
                  <Link to="menu">
                    <button className="  hover:bg-[#e4c590] transition-all duration-300  py-2 px-4 rounded font-semibold goldenText hover:text-gray-950 border border-[#e4c590] ">
                      Our menu
                    </button>
                  </Link>
                </motion.div>
                {/* banner button  */}

                {/*  */}
              </div>
            )}

            {/* slider container  */}
          </div>
          {/* slide 2  */}
          {/*  */}

          {/*  */}
          {/* slide 3  */}
          <div
            className="slide3 bg-amber-200 flex justify-center items-center w-full h-full bg-cover bg-center   "
            style={{
              backgroundImage:
                'url("https://i.ibb.co/61kKSZ6/hero-slider-3.jpg")',
            }}
          >
            {/* slider container  */}
            {activeSlide === 2 && (
              <div className="sliderCOntainer   flex flex-col justify-center items-center self-center ">
                {/* top line  */}
                <motion.p
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="  goldenText text-base xsm:text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 xmd:mb-4 text-center "
                >
                  amazing & delicious
                </motion.p>
                {/* top line  */}

                {/* sepoerator image  */}

                <motion.div
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 0.7 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="seperatorImg w-[7rem] xsm:w-[8rem] md:w-[9rem] lg:w-[10rem] flex justify-center items-center mb-2 md:mb-3 xmd:mb-4 "
                >
                  <img
                    src="https://i.ibb.co/pr3Ryq7/separator.png"
                    className="  w-full h-full "
                    alt=""
                  />
                </motion.div>
                {/* sepoerator image  */}

                {/* heading sectio  */}

                <motion.h1
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className=" CormorantFont text-3xl xsm:text-4xl md:text-5xl xmd:text-6xl lg:text-7xl text-center font-semibold text-gray-50 mb-5 md:mb-6 xmd:mb-7 "
                >
                  Where every flavor <br />
                  tells a story
                </motion.h1>
                {/* heading sectio  */}

                {/* header bottom line  */}
                <motion.p
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="  mb-4 md:mb-6 xmd:mb-8 text-sm xsm:text-base md:text-lg xmd:text-xl lg:text-2xl text-gray-50 "
                >
                  Come with family & feel the joy of mouthwatering food
                </motion.p>
                {/* header bottom line  */}

                {/* banner button  */}
                <motion.div
                  initial={{ y: "100", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="bannerBtn  "
                >
                  <Link to="menu">
                    <button className="  hover:bg-[#e4c590] transition-all duration-300  py-2 px-4 rounded font-semibold goldenText hover:text-gray-950 border border-[#e4c590] ">
                      Our menu
                    </button>
                  </Link>
                </motion.div>
                {/* banner button  */}

                {/*  */}
              </div>
            )}

            {/* slider container  */}
          </div>
          {/* slide 3 */}
          {/*  */}

          {/*  */}
        </Carousel>
      </div>
      {/* careusol  */}
    </div>
  );
};

export default Hero;
