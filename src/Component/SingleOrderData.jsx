import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import moment from "moment";
const SingleOrderData = ({ singleOrderData, handleDeleteOrder }) => {
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
    purchaseFoodQuantity,
    email,
    name,
    buyingDate,
  } = singleOrderData;
  const buyingdate = buyingDate; // Example MongoDB timestamp
  const formattedDate = moment(buyingdate).format("MMMM Do YYYY");

  return (
    <div className="max-w-md p-6 rounded-md border border-gray-300 shadow-md ">
      <img
        src={foodImageLink}
        alt={newFoodName}
        className="object-cover object-center w-full rounded-md h-72"
      />
      <div className="mt-6 mb-2 w-full mx-auto text-orange-400">
        <span className="block text-lg font-semibold tracking-widest uppercase text-center mb-6 border-b-2 border-gray-300">
          {newFoodName}
        </span>

        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-gray-400 tracking-wide">
              Date: {formattedDate ? formattedDate : "No Date available"}
            </h2>
            <p className="text-gray-400 text-md mt-1 capitalize">
              foodOrigin: {foodOrigin}
            </p>
            <p>Quantity: {purchaseFoodQuantity}</p>
            <p className=" text-sm">Category: {foodCategory}</p>
          </div>
        </div>
      </div>

      <div className="text-center pt-4">
        <button
          onClick={() => {
            Swal.fire({
              title: "Are you sure?",
              text: "You Want To Delete This?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                handleDeleteOrder(_id);
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Order has been deleted.",
                  icon: "success",
                });
              }
            });
          }}
          className="btn btn-outline btn-warning"
        >
          Delete Order
        </button>
      </div>
    </div>
  );
};

export default SingleOrderData;
