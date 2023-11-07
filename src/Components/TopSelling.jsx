import React from "react";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

const TopSelling = ({ specificMenus }) => {
  console.log(specificMenus);

  return (
    <div className="topSelling bg-blue-50 dark:bg-[#161718] py-4 xsm:py-6 sm:py-8 md:py-10 relative ">
      {/* right top icon  */}
      <div className="rightTopIcon w-[7rem] md:w-[8rem] xmd:w-[9rem] lg:w-[10rem]  absolute top-0 right-0 ">
        <img
          src="https://i.ibb.co/Pt1Rq68/shape-2.png"
          className=" w-full h-full "
          alt=""
        />
      </div>
      {/* right top icon  */}

      {/* right bottom icon  */}
      <div className="rightBottom  w-[17rem] xsm:w-[22rem] sm:w-[27rem] md:w-[31rem] xmd:w-[36rem] lg:w-[40rem] absolute bottom-0 right-0 ">
        <img
          src="https://i.ibb.co/x39pHgk/shape-6.png"
          className=" w-full h-full "
          alt=""
        />
      </div>
      {/* right bottom icon  */}

      <div className="topSellingWrapper  w-[90%] m-auto relative z-[10] ">
        {/*  */}
        <div className="topHeading  text-center text-3xl font-semibold CormorantFont text-[#ffba24] dark:goldenText mb-1 ">
          <h1>Top selling items</h1>
        </div>
        {/*  */}

        {/* sepoerator image  */}

        <div className="seperatorImg  w-[9rem] flex justify-center items-center mb-8 text-center m-auto  ">
          <img
            src="https://i.ibb.co/pr3Ryq7/separator.png"
            className="  w-full h-full "
            alt=""
          />
        </div>
        {/* sepoerator image  */}

        {/* card items  */}
        <div className="cardItems  grid grid-cols-1s sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-7 m-auto ">
          {specificMenus.map((menu, ind) => (
            <ItemCard key={ind} menu={menu} />
          ))}
        </div>
        {/* card items  */}

        {/* see all button  */}
        <div className="seeAll  mt-10 m-auto text-center ">
          <Link to={`/menu`}>
            <button className="py-2 px-6 font-semibold bg-violet-500 hover:bg-violet-600 dark:bg-violet-900 dark:hover:bg-violet-950 rounded text-gray-100 active:scale-95 ">
              See all
            </button>
          </Link>
        </div>
        {/* see all button  */}

        {/*  */}
      </div>
    </div>
  );
};

export default TopSelling;
