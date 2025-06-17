import React, { use, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "./Context/AuthContext";
import axios from "axios";

const UpdateFood = () => {
  const { id } = useParams();
  const [foodData, setFoodData] = useState([]);
  const { user } = use(AuthContext);

  const token = user?.accessToken;
  const {
    foodCategory,
    foodDescription,
    foodImageLink,
    foodOrigin,
    foodQuantity,
    newFoodName,
    userEmail,
    userName,
    foodPrice,
    _id,
  } = foodData;

  // useEffect(() => {

  useEffect(() => {
    axios
      .get(`https://assaignment-11-server-iota.vercel.app/getfood/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setFoodData(res.data);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong while fetching food details.");
      });
  }, [token]);

  const navigate = useNavigate();

  const handleUpdateFood = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to Update this Group Details?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `Don't Update`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Updated!", "success");
        const form = e.target;
        const foodCategory = form.foodcategory.value;
        const foodDescription = form.fooddescription.value;
        const foodImageLink = form.foodimageurl.value;
        const foodOrigin = form.countryname.value;
        const foodQuantity = form.foodquantity.value;
        const newFoodName = form.foodname.value;
        const foodPrice = form.foodprice.value;

        const updatedFoodDetails = {
          foodCategory,
          foodDescription,
          foodImageLink,
          foodOrigin,
          foodQuantity,
          newFoodName,
          foodPrice,
          userEmail,
          userName,
        };
        // console.log(
        //   foodCategory,
        //   foodDescription,
        //   foodImageLink,
        //   foodOrigin,
        //   foodQuantity,
        //   newFoodName,
        //   foodPrice
        // );

        if (foodQuantity <= 0) {
          return toast.error("Please Enter A valid Food Amount");
        }

        if (foodPrice <= 0) {
          return toast.error("Enter A valid Food Price");
        }

        fetch(
          `https://assaignment-11-server-iota.vercel.app/update/myfood/${_id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(updatedFoodDetails),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.modifiedCount > 0) {
              toast("Food Details Updated!");
            }
            navigate(`/myfood/${userEmail}`);
          });
      } else if (result.isDenied) {
        Swal.fire("Not Updated");
      }
    });
  };
  const inputClass = "flex flex-col  mb-2";
  const inputBoxClass =
    "w-full p-3 rounded-lg border border-slate-300 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 transition capitalize cursor-pointer";

  return (
    <div>
      <div className="min-h-screen  flex flex-col justify-center items-center px-4 py-12">
        <div className="bg-[#101828] shadow-lg rounded-2xl w-full max-w-3xl p-8 border border-gray-700">
          <h1 className="text-4xl font-extrabold text-white mb-10 text-center">
            Update Food
          </h1>
          <form onSubmit={handleUpdateFood} className="space-y-6">
            <div>
              <div className={inputClass}>
                <label className="mb-2 font-semibold text-white">
                  Food Name
                </label>
                <input
                  type="text"
                  className={inputBoxClass}
                  name="foodname"
                  defaultValue={newFoodName}
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
                  defaultValue={foodCategory}
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
                  defaultValue={foodQuantity}
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
                  defaultValue={foodPrice}
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
                  defaultValue={foodDescription}
                  placeholder="Food Description"
                  required
                />
              </div>
            </div>
            <div className={inputClass}>
              <label className="mb-2 font-semibold text-white">
                Food Origin
              </label>
              <input
                type="text"
                className={inputBoxClass}
                defaultValue={foodOrigin}
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
                defaultValue={foodImageLink}
                placeholder="Food Image Link"
                name="foodimageurl"
                required
              />
            </div>

            <div className={inputClass}>
              <label className="mb-2 font-semibold text-white">Your Name</label>
              <input
                type="text"
                className={`${inputBoxClass} cursor-not-allowed bg-gray-800 `}
                placeholder="Your Name"
                name="username"
                value={userName}
              />
            </div>

            <div className={inputClass}>
              <label className="mb-2 font-semibold text-white">
                Your Email
              </label>
              <input
                type="email"
                className={`${inputBoxClass} cursor-not-allowed bg-gray-800 `}
                placeholder="Your Email"
                name="useremail"
                value={userEmail}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Update Item
            </button>

            <div className="text-center">
              <Link to={`/myfood/${userEmail}`}>
                <button className="btn ">Back To Myfood Page</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateFood;
