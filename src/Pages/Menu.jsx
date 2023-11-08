import React, { useEffect, useState, useSyncExternalStore } from "react";
import ItemCard from "../Components/ItemCard";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import Loading from "../Components/Loading";
import { useLoaderData } from "react-router-dom";
import UseAxios from "../Hooks/UseAxios";
import UseAuthContext from "../Hooks/UseAuthContext";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

//
const Menu = () => {
  const { loading } = UseAuthContext();
  const baseAxiosUrl = UseAxios();

  const queryClient = useQueryClient();
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [menus, setMenus] = useState([]);
  const [searchInput, setSearchInputValue] = useState("");
  const [searchMenu, setSearchMenu] = useState([]);

  const allData = useLoaderData();

  // console.log(allData);

  const dataPerPage = 9;

  const numofpages = Math.ceil(totalItemCount / dataPerPage);

  // effect to set total data count
  useEffect(() => {
    baseAxiosUrl
      .get(`/productCount`)
      .then((data) => setTotalItemCount(data?.data?.count))
      .catch((error) => console.log(error));
  }, []);

  const pages = [...new Array(numofpages).keys()];

  // effect for getting data
  useEffect(() => {
    baseAxiosUrl
      .get(`/menus`, { params: { dataPerPage, currentPage } }) // sending with query
      .then((response) => {
        setMenus(response?.data);
      })
      .catch((error) => console.log(error));
  }, [dataPerPage, currentPage]);

  // function for handle next button in pagination
  const handleNextCurrent = () => {
    if (currentPage >= numofpages) {
      return setCurrentPage(numofpages);
    }
    setCurrentPage(currentPage + 1);
  };

  // function for handle previous button in pagination
  const handlePrev = () => {
    if (currentPage <= 1) {
      return setCurrentPage(1);
    }
    setCurrentPage(currentPage - 1);
  };

  // search function
  const handleSearch = () => {
    console.log(searchInput);
    console.log(searchInput);

    if (!searchInput) {
      setSearchMenu([]);
      return;
    }

    const specificData = allData.filter((data) => {
      if (data?.foodName.toUpperCase().includes(searchInput)) {
        return data;
      }
    });
    setSearchMenu(specificData);
    // console.log(specificData);
  };

  // console.log(searchMenu);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="menuContainer relative bg-gray-50 dark:bg-[#161718] pt-[4rem] xsm:pt-[4.2rem] sm:pt-[4.5rem] md:pt-[5rem] pb-6 ">
      {/*  */}

      <Helmet>
        <title>Menu</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      {/* background pattern  */}
      <div className="pattern  w-full h-full opacity-5 dark:opacity-40 absolute top-0 left-0 ">
        <img
          src="https://i.ibb.co/44P55tX/form-pattern.png"
          className=" w-full h-full "
          alt=""
        />
      </div>
      {/* background pattern  */}

      {/*  */}

      <motion.div
        initial={{ x: "-1500", opacity: 0.4, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="menuWrapper m-auto relative z-[10]  "
      >
        {/* searchSection */}
        <div
          className="searchSection  h-[14rem] py-10 flex flex-col items-center  bg-cover bg-center "
          style={{
            backgroundImage: 'url("https://i.ibb.co/YkqyRSG/footer-bg.jpg")',
          }}
        >
          <h1 className=" text-2xl sm:text-3xl  font-semibold text-center CormorantFont goldenText  ">
            Find your favorite item{" "}
          </h1>

          <div className="inputField  w-[72%] xsm:w-[60%] sm:w-[55%] md:w-[52%] xmd:w-[48%] lg:w-[45%] m-auto ">
            <label
              for="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                value={searchInput}
                onChange={(e) =>
                  setSearchInputValue(e.target.value.toUpperCase())
                }
                className="block w-full p-2.5 sm:p-4 md:pl-10 text-sm sansFont text-gray-900  rounded-lg bg-gray-50 outline-none  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-1 sm:bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded text-sm px-4 py-1.5 sm:py-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
                onClick={() => handleSearch()}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {/* searchSection */}
      </motion.div>

      {/* item card section  */}
      {searchMenu?.length <= 0 ? (
        <div className="">
          {" "}
          {/* item card */}
          <div className="itemCard relative z-[10]  mt-1 xsm:mt-2 sm:mt-4 w-[96%] sm:w-[90%] m-auto grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 ">
            {menus &&
              menus.map((menu, ind) => <ItemCard key={ind} menu={menu} />)}
          </div>
          {/* item card */}
          {/* item card section  */}
          {/* pagination container  */}
          <div className="paginationContainer  sansFont relative z-[10] ">
            {/*  */}

            <div className="pagination   mt-3 py-4 text-center text-xs xsm:text-sm sm:text-base  ">
              <button
                onClick={() => handlePrev()}
                className=" py-1.5 xsm:py-2.5 px-2.5 xsm:px-3 sm:px-4 border-r border-gray-600 text-white bg-gray-500  hover:bg-gray-700   "
              >
                Prev
              </button>
              {pages.map((page, ind) => (
                <button
                  onClick={() => setCurrentPage(page + 1)}
                  className={` py-1.5 xsm:py-2.5 px-2.5 xsm:px-3 sm:px-4 text-white   ${
                    currentPage - 1 === page
                      ? "bg-[#e4c590] hover:bg-amber-300 "
                      : "bg-gray-500  hover:bg-gray-700"
                  } border-r border-gray-600 `}
                >
                  {" "}
                  {page + 1}{" "}
                </button>
              ))}
              <button
                onClick={() => handleNextCurrent()}
                className="py-1.5 xsm:py-2.5 px-2.5 xsm:px-3 sm:px-4 text-white bg-gray-500  hover:bg-gray-700   "
              >
                Next
              </button>
            </div>
            {/*  */}
          </div>
          {/* pagination container  */}{" "}
        </div>
      ) : (
        <div className="itemCard relative z-[10]  mt-1 xsm:mt-2 sm:mt-4 w-[96%] sm:w-[90%] m-auto grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 ">
          {" "}
          {searchMenu &&
            searchMenu.map((menu, ind) => (
              <ItemCard key={ind} menu={menu} />
            ))}{" "}
        </div>
      )}
    </div>
  );
};

export default Menu;
