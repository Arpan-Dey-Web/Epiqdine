import React, { use, useState } from "react";
import { useParams } from "react-router";
import MyOrderedfood from "./MyOrderedfood";
import { useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "./Context/AuthContext";

const Myfood = () => {
  const [myFoods, setMyFoods] = useState([]);
  const { user } = use(AuthContext);

  // firebase Token
  const token = user?.accessToken;

  // accesing email from url(params)
  const { email } = useParams();

  // Fetching data using axios and useEffect hook
  useEffect(() => {
    axios
      .get(
        `https://assaignment-11-server-iota.vercel.app/addfood/all-food/${email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setMyFoods(res.data);
      })
      .catch((error) => {
        toast.error("Somthing Wrong");
      });
  }, []);

  return (
    <div>
      <div className="text-center mt-5 mb-10  border-b-2 w-2xs mx-auto border-gray-500">
        <h1 className="text-4xl  mx-auto">My Foods</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food No</th>
              <th>Food Name</th>
              <th>Food Category</th>
              <th>Food Origin</th>
              <th>Food Price</th>
            </tr>
          </thead>
          <tbody>
            {myFoods.map((myfood, index) => (
              <MyOrderedfood
                key={index}
                index={index}
                myfood={myfood}
              ></MyOrderedfood>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Myfood;
