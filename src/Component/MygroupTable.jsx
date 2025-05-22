import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MygroupTable = ({ group, handleGroupDelete }) => {
  const {
    _id,
    groupName,
    groupdescription,
    meetingLocation,
    groupCategory,
    imageURL,
    maxMembers,
    startDate,
    email,
    name,
  } = group;

  return (
    <tr>
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
        <div className="text-sm ">{meetingLocation}</div>
      </td>
      <td>
        {name} <span className="font-semibold text-sm">(You)</span>
        <br />
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{groupCategory}</span>
      </td>

      <td>{startDate}</td>
      <td>{maxMembers}</td>
      <td className="flex gap-2">
        {/* details button */}
        <Link to={`/group/${_id}`} className="btn">
          Details
        </Link>
        {/* update button */}
        <Link to={`/updateGroup/${_id}`} className="btn">
          Update
        </Link>
        {/* delete button */}
        <button
          onClick={() => handleGroupDelete(_id)}
          className="btn bg-red-500"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MygroupTable;
