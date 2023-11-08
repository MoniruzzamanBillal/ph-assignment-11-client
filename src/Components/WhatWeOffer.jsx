import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const WhatWeOffer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      className="WhatWeOffer bg-gray-200 dark:bg-[#0E0D0C] relative py-16 "
      ref={ref}
    >
      {/*  */}
      {/*  */}
      {/* right top image  */}

      <div className="rightTopImg   absolute top-0 right-0  w-[6rem] xsm:w-[7rem] sm:w-[8rem] md:w-[10rem] xmd:w-[12rem] lg:w-[14rem]  ">
        <img
          src="https://i.ibb.co/Pt1Rq68/shape-2.png"
          className=" w-full h-full "
          alt=""
        />
      </div>

      {/* right top image  */}
      {/*  */}
      {/*  */}

      {/*  */}
      {/*  */}
      {/* bottom left image  */}

      <div className="leftbottomleft absolute bottom-0 left-0 w-[5rem] xsm:w-[6rem] sm:w-[7rem] md:w-[9rem] xmd:w-[11rem] lg:w-[13rem]  ">
        <img
          src="https://i.ibb.co/1GjGz1B/shape-1.png"
          className=" w-full h-full "
          alt=""
        />
      </div>
      {/* bottom left image  */}
      {/*  */}
      {/*  */}

      <div className="Wrapper  w-[99%] xsm:w-[98%] sm:w-[96%] md:w-[94%] xmd:w-[90%] m-auto z-[10]  relative ">
        {/* offer top section  */}
        <div className="offerTop bg-amber-5004  flex flex-col justify-center items-center">
          {/* intro para  */}
          <motion.div
            initial={{ y: "100", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="introPara text-base sm:text-lg font-semibold mb-3 sansFont text-orange-700 dark:goldenText "
          >
            <p>FLAVORS FOR ROYALTY</p>
          </motion.div>
          {/* intro para  */}

          {/* seperate image  */}
          <motion.div
            initial={{ y: "100", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="seperatorImg m-auto  w-[7rem] flex justify-center items-center mb-4 "
          >
            <img
              src="https://i.ibb.co/pr3Ryq7/separator.png"
              className="  w-full h-full "
              alt=""
            />
          </motion.div>
          {/* seperate image  */}

          {/* heading  */}
          <motion.div
            initial={{ y: "100", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="heading mb-6 text-2xl xsm:text-3xl sm:text-4xl md:text-5xl  lg:text-6xl font-bold CormorantFont CormorantFont  text-gray-800 dark:text-white  "
          >
            <h1>We Offer Top Notch</h1>
          </motion.div>
          {/* heading  */}

          {/* small description  */}
          <motion.div
            initial={{ y: "100", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="smallDescription text-xs sm:text-sm md:text-base xmd:text-lg w-[62%] xsm:w-[58%] sm:w-[55%] md:w-[48%] xmd:w-[40%] lg:w-[34%] m-auto text-center mb-8   text-gray-800 dark:text-gray-50  "
          >
            <p className="">
              We're committed to delivering top-notch quality in every aspect of
              your dining experience – from our finest ingredients to
              exceptional service. Join us for a memorable meal.
            </p>
          </motion.div>
          {/* small description  */}

          {/*  */}
        </div>
        {/* offer top section  */}

        {/* offer card section  */}
        <div className="offerCard  ">
          <div className="CardContainer  grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 m-auto gap-8 ">
            {/* braekfast container  */}

            <motion.div
              initial={{ y: "100", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="breakfastContainer  grid grid-rows-1 xmd:grid-rows-[420px_100px] hover:scale-105 duration-500"
            >
              <div className="breakfastTop  ">
                {/* break fast top img  */}
                <div className="breakfastTop  m-auto flex justify-center items-center   ">
                  <img
                    src="https://i.ibb.co/J3n4Bmb/service-1.jpg"
                    className=""
                    alt=""
                  />
                </div>
                {/* break fast top img  */}

                <div className="breakfastBottom  mt-8 text-center ">
                  <h1 className=" sansFont text-2xl mb-2 font-semibold  text-gray-800 dark:text-white ">
                    Breakfast
                  </h1>
                  <Link to={`menu`}>
                    <p className=" cursor-pointer inline-block sansFont  text-orange-800 dark:text-[#f5c570] font-semibold text-lg relative group ">
                      View menu
                      <span className="absolute -bottom-[.15rem] left-0 w-0 h-[.15rem] bg-orange-800 dark:bg-[#f5c570] group-hover:w-full group-hover:transition-all"></span>
                      <span className="absolute -bottom-[.4rem] left-0 w-0 h-[.15rem] bg-orange-800 dark:bg-[#f5c570] group-hover:w-full group-hover:transition-all"></span>
                    </p>
                  </Link>
                </div>
              </div>

              {/* \
               */}

              {/* breakfast bottom  */}
              <div className="breakfastBottom hidden xmd:block "></div>
              {/* breakfast bottom  */}
            </motion.div>

            {/* braekfast container  */}

            {/*  */}
            {/*  */}

            {/* appetizer container  */}
            <motion.div
              initial={{ y: "100", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="appetizerContainer  grid grid-rows-1 xmd:grid-rows-[100px_420px] hover:scale-105 duration-500 "
            >
              {/* appetizer top  */}
              <div className="breakfastBottom  hidden xmd:block "></div>
              {/* appetizer top  */}

              {/* appetizer bottom  */}
              <div className="breakfastTop  ">
                {/* break fast top img  */}
                <div className="breakfastTop  m-auto flex justify-center items-center  ">
                  <img
                    src="https://i.ibb.co/9GCMLtt/service-2.jpg"
                    className=""
                    alt=""
                  />
                </div>
                {/* break fast top img  */}

                <div className="breakfastBottom  mt-8 text-center  ">
                  <h1 className=" sansFont text-2xl mb-2 font-semibold  text-gray-800 dark:text-white  ">
                    Appetizer
                  </h1>
                  <Link to={`menu`}>
                    <p className=" cursor-pointer inline-block sansFont  text-orange-800 dark:text-[#f5c570] font-semibold text-lg relative group ">
                      View menu
                      <span className="absolute -bottom-[.15rem] left-0 w-0 h-[.15rem] bg-orange-800 dark:bg-[#f5c570] group-hover:w-full group-hover:transition-all"></span>
                      <span className="absolute -bottom-[.4rem] left-0 w-0 h-[.15rem] bg-orange-800 dark:bg-[#f5c570] group-hover:w-full group-hover:transition-all"></span>
                    </p>
                  </Link>
                </div>
              </div>
              {/* appetizer bottom  */}
            </motion.div>
            {/* appetizer container  */}

            {/* drinks container  */}

            <motion.div
              initial={{ y: "100", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="drinkContainer  grid  grid-rows-1 xmd:grid-rows-[100px_420px] hover:scale-105 duration-500 "
            >
              <div className="drinkTop  ">
                {/* break fast top img  */}
                <div className="drinkTop  m-auto flex justify-center items-center  z-[10] ">
                  <img
                    src="https://i.ibb.co/Twg3Gh0/service-3.jpg"
                    className=""
                    alt=""
                  />
                </div>
                {/* break fast top img  */}

                <div className="drinkBottom  mt-8 text-center ">
                  <h1 className=" sansFont text-2xl mb-2 font-semibold  text-gray-800 dark:text-white  ">
                    Drinks
                  </h1>
                  <Link to={`menu`}>
                    <p className=" cursor-pointer inline-block sansFont  text-orange-800 dark:text-[#f5c570] font-semibold text-lg relative group ">
                      View menu
                      <span className="absolute -bottom-[.15rem] left-0 w-0 h-[.15rem] bg-orange-800 dark:bg-[#f5c570] group-hover:w-full group-hover:transition-all"></span>
                      <span className="absolute -bottom-[.4rem] left-0 w-0 h-[.15rem] bg-orange-800 dark:bg-[#f5c570] group-hover:w-full group-hover:transition-all"></span>
                    </p>
                  </Link>
                </div>
              </div>

              {/* \
               */}

              {/* breakfast bottom  */}
              <div className="drinkBottom  hidden xmd:block "></div>
              {/* breakfast bottom  */}
            </motion.div>

            {/* drinks container  */}

            {/*  */}
          </div>
        </div>
        {/* offer card section  */}
      </div>
    </div>
  );
};

export default WhatWeOffer;
