import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleOrderData from "./SingleOrderData";
import axios from "axios";
import { AuthContext } from "./Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const MyOrder = () => {
  const { email } = useParams();
  const [orders, setOrders] = useState([]);
  const { user } = use(AuthContext);
  const token = user?.accessToken;

  // https://assaignment-11-server-iota.vercel.app/
  useEffect(() => {
    axios
      .get(
        `https://assaignment-11-server-iota.vercel.app/purchasefood/${email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        toast.error("Somthing Wrong");
      });
  }, [token, email]);

  const handleDeleteOrder = (id) => {
    const url = `https://assaignment-11-server-iota.vercel.app/deleteOrder/${id}`;
    axios
      .delete(url)
      .then((response) => {
        toast.success("Order Deleted Sucessfully");
        const remainningOrders = orders.filter((order) => order._id !== id);
        setOrders(remainningOrders);
      })
      .catch((error) => {
        // console.log("Error deleting item:", error);
        toast.error("Error deleting item");
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center my-8">
        <div className="py-5 px-10 rounded-xl shadow-xl border border-amber-500/30">
          <span className="text-2xl md:text-4xl font-extrabold text-yellow-400 tracking-wide p-4 rounded-2xl">
            My Order
          </span>
        </div>
      </div>

      {orders.length == 0 ? (
        <div className="flex flex-col items-center-safe justify-center h-screen w-full  text-gray-400 text-xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 mb-2 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 13h6m-3-3v6m-9 5h18M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          <h1 className="font-bold"> No Order Here</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {orders.map((singleOrderData) => (
            <SingleOrderData
              key={singleOrderData._id}
              singleOrderData={singleOrderData}
              handleDeleteOrder={handleDeleteOrder}
            ></SingleOrderData>
          ))}
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default MyOrder;
