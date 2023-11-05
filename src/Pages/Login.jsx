import React from "react";
import UseInputHook from "../Hooks/UseInputHook";
import { Link } from "react-router-dom";

const Login = () => {
  const emailInput = UseInputHook();
  const passwordInput = UseInputHook();

  const handleLogin = () => {
    console.log("click");
    console.log(emailInput.value);
    console.log(passwordInput.value);
  };

  return (
    <div
      className="w-full h-screen font-sans bg-cover bg-landscape bg-red-500 pt-[5rem] "
      style={{
        backgroundImage:
          'url("https://i.ibb.co/rdRrF87/pexels-roman-odintsov-4551832.jpg")',
      }}
    >
      <div className="absolute w-full h-full opacity-20 top-0 left-0 bg-gray-500  "></div>

      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg  ">
          <div className="leading-loose">
            <div className=" w-[56%] xsm:w-[70%] sm:w-[80%] md:w-[85%] xmd:w-[90%] lg:w-[100%]  p-4 xsm:p-5 sm:p-7 md:p-10 m-auto rounded shadow-xl bg-gray-200 dark:bg-gray-700 backdrop-blur bg-opacity-60  ">
              <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl text-center font-semibold CormorantFont text-gray-700 dark:text-white  ">
                Login
              </p>
              <div className="mb-3">
                <div className=" relative ">
                  <input
                    type="text"
                    id="login-with-bg-email"
                    {...emailInput}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 xsm:py-1.5 px-3 sm:py-2 sm:px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className=" relative ">
                  <input
                    type="text"
                    id="login-with-bg-password"
                    {...passwordInput}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 xsm:py-1.5 px-3 sm:py-2 sm:px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  type="submit"
                  onClick={() => handleLogin()}
                  className="py-1 xsm:py-1.5 px-3 sm:py-2 sm:px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Log in
                </button>
              </div>
              <div className="text-center mt-2 ">
                <a className="right-0 inline-block text-sm font-light align-baseline text-gray-900 hover:text-gray-950 dark:text-gray-100 dark:hover:text-gray-200 ">
                  Don't have account ?{" "}
                  <span className=" text-blue-700 font-bold cursor-pointer ">
                    <Link to={`/register`}>Register</Link>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
