import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useParams } from "react-router-dom";
import UseAxios from "../Hooks/UseAxios";
import UseAuthContext from "../Hooks/UseAuthContext";
import Loading from "../Components/Loading";

const Buy = () => {
  const { user, loading } = UseAuthContext();
  const axiosUrl = UseAxios();
  const { id } = useParams();
  const menuData = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const [quantity, setQuantity] = useState(1);

  // const dateObj = new Date(startDate);
  const date = startDate.getDate();
  const month = startDate.getMonth();
  const year = startDate.getFullYear();

  // toast for error order
  const errorOrder = () =>
    toast.warn("order quota exceed", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  //   toast for successfull add to cart
  const itemAddedSuccessfully = () =>
    toast.success("item added  successfully!", {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // function for handling quantity decrease
  const handleDecrese = () => {
    if (quantity <= 0) {
      return setQuantity(0);
    }
    setQuantity(quantity - 1);
  };
  // function for handling quantity increase
  const handleIncrease = () => {
    if (quantity >= menuData.quantity) {
      return errorOrder();
    }

    setQuantity(quantity + 1);
  };

  // function for handling checkout functionality
  const handleCart = () => {
    console.log("click");

    const sendData = {
      id: menuData._id,
      orderQuantity: quantity,
      byuer: user?.email,
    };

    console.log(sendData);

    axiosUrl
      // .post("/addCart", sendData)
      .patch("/addCart", sendData)
      .then((response) => {
        console.log(response?.data);

        if (response?.data?.insertedId) {
          itemAddedSuccessfully();
        }
      })
      .catch((error) => console.log(error));
  };

  // console.log(menuData._id);
  // console.log(id);
  // console.log(month);
  // console.log(date);
  // console.log(year);

  console.log(user);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="purchaseContainer bg-white  dark:bg-[#161718] pt-[4rem] xsm:pt-[4.2rem] sm:pt-[4.5rem] md:pt-[5rem] pb-4 ">
      <div className="purchaseWrapper  w-[90%]  m-auto ">
        <h1 className="  text-5xl text-center font-semibold text-orange-500 dark:goldenText CormorantFont mb-3 ">
          Purchase Now{" "}
        </h1>

        {/* seperator image  */}
        {/* sepoerator image  */}

        <div className="seperatorImg m-auto w-[10rem] flex justify-center items-center mb-6 ">
          <img
            src="https://i.ibb.co/pr3Ryq7/separator.png"
            className="  w-full h-full "
            alt=""
          />
        </div>
        {/* sepoerator image  */}
        {/* seperator image  */}

        {/* for4m body  */}
        <div className="formBody   ">
          {/*  */}

          <div className="mx-auto max-w-screen-lg px-4 md:px-8">
            {/* product card  */}

            <div className="mb-3 bg-red-50 dark:bg-gray-600 rounded flex flex-col sm:divide-y sm:border-t sm:border-b">
              {/* <!-- product - start --> */}
              <div className="py-5 sm:py-8">
                <div className="flex flex-col justify-center items-center sm:flex-row sm:items-start   flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                  {/* <div className="sm:-my-2.5  bg-orange-400  "> */}
                  <div className="   ">
                    <div className="group relative block h-40 w-24 overflow-hidden rounded-lg  sm:h-56 sm:w-40">
                      <img
                        // src="https://i.ibb.co/J27DVDZ/breakfast1.png"
                        src={menuData?.foodImage}
                        loading="lazy"
                        alt="Photo by Thái An"
                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* item detail container  */}
                  <div className="flex flex-1 flex-col justify-around   ">
                    {/* item name  */}
                    <p className=" itemName mb-2 ">
                      {" "}
                      <span className="font-semibold CormorantFont dark:text-gray-50">
                        Item name :
                      </span>{" "}
                      <span className="nameItem text-orange-400 ">
                        {menuData?.foodName}
                      </span>
                    </p>
                    {/* item name  */}

                    {/* item Quantity  */}
                    <p className=" quantity mb-2 ">
                      {" "}
                      <span className="font-semibold CormorantFont dark:text-gray-50">
                        {" "}
                        Quantity :
                      </span>{" "}
                      <span className="nameItem text-xl text-orange-400 cursor-pointer ">
                        <span
                          className="pr-1 font-bold text-2xl "
                          onClick={() => handleDecrese()}
                        >
                          -
                        </span>
                        <span className="pr-1"> {quantity} </span>
                        <span
                          className=" font-bold text-2xl "
                          onClick={() => handleIncrease()}
                        >
                          +
                        </span>
                      </span>
                    </p>
                    {/* item Quantity  */}

                    {/* item Price  */}
                    <p className=" Price mb-2 ">
                      {" "}
                      <span className="font-semibold CormorantFont dark:text-gray-50">
                        {" "}
                        Price :
                      </span>{" "}
                      <span className="nameItem text-orange-400 ">
                        {menuData?.price}$
                      </span>
                    </p>
                    {/* item Price  */}

                    {/* Buyer name   */}
                    <p className=" buyer mb-2 ">
                      {" "}
                      <span className="font-semibold CormorantFont dark:text-gray-50">
                        {" "}
                        Buyer :
                      </span>{" "}
                      <span className="nameItem text-orange-400 ">
                        {user?.displayName}
                      </span>
                    </p>
                    {/* Buyer name   */}

                    {/* Buyer email    */}
                    <p className=" buyerEmail mb-2 ">
                      {" "}
                      <span className="font-semibold CormorantFont dark:text-gray-50">
                        {" "}
                        Buyer email :
                      </span>{" "}
                      <span className="nameItem text-orange-400 ">
                        {user?.email}
                      </span>
                    </p>
                    {/* Buyer email    */}

                    {/* buying date    */}
                    <p className=" buyerEmail mb-2 ">
                      {" "}
                      <span className="font-semibold CormorantFont dark:text-gray-50">
                        {" "}
                        Buying date :
                      </span>{" "}
                      <span className="nameItem text-orange-400 ">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </span>
                    </p>
                    {/* buying date    */}

                    {/*  */}
                  </div>

                  {/* item detail container  */}
                </div>
              </div>
              {/* <!-- product - end --> */}

              {/* product card  */}
            </div>

            {/* <!-- totals - start --> */}
            <div className="flex justify-center items-center">
              <button
                onClick={() => handleCart()}
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Add to cart
              </button>
            </div>
            {/* <!-- totals - end --> */}
          </div>

          {/*  */}
        </div>
        {/* for4m body  */}

        <ToastContainer />
      </div>
    </div>
  );
};

export default Buy;
