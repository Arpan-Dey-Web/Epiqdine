import React, { use } from "react";
import { Link } from "react-router";
import { ThemeContext } from "./Context/ThemeContext";

const MyOrderedfood = ({ myfood, index }) => {
  const {theme} = use(ThemeContext)
  const {
    _id,
    foodDescription,
    foodQuantity,
    foodOrigin,
    foodImageLink,
    userName,
    userEmail,
    newFoodName,
    foodCategory,
    foodPrice,
  } = myfood;

  return (
    <tr>
      {myfood ? (
        <>
          <td>{index + 1}</td>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img src={foodImageLink} alt={newFoodName} />
                </div>
              </div>
              <div>
                <div className="font-bold capitalize">{newFoodName}</div>
              </div>
            </div>
          </td>
          <td>
            <div className="text-sm opacity-50">{foodCategory}</div>
          </td>
          <td className="capitalize">{foodOrigin}</td>
          <td>{foodPrice ? foodPrice : 0} </td>
          <th>
            <Link to={`/updatefood/${_id}`}>
              <button className={`flex items-center gap-2 border   font-bold py-2 px-4 rounded-lg hover:bg-yellow-700 hover:text-white active:scale-95 transition-all mb-10 group ${
              theme == "light"
                ? "text-yellow-400 border-yellow-400 "
                : "text-indigo-400 border-indigo-400"
            }`}>
                Update Food
              </button>
            </Link>
          </th>
        </>
      ) : (
        " "
      )}
    </tr>
  );
};

export default MyOrderedfood;
