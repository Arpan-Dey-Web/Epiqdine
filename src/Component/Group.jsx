import React from "react";
import { Link } from "react-router";

const Group = ({ group }) => {
  console.log(group);
  const {
    groupName,
    groupdescription,
    startDate,
    meetingLocation,
    groupCategory,
    maxMembers,
    imageURL,
    _id
  } = group;
  return (
    <div>
      <div className="max-w-md p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img
          src={imageURL}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            {groupName}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            {groupCategory}
          </h2>
          <h2 className="text-lg font-semibold tracking-wide">
            Date: {startDate}
          </h2>
        </div>
        <p className="dark:text-gray-800">{groupdescription}</p>
        <div className="text-center pt-3">
          <Link to={`/group/${_id}`} className="btn">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Group;
