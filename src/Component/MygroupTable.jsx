import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MygroupTable = ({ group, handleGroupDelete, index }) => {
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
    <tr className="bg-slate-700 text-gray-400 border-b-2">
      <td>{index + 1}</td>
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
      <td className="capitalize">
        {name} <span className="font-semibold text-sm">(You)</span>
        <br />
      </td>
      <td>
        <span className="badge bg-slate-500 border-none text-gray-200 w-36">
          {groupCategory}
        </span>
      </td>

      <td>{startDate}</td>
      <td>{maxMembers}</td>
      <td className="flex gap-2">
        {/* details button */}
        <Link
          to={`/group/${_id}`}
          className="btn text-white btn-outline btn-info"
        >
         View
        </Link>
        {/* update button */}
        <Link
          to={`/updateGroup/${_id}`}
          className="btn text-white btn-outline btn-accent"
        >
          Update
        </Link>
        {/* delete button */}
        <button
          onClick={() => handleGroupDelete(_id)}
          className="btn btn-outline btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MygroupTable;
