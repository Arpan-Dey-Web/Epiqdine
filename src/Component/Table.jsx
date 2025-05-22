import React from "react";
import { FaTableList } from "react-icons/fa6";
import { Link } from "react-router";
// {
//     "_id": "682d0007156f34bbf4c889e1",
//     "groupName": "python programming",
//     "groupdescription": "python proramming",
//     "meetingLocation": "dhaka",
//     "groupCategory": "Running",
//     "maxMembers": "25",
//     "imageURL": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/AwUCP/9k=",
//     "name": "Arpan",
//     "startDate": "21-5-25",
//     "email": "korim@gmail.com"
// }
const Table = ({ table, index }) => {
  const {
    _id,
    groupName,
    meetingLocation,
    groupCategory,
    maxMembers,
    imageURL,
    name,
    startDate,
  } = table;

  return (
    <tr className="bg-amber-300 text-red-400">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={imageURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{groupName}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="">{meetingLocation}</div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{groupCategory}</span>
      </td>
      <td>{startDate}</td>
      <td>{maxMembers}</td>
      <td>
        <Link to={`/group/${_id}`} className="btn ">
          Details
        </Link>
      </td>
    </tr>
  );
};

export default Table;
