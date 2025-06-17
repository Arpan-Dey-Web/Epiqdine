import React from "react";
import { Link, useLoaderData } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const FoodDetails = () => {
  const {
    _id,
    newFoodName,
    foodCategory,
    foodDescription,
    foodOrigin,
    foodQuantity,
    foodPrice,
    foodImageLink,
  } = useLoaderData();

  const handlePurchaseFoodButton = () => {
    toast("going to purchase food page");
  };
  return (
    <div className="min-h-screen   text-slate-100 font-sans p-8 ">
      <div className="max-w-3xl mx-auto  border border-gray-600	bg-slate-800/60 backdrop-blur-lg rounded-2xl	 shadow-xl p-6 space-y-6">
        <img
          src={foodImageLink}
          alt={newFoodName}
          className="w-full h-64 object-cover rounded-xl border border-indigo-600 shadow-md"
        />

        <h1 className="text-3xl font-bold tracking-wide text-center  border-b border-gray-600 p-2 w-md mx-auto  capitalize">
          {newFoodName}
        </h1>

        <div className=" rounded-2xl  w-md mx-auto">
          <p className="text-base text-center opacity-90 capitalize text-gray-300">
            {foodDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
          <div>
            <span className="block text-indigo-400 font-semibold">
              Food Origin
            </span>
            {foodOrigin}
            <div>
              <span className="block text-indigo-400 font-semibold">
                Category
              </span>
              {foodCategory}
            </div>
            <div>
              <span className="block text-indigo-400 font-semibold">
                Food Count:
              </span>
              {"0"}
            </div>
            <div>
              <span className="block text-indigo-400 font-semibold">
                Food Quantity:
              </span>
              {foodQuantity}
            </div>

            <div>
              <span className="block text-indigo-400 font-semibold">
                Food Price:
              </span>
              {foodPrice}
            </div>
          </div>
        </div>
        <div className="pt-4 text-center">
          <Link to={`/purchasefood/${_id}`}>
            <button
              onClick={() => handlePurchaseFoodButton()}
              className="inline-block rounded-full border border-indigo-600 px-6 py-2 md:px-12 md:py-3  font-medium text-white hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden  md:text-lg "
            >
              Purchase Food Now
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FoodDetails;
