import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "./Context/AuthContext";
import axios from "axios";

const FoodPurchasePage = () => {
  const [foodDetails, setFoodDetails] = useState({});
  const { user } = use(AuthContext);
  const token = user?.accessToken;
  const email = user?.email;
  const name = user?.displayName;
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://assaignment-11-server-iota.vercel.app/getfood/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setFoodDetails(res.data);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong while fetching food details.");
      });
  }, [token, id]);

  // console.log(foodDetails);
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
  } = foodDetails;

  // foodQuantity;

  const handlePurchaseFood = (e) => {
    e.preventDefault();

    const form = e.target;
    const quantity = parseInt(form.foodquantity.value);
    const totalCost = quantity * foodPrice;

    if (quantity <= 0) {
      return toast.error("Please enter a valid quantity greater than 0");
    }

    if (quantity > foodQuantity) {
      return toast.error("You can not purchase more than available quantity");
    }

    const newvalue = quantity + purchaseFoodCount;
    const availableQuantity = foodQuantity - quantity;

    const purchaseFoodDetails = {
      buyingDate: Date.now(),
      newFoodName,
      foodCategory,
      foodDescription,
      foodOrigin,
      foodQuantity: availableQuantity,
      foodPrice,
      foodImageLink,
      purchaseFoodCount: newvalue,
      purchaseFoodQuantity: quantity,
      totalCost,
      email,
      name,
    };

    axios
      .post(
        "https://assaignment-11-server-iota.vercel.app/purchasefood",
        purchaseFoodDetails
      )
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success("Food Purchased Successfully");
          navigate(`/myorder/${email}`);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to purchase food. Please try again.");
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
              Available Food Quantity
            </label>
            <input
              type="number"
              className={`${inputBoxClass} cursor-not-allowed`}
              placeholder="Enter Quantity Of Food"
              value={foodQuantity}
              required
              readOnly
            />
          </div>

          <div className={inputClass}>
            <label className="mb-2 font-semibold text-white">
              Want To Purchase Food Quantity
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
            readOnly
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

        <div className="text-center">
          {foodQuantity == 0 ? (
            <p className=""> Item is not available.</p>
          ) : (
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Purchase Now
            </button>
          )}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FoodPurchasePage;
