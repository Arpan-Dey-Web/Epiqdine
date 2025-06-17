import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "./Context/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";
const AddFood = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(AuthContext);
  const { email, displayName } = user;

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodname.value;
    const newFoodName = foodName.toLowerCase();
    const foodCategory = form.foodcategory.value;
    const foodDescription = form.fooddescription.value;
    const foodQuantity = form.foodquantity.value;
    const foodOrigin = form.countryname.value;
    const foodImageLink = form.foodimageurl.value;
    const userName = form.username.value;
    const userEmail = form.useremail.value;
    const foodPrice = form.foodprice.value;
    const purchaseFoodCount = 0;
    
    if (foodQuantity <= 0) {
      return toast.error("Please Enter A valid Food Amount");
    }

    if (foodPrice <= 0) {
      return toast.error("Enter A valid Food Price");
    }

    const addFoodDataToDatabase = {
      newFoodName,
      foodCategory,
      foodDescription,
      foodQuantity,
      foodOrigin,
      foodImageLink,
      userName,
      userEmail,
      foodPrice,
      purchaseFoodCount,
    };
    axios
      .post("http://localhost:3000/addfood", addFoodDataToDatabase)
      .then((res) => {
        toast.success("Food Item Added Successfully");
        navigate(`${location.state ? location.state : "/"}`);
        // Reset the form after submission
        form.reset();
      })
      .catch((error) => {
        return toast.error("Failed to add food item. Please try again.");
      });
  };

  const inputClass = "flex flex-col justify-center items-start mb-4";
  const inputBoxClass =
    "w-full p-3 rounded-md border border-gray-300 bg-[#101828] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition capitalize";

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center px-4 py-12">
      <div className="bg-[#101828] shadow-lg rounded-2xl w-full max-w-3xl p-8 border border-gray-700">
        <h1 className="text-4xl font-extrabold text-white mb-10 text-center">
          Add Food
        </h1>
        <form onSubmit={handleCreateUser} className="space-y-6">
          <div>
            <div className={inputClass}>
              <label className="mb-2 font-semibold text-white">Food Name</label>
              <input
                type="text"
                className={inputBoxClass}
                name="foodname"
                placeholder="Food Name"
                required
              />
            </div>
            <div className={inputClass}>
              <label className="mb-2 font-semibold text-white">
                Food Catagorie
              </label>
              <input
                className={inputBoxClass}
                list="browsers"
                name="foodcategory"
                id="foodCategory"
                placeholder="Select a Food Category"
              />

              <datalist id="browsers">
                <option value="(Rice & Bharta Specials)"></option>
                <option value="(Fish Dishes)"></option>
                <option value="(Beef & Mutton Specials)"></option>
                <option value="(Snacks & Light Bites)"></option>
                <option value="(Vegetarian Dishes)"></option>
                <option value="(Polao & Biryani)"></option>
                <option value="(Chinese & Continental)"></option>
                <option value="(Sweets & Desserts)"></option>
                <option value="(Beverages & Refreshments)"></option>
                <option value="(Egg special)"></option>
                <option value="(Chef's Specials / Seasonal Specials)"></option>
              </datalist>
            </div>
            <div className={inputClass}>
              <label className="mb-2 font-semibold text-white">
                Food Quantity
              </label>
              <input
                type="number"
                className={inputBoxClass}
                placeholder="Enter Quantity Of Food"
                name="foodquantity"
                required
              />
            </div>
            <div className={inputClass}>
              <label className="mb-2 font-semibold text-white">
                Food Price
              </label>
              <input
                type="number"
                className={inputBoxClass}
                placeholder="Enter Your Food Price"
                name="foodprice"
                required
              />
            </div>
            <div className={inputClass}>
              <label className="mb-2 font-semibold text-white">
                Description
              </label>
              <input
                type="text"
                name="fooddescription"
                className={inputBoxClass}
                placeholder="Food Description"
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
              required
            />
          </div>

          <div className={inputClass}>
            <label className="mb-2 font-semibold text-white">
              Food Image Link
            </label>
            <input
              type="text"
              className={inputBoxClass}
              placeholder="Food Image Link"
              name="foodimageurl"
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
              value={displayName}
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
              value={email}
              readOnly
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Add Item
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="!bg-[#101828] !text-white border border-gray-700"
        bodyClassName="!text-white"
      />
    </div>
  );
};

export default AddFood;
