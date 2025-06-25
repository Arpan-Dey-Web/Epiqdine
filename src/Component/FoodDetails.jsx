import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const FoodDetails = () => {
  const navigate = useNavigate();
  const {
    _id,
    foodCategory,
    foodDescription,
    foodOrigin,
    foodQuantity,
    foodPrice,
    foodImageLink,
    userName,
    userEmail,
    newFoodName,
    purchaseFoodCount,
  } = useLoaderData();

  const handlePurchaseFoodButton = () => {
    toast("going to purchase food page");
    navigate(`/purchasefood/${_id}`);
  };
  return (
    <div className="min-h-screen   text-slate-100 font-sans p-8 ">
      <div className="max-w-2xl mx-auto  border border-gray-600	bg-slate-800/60 backdrop-blur-lg rounded-2xl	 shadow-xl p-6 space-y-6">
        <img
          src={foodImageLink}
          alt={newFoodName}
          className="w-full h-64 object-cover rounded-xl border border-indigo-600 shadow-md"
        />

        <h1 className="text-3xl font-bold tracking-wide text-center  border-b border-gray-600 p-2  mx-auto  capitalize">
          {newFoodName}
        </h1>

        <div className=" rounded-2xl   mx-auto">
          <p className="text-base text-center opacity-90 capitalize text-gray-300">
            {foodDescription}
          </p>
        </div>

        <div className="text-sm">
          <div className="">
            <div className="flex py-2 gap-3">
              <span className=" text-orange-400  font-bold">Food Origin: </span>
              <span className="text-white">{foodOrigin}</span>
            </div>

            <div className="flex py-2 gap-3">
              <span className=" text-orange-400 font-bold">Category: </span>
              <span>{foodCategory}</span>
            </div>

            <div className="flex py-2 gap-3">
              <span className=" text-orange-400 font-bold">Food Owner:</span>
              <span>{userName}</span>
            </div>

            <div className="flex py-2 gap-3">
              <span className=" text-orange-400 font-bold">Food Quantity:</span>
              <span> {foodQuantity}</span>
            </div>

            <div className="flex py-2 gap-3">
              <span className=" text-orange-400 font-bold">Food Price:</span>
              <span> {foodPrice}</span>
            </div>
          </div>
        </div>
        <div className="pt-4 text-center">
          <button
            onClick={() => handlePurchaseFoodButton()}
            className=" rounded-full btn  btn-primary btn-outline    font-medium  text-white  "
          >
            Purchase Food Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FoodDetails;
