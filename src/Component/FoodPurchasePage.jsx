import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "./Context/AuthContext";
import axios from "axios";

const FoodPurchasePage = () => {
  const { user } = use(AuthContext);
  const email = user?.email;
  const name = user?.displayName;
  const navigate = useNavigate();
  const {
    _id,
    newFoodName,
    foodCategory,
    foodDescription,
    foodOrigin,
    foodQuantity,
    foodPrice,
    foodImageLink,
    purchaseFoodCount,
  } = useLoaderData();
  console.log(Date.now());
  // console.log(purchaseFoodCount);
  const handlePurchaseFood = (e) => {
    const form = e.target;
    // purchase food data
    // const purchaseFoodImage = foodImageLink;
    // const purchaseFoodName = form.foodname.value;
    // const purchaseFoodCategory = form.foodcategory.value;
    // const purchaseFoodOrigin = form.countryname.value;
    // const purchaseFoodPrice = form.foodprice.value;
    // const purchaseUserName = form.username.value;
    // const purchaseUserEmail = form.useremail.value;
    const purchaseFoodQuantity = form.foodquantity.value;
    const totalCost = purchaseFoodQuantity * foodPrice;
    console.log(totalCost);
    if (purchaseFoodQuantity <= 0) {
      return toast.error("Please enter a valid quantity greater than 0");
    }

    const newvalue = parseInt(purchaseFoodQuantity) + purchaseFoodCount;
    console.log(newvalue);
    // purchase food data full object
    const purchaseFoodDetails = {
      buyingDate: Date.now(),
      newFoodName,
      foodCategory,
      foodDescription,
      foodOrigin,
      foodQuantity,
      foodPrice,
      foodImageLink,
      purchaseFoodCount: newvalue,
      purchaseFoodQuantity,
      totalCost,
      email,
      name,
    };

    axios
      .post("http://localhost:3000/purchasefood", purchaseFoodDetails)
      .then((res) => {
        console.log(res);
        if (res?.data?.insertedId) {
          toast.success("Food Purchased Successfully");
        }
        navigate(`/myorder/${email}`);
      })
      .catch((error) => {
        return toast.error("Failed to purchase food. Please try again.");
      });
  };

  const inputClass = "flex flex-col justify-center items-start mb-4";
  const inputBoxClass =
    "w-full p-3 rounded-md border border-gray-300 bg-[#101828] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition capitalize";
  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#101828] shadow-lg rounded-2xl border border-gray-700">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePurchaseFood(e);
        }}
        className="space-y-6 "
      >
        <div>
          <div>
            <img
              className="rounded-2xl h-[350px] w-full object-cover mx-auto  mb-4"
              src={foodImageLink}
              name="foodimage"
              alt="food image"
            />
          </div>
          <div className={inputClass}>
            <label className="mb-2 font-semibold text-white">Food Name</label>
            <input
              type="text"
              className={inputBoxClass}
              name="foodname"
              value={newFoodName}
              placeholder="Food Name"
              readOnly
            />
          </div>
          <div className={inputClass}>
            <label className="mb-2 font-semibold text-white">
              Food Category
            </label>
            <input
              type="text"
              name="foodcategory"
              className={inputBoxClass}
              value={foodCategory}
              placeholder="Food Category"
              list="browsers"
              readOnly
            />
          </div>
          <div className={inputClass}>
            <label className="mb-2 font-semibold text-white">
              Food Quantity
            </label>
            <input
              type="number"
              className={inputBoxClass}
              placeholder="Enter Quantity Of Food"
              defaultValue={0}
              name="foodquantity"
              required
            />
          </div>
        </div>
        <div className={inputClass}>
          <label className="mb-2 font-semibold text-white">Food Origin</label>
          <input
            type="text"
            className={inputBoxClass}
            placeholder="Enter Food Origin Name"
            name="countryname"
            value={foodOrigin}
            readOnly
            required
          />
        </div>
        <div className={inputClass}>
          <label className="mb-2 font-semibold text-white">Food Price</label>
          <input
            type="number"
            className={inputBoxClass}
            placeholder="Enter Food Origin Name"
            name="foodprice"
            value={foodPrice}
            required
          />
        </div>

        <div className={inputClass}>
          <label className="mb-2 font-semibold text-white">Your Name</label>
          <input
            type="text"
            className={`${inputBoxClass} cursor-not-allowed bg-gray-800`}
            placeholder="Your Name"
            name="username"
            value={user.displayName}
            readOnly
          />
        </div>

        <div className={inputClass}>
          <label className="mb-2 font-semibold text-white">Your Email</label>
          <input
            type="email"
            className={`${inputBoxClass} cursor-not-allowed bg-gray-800`}
            placeholder="Your Email"
            name="useremail"
            value={user.email}
            readOnly
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
        >
          Purchase Now
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FoodPurchasePage;
