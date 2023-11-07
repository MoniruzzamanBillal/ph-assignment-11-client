import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAuthContext from "../Hooks/UseAuthContext";
import Loading from "../Components/Loading";
import UseAxios from "../Hooks/UseAxios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const axiosUrl = UseAxios();
  const { user, loading } = UseAuthContext();
  const [menu, setMenu] = useState([]);
  const [foodName, setfoodName] = useState();
  const [foodImage, setfoodImage] = useState();
  const [foodOrigin, setfoodOrigin] = useState();
  const [foodCategory, setfoodCategory] = useState();
  const [price, setprice] = useState();
  const [quantity, setquantity] = useState();
  const [foodIngredients, setfoodIngredients] = useState();
  //   const [quantity , set] = useState()

  const userName = user?.displayName;
  const userEmail = user?.email;

  useEffect(() => {
    axiosUrl
      .get(`/menu/${id}`)
      .then((response) => {
        // console.log(response?.data);
        setMenu(response?.data);
        const result = response?.data;

        setfoodName(result?.foodName);
        setfoodImage(result?.foodImage);
        setfoodOrigin(result?.foodOrigin);
        setfoodCategory(result?.foodCategory);
        setprice(result?.price);
        setquantity(result?.quantity);

        setfoodIngredients((result?.ingredients).join(" "));
      })
      .catch((error) => console.log(error));
  }, []);

  // toast for successfull update
  const addedSuccessFully = () =>
    toast.success(" item updated successfully!", {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handleSubmit = () => {
    const ingredients = foodIngredients.split(" ");

    // check for empty input field
    if (
      !foodName ||
      !foodImage ||
      !foodOrigin ||
      !foodCategory ||
      !price ||
      !quantity ||
      !foodIngredients
    ) {
      toast.error("All fields are required.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const addedFoodObj = {
      foodName,
      foodImage,
      foodOrigin,
      foodCategory,
      price,
      quantity,
      ingredients,
      userName,
      userEmail,
    };

    // console.log(addedFoodObj);

    axiosUrl
      .patch(`/update/${id}`, addedFoodObj)
      .then((response) => {
        console.log(response?.data);
        if (response?.data?.acknowledged) {
          addedSuccessFully();
          setTimeout(() => {
            navigate("/myFood");
          }, 700);
        }
      })
      .catch((error) => console.log(error));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className="addFoodContainer bg-no-repeat bg-cover bg-center   pt-[4rem] xsm:pt-[4.2rem] sm:pt-[4.5rem] md:pt-[5rem] pb-4"
      style={{
        backgroundImage: `url('https://i.ibb.co/YkqyRSG/footer-bg.jpg')`,
      }}
    >
      <div className=" py-4 relative mainContiner flex flex-col  w-full items-center justify-center  bg-no-repeat bg-cover bg-center ">
        <h1 className="   robotoFont font-semibold text-4xl mb-4 text-[#e4c590]  ">
          Update your Product
        </h1>

        {/* sepoerator image  */}

        <div className="seperatorImg  w-[10rem] flex justify-center items-center mb-6 ">
          <img
            src="https://i.ibb.co/pr3Ryq7/separator.png"
            className="  w-full h-full "
            alt=""
          />
        </div>
        {/* sepoerator image  */}

        {/* form  */}
        <div className="formContainer w-[85%] xsm:w-[65%] sm:w-[58%] md:w-[50%] xmd:w-[46%] lg:w-[39%] rounded bg-gray-200 bg-opacity-60  shadow-lg backdrop-blur px-4 py-5 sm:px-5 sm:py-7 md:px-6 md:py-8 ">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* food name  name  */}
            <div className="w-full">
              <label
                htmlFor="food_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Food Name
              </label>
              <input
                type="text"
                name="food_name"
                id="food_name"
                value={foodName}
                onChange={(e) => setfoodName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Type food name"
                required=""
              />
            </div>
            {/* food_name name  */}

            {/* food image  */}
            <div className="w-full">
              <label
                htmlFor="food_image"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Food image
              </label>
              <input
                type="text"
                name="food_image"
                id="image"
                value={foodImage}
                onChange={(e) => setfoodImage(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Type food image url"
                required=""
              />
            </div>
            {/* food_image image  */}

            {/* food origin  */}

            <div className="w-full">
              <label
                htmlFor="food_oridin"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Food origin
              </label>
              <input
                type="text"
                name="food_oridin"
                id="food_oridin"
                value={foodOrigin}
                onChange={(e) => setfoodOrigin(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Enter origin"
                required=""
              />
            </div>

            {/* food origin  */}

            {/* Food  category  */}
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Food Category
              </label>
              <select
                id="category"
                value={foodCategory}
                onChange={(e) => setfoodCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              >
                <option value="">Select category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Appetizers">Appetizers</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>

            {/* product category  */}

            {/* product price  */}
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Price
              </label>
              <input
                onWheel={(e) => e.target.blur()}
                name="price"
                type="number"
                id="price"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm remove-arrow rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Enter price"
                required=""
              />
            </div>
            {/* product price  */}

            {/* product quantity  */}
            <div className="w-full">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Quantity
              </label>
              <input
                onWheel={(e) => e.target.blur()}
                name="quantity"
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setquantity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm remove-arrow rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Enter quantity(max-20)"
                required=""
              />
            </div>
            {/* product price  */}

            {/* ingredients ingredients  */}
            <div>
              <label
                htmlFor="ingredients"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Ingredients
              </label>
              <input
                type="text"
                name="ingredients"
                id="ingredients"
                value={foodIngredients}
                onChange={(e) => setfoodIngredients(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Enter ingredients without space"
                required=""
              />
            </div>

            {/* ingredients ingredients  */}

            {/* Add by  */}
            <div className="sm:col-span-2">
              <label
                htmlFor="addby"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Added by
              </label>
              <input
                type="text"
                name="userNameInput"
                id="userNameInput"
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-3 "
                placeholder="User name"
                value={userName}
                readOnly
                required=""
              />
              <input
                type="text"
                name="userEmailInput"
                id="userEmailInput"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="User email"
                value={userEmail}
                readOnly
                required=""
              />
            </div>
            {/* Add by   */}
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-violet-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-violet-800"
            onClick={() => handleSubmit()}
          >
            Add product
          </button>
        </div>
        {/* form  */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default UpdateProduct;
