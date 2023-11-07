import React from "react";

const OrderItem = ({ menu }) => {
  console.log(menu);
  return (
    <div className="  leftSide rounded-lg   ">
      {/* item container  */}
      {/* item container  */}
      <div className=" group ItemContainer justify-between mb-6 rounded-lg bg-gray-50 dark:bg-gray-700 p-6 shadow-md xsm:flex xsm:justify-start">
        <img
          src={menu?.foodImage}
          alt="product-image"
          className="w-full rounded-lg  xsm:w-28 sm:w-40 bg-gray-100 dark:bg-gray-600 group-hover:scale-105 duration-500 "
        />
        {/* <div className="xsm:ml-4 xsm:flex xsm:w-full xsm:justify-between  "> */}
        <div className="ml-4 flex w-full justify-between  ">
          <div className="mt-5 pl-0 sm:pl-3 sm:mt-0  flex flex-col justify-center   ">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 ">
              {menu?.foodName}
            </h2>

            <p className="mt-2  text-xs text-gray-700 dark:text-gray-200">
              {" "}
              <span className=" font-semibold ">price :</span> {menu?.price}
            </p>

            {/* quantity  */}
            <p className="mt-2  text-xs text-gray-700 dark:text-gray-200">
              {" "}
              <span className=" font-semibold ">Quantity :</span>{" "}
              {menu?.orderQuantity}
            </p>
            {/* quantity  */}
          </div>
          <div className="  flex justify-center items-center mt-4  sm:mt-0 ">
            <div
              className="removeButton  "
              //   onClick={() => handleDelete(data._id)}
            >
              <button className=" bg-red-500 hover:bg-red-600 dark:bg-red-800 hover:dark:bg-red-900 text-white font-semibold py-2 px-5 rounded active:scale-95 ">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* item container  */}
      {/* item container  */}
    </div>
  );
};

export default OrderItem;
