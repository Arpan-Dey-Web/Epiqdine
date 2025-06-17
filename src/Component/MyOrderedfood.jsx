import React from "react";
import { Link } from "react-router";

const MyOrderedfood = ({ myfood, index }) => {
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
              <button className="btn btn-success btn-outline">
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
