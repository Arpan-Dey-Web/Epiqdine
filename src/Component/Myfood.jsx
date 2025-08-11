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
        // setMyFoods(res.data);
      })
      .catch((error) => {
        toast.error("Somthing Wrong");
      });
  }, [token, email]);

  return (
    <div>
      <div className="flex items-center justify-center my-8">
        <div className="py-5 px-10 rounded-xl shadow-xl border border-amber-500/30">
          <span className="text-2xl md:text-4xl font-extrabold text-yellow-400 tracking-wide p-4 rounded-2xl">
            My Food
          </span>
        </div>
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
        {myFoods.length === 0 && (
          <div className="h-screen w-full  flex flex-col items-center justify-center ">
            <h1 className="font-bold text-5xl">No Foods Added</h1>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Myfood;
