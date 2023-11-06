import React, { useState } from "react";

import { Carousel } from "flowbite-react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="testimonialContainer  ">
      <div
        className="testimonialWrapper  h-[35rem] bg-cover bg-no-repeat bg-center   "
        style={{
          backgroundImage: 'url("https://i.ibb.co/fSW8XQp/testimonial-bg.jpg")',
        }}
      >
        {/*  */}

        <Carousel
          leftControl={<AiOutlineLeft />}
          rightControl={<AiOutlineRight />}
          slideInterval={2000}
        >
          {/* testimonial 1  */}
          <div className="  w-[86%] m-auto flex flex-col items-center justify-center md:items-start md:flex-row   ">
            <div className="relative block">
              <img
                alt="profil"
                src="https://i.ibb.co/091yhHD/testi-avatar.jpg"
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-100 dark:text-white w-full md:w-2/3 m-auto text-left text-lg md:text-3xl">
                <span className="font-bold text-indigo-500">“</span>I wanted to
                thank you for inviting me down for that amazing dinner the other
                night. The food was extraordinary.
                <span className="font-bold text-indigo-500">”</span>
              </p>
              <div className="flex items-center justify-center mt-8">
                <span className="mr-2 text-lg font-semibold text-indigo-500">
                  Jean Miguel
                </span>
              </div>
            </div>
          </div>
          {/* testimonial 1  */}

          {/* testimonial 2  */}
          <div className="  w-[86%] m-auto flex flex-col items-center justify-center md:items-start md:flex-row   ">
            <div className="relative block">
              <img
                alt="profil"
                src="https://i.ibb.co/091yhHD/testi-avatar.jpg"
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-100 dark:text-white w-full md:w-2/3 m-auto text-left text-lg md:text-3xl">
                <span className="font-bold text-indigo-500">“</span>I wanted to
                thank you for inviting me down for that amazing dinner the other
                night. The food was extraordinary.
                <span className="font-bold text-indigo-500">”</span>
              </p>
              <div className="flex items-center justify-center mt-8">
                <span className="mr-2 text-lg font-semibold text-indigo-500">
                  Jean Miguel
                </span>
              </div>
            </div>
          </div>
          {/* testimonial 2  */}
          {/* testimonial 3  */}
          <div className="  w-[86%] m-auto flex flex-col items-center justify-center md:items-start md:flex-row   ">
            <div className="relative block">
              <img
                alt="profil"
                src="https://i.ibb.co/091yhHD/testi-avatar.jpg"
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-100 dark:text-white w-full md:w-2/3 m-auto text-left text-lg md:text-3xl">
                <span className="font-bold text-indigo-500">“</span>I wanted to
                thank you for inviting me down for that amazing dinner the other
                night. The food was extraordinary.
                <span className="font-bold text-indigo-500">”</span>
              </p>
              <div className="flex items-center justify-center mt-8">
                <span className="mr-2 text-lg font-semibold text-indigo-500">
                  Jean Miguel
                </span>
              </div>
            </div>
          </div>
          {/* testimonial 3  */}

          {/*  */}
        </Carousel>
        {/*  */}
      </div>
    </div>
  );
};

export default Testimonial;
