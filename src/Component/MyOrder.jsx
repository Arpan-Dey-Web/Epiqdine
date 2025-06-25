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



  useEffect(() => {
    axios
      .get(`http://localhost:3000/purchasefood/${email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
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
      <div className=" flex items-center justify-center  mb-5">
        <div
          className="py-5 px-10 rounded-xl 
        bg-gradient-to-r from-[#7F00FF] to-[#E100FF]
        shadow-xl"
        >
          <span className="text-2xl md:text-4xl font-extrabold text-white tracking-wide">
            My Orders
          </span>
        </div>
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
      <ToastContainer />
    </div>
  );
};

export default MyOrder;
