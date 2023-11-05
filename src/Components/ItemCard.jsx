import React from "react";

const ItemCard = () => {
  return (
    <div className="max-w-sm m-auto group  bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 overflow-hidden ">
      <div className="cardImg  flex justify-center items-center self-center group-hover:scale-105 duration-500 ">
        <img
          className="rounded-t-lg"
          src="https://i.ibb.co/J27DVDZ/breakfast1.png"
          alt=""
        />
      </div>
      <div className=" cardBody p-4 bg-gray-100 dark:bg-gray-500 flex flex-col  ">
        {/* \ */}
        {/* \ */}
        {/* card row 1  */}
        <div className="cardRow1 mb-2  flex justify-between items-center  font-semibold sansFont ">
          {/* row1 column1  */}
          <div className="cardColumn1  text-lg dark:text-gray-100 ">
            Muffin{" "}
          </div>
          {/* row1 column1  */}

          {/* row1 column2  */}
          <div className="cardColumn2  text-lg dark:text-gray-100 ">
            price : <span className="text-[#FD5631]">$2500</span>
          </div>
          {/* row1 column2  */}
        </div>
        {/* card row 1  */}
        {/*  */}
        {/*  */}

        {/* card row 2  */}
        <div className="cardRow2 mb-4 flex justify-between items-center  font-semibold sansFont ">
          {" "}
          {/* row1 column1  */}
          <div className="cardColumn1  dark:text-gray-100 ">
            Category: <span className="goldenText">Breakfast</span>{" "}
          </div>
          {/* row1 column1  */}
        </div>
        {/* card row 2  */}

        {/* detailsa button  */}
        <div className="detailsBtn bg-gray-700 hover:bg-gray-800 text-center rounded cursor-pointer active:scale-95 hover:shadow-md CormorantFont ">
          <button className="py-2 text-xl text-white  rounded font-semibold ">
            Details
          </button>
        </div>
        {/* detailsa button  */}
      </div>
    </div>
  );
};

export default ItemCard;
