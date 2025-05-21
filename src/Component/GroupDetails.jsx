import React from "react";
import { useLoaderData } from "react-router";

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

  return (
    <div>
      <div className="flex justify-center items-center flex-col mx-auto border p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img
          src={imageURL}
          alt=""
          className="object-cover object-center w-lg rounded-md  dark:bg-gray-500"
        />
        <div className="mt-6 mb-2 text-left">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            <span className="text-black"> Group Name:</span> {groupName}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Group Category: {groupCategory}
          </h2>
          <h2 className="text-xl font-semibold tracking-wide">
            Group Start Date: {startDate}
          </h2>
          <h2 className="text-xl font-semibold tracking-wide">
            Group Author :{name}
          </h2>
          <p className="dark:text-gray-800">Description :{groupdescription}</p>
          <div>
            <button className="btn">Join Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
