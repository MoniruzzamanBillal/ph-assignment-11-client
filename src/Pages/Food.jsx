import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import UseAxios from "../Hooks/UseAxios";
import Loading from "../Components/Loading";

const features = [
  { name: "Category", description: "Breakfast" },
  { name: "Origin", description: "Bangladesh" },
  {
    name: "Ingredients",
    description: "walnut, apple , orange , mint",
  },

  { name: "Price", description: "200$" },
  { name: "Cheaf", description: "Monir" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
];
const Food = () => {
  const baseAxios = UseAxios();
  const [menu, setMenu] = useState(null);
  const { id } = useParams();

  const { data, isLoading } = useQuery("menu", () => {
    baseAxios
      .get(`/menu/${id} `)
      .then((response) => setMenu(response.data))
      .catch((error) => console.log(error));
  });

  if (isLoading) {
    return <Loading />;
  }
  if (!menu) {
    return <Loading />;
  }

  return (
    <div className="foodContainer bg-white  dark:bg-[#161718] pt-[4rem] xsm:pt-[4.2rem] sm:pt-[4.5rem] md:pt-[5rem] pb-6 ">
      <div className="foodWrapper  ">
        {/* produc details page  */}
        <div className=" relative flex justify-center items-center ">
          {/*  */}

          <div className=" relative  w-full xsm:w-[94%] xmd:w-[90%] lg:w-[80%] flex flex-col md:flex-row items-center bg-white  dark:bg-gray-800 ">
            {/* bg image  */}
            <div className="bgImage  opacity-10 absolute top-[50%] left-[50%] transform -translate-x-1/2  -translate-y-1/2 ">
              <img src={menu.foodImage} alt="" />
              {/* foodImage */}
            </div>
            {/* bg image  */}

            <img
              className=" relative z-[10] object-cover md:h-auto w-[17rem] md:w-[22rem]  lg:w-[24rem]  md:rounded-none md:rounded-l-lg"
              // src="https://i.ibb.co/J27DVDZ/breakfast1.png"
              src={menu?.foodImage}
              alt=""
            />

            <div className=" relative z-[10] p-4 pt-8 md:pt-0 leading-normal flex flex-col justify-start text-lg md:text-base xmd:text-lg  ">
              {/* heading  */}

              <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white CormorantFont">
                Details
              </h5>
              {/* heading  */}

              {/* item name  */}
              <p className=" itemName mb-2 ">
                {" "}
                <span className="font-semibold CormorantFont dark:text-gray-50">
                  Item name :
                </span>{" "}
                <span className="nameItem text-orange-400 ">
                  {/* {foodName ? foodName : ""} */}
                  {menu?.foodName}
                </span>
              </p>
              {/* item name  */}

              {/* item Category  */}
              <p className=" category mb-2 ">
                {" "}
                <span className="font-semibold CormorantFont dark:text-gray-50">
                  {" "}
                  Category :
                </span>{" "}
                <span className="nameItem text-orange-400 ">
                  {menu?.foodCategory}
                </span>
              </p>
              {/* item Category  */}

              {/* item Origin  */}
              <p className=" Origin mb-2 ">
                {" "}
                <span className="font-semibold CormorantFont dark:text-gray-50">
                  {" "}
                  Origin :
                </span>{" "}
                <span className="nameItem text-orange-400 ">
                  {menu?.foodOrigin}
                </span>
              </p>
              {/* item Origin  */}

              {/* item Price  */}
              <p className=" Price mb-2 ">
                {" "}
                <span className="font-semibold CormorantFont dark:text-gray-50">
                  {" "}
                  Price :
                </span>{" "}
                <span className="nameItem text-orange-400 ">
                  {menu?.price}$
                </span>
              </p>
              {/* item Price  */}

              {/* item Cheaf  */}
              <p className=" Cheaf mb-2 ">
                {" "}
                <span className="font-semibold CormorantFont dark:text-gray-50">
                  {" "}
                  Cheaf :
                </span>{" "}
                <span className="nameItem text-orange-400 ">Monir</span>
              </p>
              {/* item Cheaf  */}

              {/* item Ingredients  */}
              <p className=" Cheaf mb-2 ">
                <span className="font-semibold CormorantFont dark:text-gray-50 ">
                  {" "}
                  Ingredients :
                </span>{" "}
                {menu?.ingredients?.map((ingredient, ind) => (
                  <span className="nameItem text-orange-400 ">
                    {ingredient}{" "}
                    {ind === menu?.ingredients.length - 1 ? "" : " , "}
                  </span>
                ))}
              </p>

              {/* item Ingredients  */}

              {/* order button  */}

              <Link to={`/buy`}>
                <button className="orderNow mt-5 py-2 px-5 bg-gradient-to-r from-cyan-500 to-blue-500  hover:scale-105 duration-300 active:scale-95 sansFont font-semibold rounded text-gray-100 ">
                  Order Now
                </button>
              </Link>

              {/* order button  */}
            </div>
          </div>

          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
        </div>
        {/* produc details page  */}
      </div>
    </div>
  );
};

export default Food;
