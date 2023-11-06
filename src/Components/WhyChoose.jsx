import React from "react";

const WhyChoose = () => {
  return (
    <div className="bg-white dark:bg-[#0E0D0C] py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* <!-- text - start --> */}
        <div className="mb-8 md:mb-12">
          <h2 className="mb-1 text-center text-lg font-bold lg:text-xl text-orange-800 dark:text-[#E4B15D] CormorantFont ">
            WHY CHOOSE US
          </h2>

          {/* sepoerator image  */}

          <div className="seperatorImg  m-auto w-[8rem] flex justify-center items-center mb-6 ">
            <img
              src="https://i.ibb.co/pr3Ryq7/separator.png"
              className="  w-full h-full "
              alt=""
            />
          </div>
          {/* sepoerator image  */}

          <p className="CormorantFont text-5xl m-auto mb-8 font-semibold text-center dark:text-gray-100   ">
            Our Strength
          </p>
        </div>
        {/* <!-- text - end --> */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
          {/* <!-- stat - start --> */}
          <div className="flex group flex-col items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-600 p-4 lg:p-8  hover:shadow-md hover:scale-105 duration-300 cursor-pointer ">
            {/* top imgge  */}
            <div className="topImg mb-3 group-hover:rotate-[360deg] duration-200 ">
              <img
                src="../../public/images/feature/features-icon-1.png"
                alt=""
              />
            </div>
            {/* top imgge  */}

            <div className="text-xl font-bold text-indigo-500 dark:text-indigo-400 sm:text-xl md:text-2xl mb-4">
              Hygienic Food
            </div>
            <div className="text-sm font-semibold text-center dark:text-gray-50 ">
              Lorem Ipsum is simply dummy printing and typesetting.
            </div>
          </div>
          {/* <!-- stat - end --> */}

          {/* <!-- stat - start --> */}
          <div className="flex group flex-col items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-600 p-4 lg:p-8  hover:shadow-md hover:scale-105 duration-300 cursor-pointer ">
            {/* top imgge  */}
            <div className="topImg mb-3 group-hover:rotate-[360deg] duration-200 ">
              <img
                src="../../public/images/feature/features-icon-2.png"
                alt=""
              />
            </div>
            {/* top imgge  */}

            <div className="text-xl font-bold text-indigo-500 dark:text-indigo-400 sm:text-xl md:text-2xl mb-4">
              Fresh Environment
            </div>
            <div className="text-sm font-semibold text-center dark:text-gray-50 ">
              Lorem Ipsum is simply dummy printing and typesetting.
            </div>
          </div>

          {/* <!-- stat - start --> */}
          <div className="flex group flex-col items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-600 p-4 lg:p-8  hover:shadow-md hover:scale-105 duration-300 cursor-pointer ">
            {/* top imgge  */}
            <div className="topImg mb-3 group-hover:rotate-[360deg] duration-200 ">
              <img
                src="../../public/images/feature/features-icon-3.png"
                alt=""
              />
            </div>
            {/* top imgge  */}

            <div className="text-xl font-bold text-indigo-500 dark:text-indigo-400 sm:text-xl md:text-2xl mb-4">
              Skilled Chefs
            </div>
            <div className="text-sm font-semibold text-center dark:text-gray-50 ">
              Lorem Ipsum is simply dummy printing and typesetting.
            </div>
          </div>
          {/* <!-- stat - end --> */}

          {/* <!-- stat - start --> */}
          <div className="flex group flex-col items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-600 p-4 lg:p-8  hover:shadow-md hover:scale-105 duration-300 cursor-pointer ">
            {/* top imgge  */}
            <div className="topImg mb-3 group-hover:rotate-[360deg] duration-200">
              <img
                src="../../public/images/feature/features-icon-4.png"
                alt=""
              />
            </div>
            {/* top imgge  */}

            <div className="text-xl font-bold text-indigo-500 dark:text-indigo-400 sm:text-xl md:text-2xl mb-4">
              Event & Party
            </div>
            <div className="text-sm font-semibold text-center dark:text-gray-50 ">
              Lorem Ipsum is simply dummy printing and typesetting.
            </div>
          </div>
          {/* <!-- stat - end --> */}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
