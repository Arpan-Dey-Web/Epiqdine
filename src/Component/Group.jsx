import React from "react";

const Group = ({ group }) => {
  // {
  //     "_id": "682cadbd4de5cb8e83b5b23f",
  //     "groupName": "confession group",
  //     "groupdescription": "for learn something different",
  //     "meetingLocation": "chittagong",
  //     "groupCategory": "Reading",
  //     "maxMembers": "5",
  //     "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s",
  //     "name": "Arpon dey",
  //     "email": "arpanthelearner@gmail.com"
  // }
  const {
    groupName,
    groupdescription,
    meetingLocation,
    groupCategory,
    maxMembers,
    imageURL,
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
        </div>
        <p className="dark:text-gray-800">{groupdescription}</p>
      </div>
    </div>
  );
};

export default Group;
