import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { toast, ToastContainer } from "react-toastify";

// {
//   "_id": "682cff11156f34bbf4c889de",
//   "groupName": "bacckend Development",
//   "groupdescription": "write the code behind frontend code",
//   "meetingLocation": "chittagond",
//   "groupCategory": "Writing",
//   "maxMembers": "12",

//   "name": "Arpon dey",
//   "startDate": "23-oct-2021",
//   "email": "arpandey21524847@gmail.com"
// }

const GroupDetails = () => {
  const {
    groupName,
    groupdescription,
    meetingLocation,
    groupCategory,
    imageURL,
    maxMembers,
    startDate,
    email,
    name,
  } = useLoaderData();
  console.log(imageURL)

  const handleJoinButton = () => {
    toast("Group Joined Sucessfull")
  }
  return (
    <div className="min-h-screen   text-slate-100 font-sans p-8 ">
      <div className="max-w-3xl mx-auto  border border-gray-600	bg-slate-800/60 backdrop-blur-lg rounded-2xl	 shadow-xl p-6 space-y-6">
        <img
          src={imageURL}
          alt=""
          className="w-full h-64 object-cover rounded-xl border border-indigo-600 shadow-md"
        />

        <h1 className="text-3xl font-bold tracking-wide text-center  border-b border-gray-600 p-2 w-md mx-auto  capitalize">
          {groupName}
        </h1>

        <div className=" rounded-2xl  w-md mx-auto">
          <p className="text-base text-center opacity-90 capitalize text-gray-300">
            {groupdescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
          <div>
            <span className="block text-indigo-400 font-semibold">
              Meeting Location
            </span>
            {meetingLocation}
          </div>
          <div>
            <span className="block text-indigo-400 font-semibold">
              Category
            </span>
            {groupCategory}
          </div>
          <div>
            <span className="block text-indigo-400 font-semibold">
              Max Members
            </span>
            {maxMembers}
          </div>
          <div>
            <span className="block text-indigo-400 font-semibold">
              Start Date
            </span>
            {startDate}
          </div>
          <div>
            <span className="block text-indigo-400 font-semibold">
              Contact Email
            </span>
            {email}
          </div>
          <div>
            <span className="block text-indigo-400 font-semibold">
              Group Leader
            </span>
            {name}
          </div>
        </div>

        <div className="pt-4 text-center">
          <button onClick={()=>handleJoinButton()} className="inline-block rounded-full border border-indigo-600 px-6 py-2 md:px-12 md:py-3  font-medium text-white hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden  md:text-lg ">
            Join Group
          </button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default GroupDetails;
