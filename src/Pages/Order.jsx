import React, { useEffect, useState } from "react";
import UseAxios from "../Hooks/UseAxios";
import UseAuthContext from "../Hooks/UseAuthContext";
import OrderItem from "../Components/OrderItem";

const Order = () => {
  const { user, loading } = UseAuthContext();
  const axiosUrl = UseAxios();
  const [orderMenu, setOrderMenu] = useState([]);
  const loggedUserMail = user?.email;

  console.log(loggedUserMail);

  useEffect(() => {
    axiosUrl
      .get(`/cartData?email=${loggedUserMail}`)
      .then((response) => {
        // console.log(response.data);
        setOrderMenu(response.data);
      })
      .catch((error) => console.log(error));
  }, [loggedUserMail]);

  console.log(orderMenu);

  // let sum = 0;
  // const totalPrice = filterData.forEach((element) => {
  //   sum += sum + parseFloat(element.price);
  // });

  // let shiiping = 4.99;
  // console.log(sum);

  // let total = sum + shiiping;

  return (
    <div className=" bg-gray-200  dark:bg-[#161718] pt-20 pb-12 ">
      <h1 className="mb-2 mt-4 text-center text-4xl font-bold CormorantFont text-orange-600 dark:goldenText  ">
        My order
      </h1>

      {/* sepoerator image  */}

      <div className="seperatorImg m-auto w-[7rem] flex justify-center items-center mb-8 ">
        <img
          src="https://i.ibb.co/pr3Ryq7/separator.png"
          className="  w-full h-full "
          alt=""
        />
      </div>
      {/* sepoerator image  */}

      {/*  */}
      {/* cart items  */}

      <div className="mx-auto  max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        {/* left side  */}

        {/* added items  */}

        <div className="addedItem flex flex-col  md:w-2/3 h-[30rem] overflow-auto ">
          {orderMenu &&
            orderMenu.map((menu, ind) => <OrderItem key={ind} menu={menu} />)}
        </div>

        {/* added items  */}

        {/* left side  */}
        {/* right side , subtotal  */}
        <div className="mt-6 h-full rounded-lg  bg-white dark:bg-gray-800 p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700 dark:text-gray-50 ">Subtotal</p>
            {/* <p className="text-gray-700">{sum}$</p> */}
            <p className="text-gray-700 dark:text-gray-50">100$</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700 dark:text-gray-50 ">Shipping</p>
            {/* <p className="text-gray-700">{shiiping}$</p> */}
            <p className="text-gray-700 dark:text-gray-50 ">20$</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold dark:text-gray-50 ">Total</p>
            <div className="">
              {/* <p className="mb-1 text-lg font-bold">{total} USD</p> */}
              <p className="mb-1 text-lg font-bold dark:text-gray-50">
                3450 USD
              </p>
              <p className="text-xs text-gray-700 dark:text-gray-50">
                (including VAT)
              </p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
        {/* right side , subtotal  */}
      </div>

      {/* cart items  */}

      {/*  */}
    </div>
  );
};

export default Order;
