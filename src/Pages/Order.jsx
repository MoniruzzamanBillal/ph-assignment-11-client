import React from "react";

const Order = () => {
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
        <div className="  leftSide rounded-lg   md:w-2/3">
          {/* item container  */}
          {/* item container  */}
          <div className=" group ItemContainer justify-between mb-6 rounded-lg bg-gray-50 dark:bg-gray-700 p-6 shadow-md xsm:flex xsm:justify-start">
            <img
              //   src={data.productImg}
              src={`https://i.ibb.co/J27DVDZ/breakfast1.png`}
              alt="product-image"
              className="w-full rounded-lg  xsm:w-28 sm:w-40 bg-gray-100 dark:bg-gray-600 group-hover:scale-105 duration-500 "
            />
            {/* <div className="xsm:ml-4 xsm:flex xsm:w-full xsm:justify-between  "> */}
            <div className="ml-4 flex w-full justify-between  ">
              <div className="mt-5 pl-0 sm:pl-3 sm:mt-0  flex flex-col justify-center   ">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 ">
                  {/* {data.productName} */}
                  product name
                </h2>
                {/* <p className="mt-1 text-xs text-gray-700">36EU - 4US</p> */}
                <p className="mt-2  text-xs text-gray-700 dark:text-gray-200">
                  {" "}
                  <span className=" font-semibold ">price :</span>{" "}
                  {/* {data.price}  */} producty price
                </p>
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

        {/* </div> */}

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

const ordertest = () => {
  return (
    <>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  Nike Air Max 2019
                </h2>
                <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    {" "}
                    -{" "}
                  </span>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value="2"
                    min="1"
                  />
                  <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    {" "}
                    +{" "}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">259.000 ₭</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  Nike Air Max 2019
                </h2>
                <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
              </div>
              <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    {" "}
                    -{" "}
                  </span>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value="2"
                    min="1"
                  />
                  <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    {" "}
                    +{" "}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">259.000 ₭</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Sub total --> */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </>
  );
};

const test2Filterdata = () => {
  return (
    <div className="aa">
      {filterData &&
        filterData.map((data, ind) => (
          <>
            {/* item container  */}
            <div className=" ItemContainer justify-between mb-6 rounded-lg bg-gray-50 p-6 shadow-md sm:flex sm:justify-start">
              <img
                src={data.productImg}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {data.productName}
                  </h2>
                  {/* <p className="mt-1 text-xs text-gray-700">36EU - 4US</p> */}
                  <p className="mt-1 text-xs text-gray-700">
                    {" "}
                    <span className=" font-semibold ">price :</span>{" "}
                    {data.price} ${" "}
                  </p>
                </div>
                <div className="  flex justify-center items-center mt-4  sm:mt-0 ">
                  <div
                    className="removeButton  "
                    onClick={() => handleDelete(data._id)}
                  >
                    <button className=" bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded active:scale-95 ">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* item container  */}
          </>
        ))}
    </div>
  );
};
