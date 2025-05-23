import React from "react";
import { Link } from "react-router";

const Group = ({ group }) => {
  const {
    groupName,
 
    startDate,
    meetingLocation,
    groupCategory,
    maxMembers,
    imageURL,
    _id,
  } = group;
  return (
    <div>
      <div className="max-w-md p-6 rounded-md border border-gray-500 shadow-md ">
        <img
          src={imageURL}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2 text-white w-12/12 mx-auto">
          <span className="block text-lg font-medium tracking-widest uppercase  text-center mb-8  border-b-2 border-gray-700">
            {groupName}
          </span>

          <div className="flex justify-between">
            <div>
              <h2 className="text- font-semibold text-gray-400 tracking-wide">
                Date: {startDate}
              </h2>
              <p className="text-gray-400 text-md mt-2">
                Place: {meetingLocation}
              </p>
            </div>
            <div className=" badge  badge-primary  ">
              {groupCategory}
            </div>
          </div>
        </div>

        <div className="text-center pt-3">
          <Link
            to={`/group/${_id}`}
            className="btn text-white btn-outline btn-info "
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Group;
