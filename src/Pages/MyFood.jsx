import React from "react";
import ItemCard from "../Components/ItemCard";

const MyFood = () => {
  return (
    <div className="menuContainer relative bg-gray-50 dark:bg-[#161718] pt-[4rem] xsm:pt-[4.2rem] sm:pt-[4.5rem] md:pt-[5rem] pb-6 ">
      {/*  */}

      {/* background pattern  */}
      <div className="pattern  w-full h-full opacity-5 dark:opacity-40 absolute top-0 left-0 ">
        <img
          src="https://i.ibb.co/44P55tX/form-pattern.png"
          className=" w-full h-full "
          alt=""
        />
      </div>
      {/* background pattern  */}

      <h1 className=" mb-3 text-5xl text-center font-semibold CormorantFont text-orange-600 dark:goldenText  ">
        My Foods
      </h1>

      {/* sepoerator image  */}

      <div className="seperatorImg m-auto w-[9rem] flex justify-center items-center mb-10 ">
        <img
          src="https://i.ibb.co/pr3Ryq7/separator.png"
          className="  w-full h-full "
          alt=""
        />
      </div>
      {/* sepoerator image  */}

      {/* item card section  */}

      {/* item card */}
      <div className="itemCard relative z-[10]  mt-1 xsm:mt-2 sm:mt-4 w-[96%] sm:w-[90%] m-auto grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 ">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>

      {/* item card */}

      {/* item card section  */}
    </div>
  );
};

export default MyFood;
