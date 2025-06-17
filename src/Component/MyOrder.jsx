import React, { use, useEffect, useState } from "react";
import {  useParams } from "react-router";
import SingleOrderData from "./SingleOrderData";
import axios from "axios";
import { AuthContext } from "./Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const MyOrder = () => {
  const { email } = useParams();
  const [orders, setOrders] = useState([]);
  const { user } = use(AuthContext);
  const token = user?.accessToken;

  useEffect(() => {
    axios
      .get(
        `https://assaignment-11-server-iota.vercel.app/purchasefood/${email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
      <div className="text-center mt-5 mb-10  border-b-2 w-2xs mx-auto border-gray-500">
        <h1 className="text-4xl  mx-auto">My Orders</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {orders.map((singleOrderData) => (
          <SingleOrderData
            key={singleOrderData._id}
            singleOrderData={singleOrderData}
            handleDeleteOrder={handleDeleteOrder}
          ></SingleOrderData>
        ))}

      </div>
      <ToastContainer/>
    </div>
  );
};

export default MyOrder;
