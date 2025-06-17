import React, { useState } from "react";
import { useLoaderData } from "react-router";
import MygroupTable from "./MygroupTable";
import Group from "./Food";
import Swal from "sweetalert2";

const MyGroup = () => {
  const initialData = useLoaderData();
  const [myGroup, setMyGroup] = useState(initialData);
  const handleGroupDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Group has been deleted.",
          icon: "success",
        });

        fetch(
          `https://assaignment-10-server-side.vercel.app/deleteGroup${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingGroup = myGroup.filter(
                (table) => table._id !== id
              );
              setMyGroup(remainingGroup);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white bg-slate-500">
              <th>No</th>
              <th>Group Name</th>
              <th>Group Location</th>
              <th>Author</th>
              <th>Category</th>
              <th>Starting Date</th>
              <th>Max Members</th>
              <th></th>
            </tr>
          </thead>
          {/* table row */}
          <tbody>
            {myGroup.map((group, index) => (
              <MygroupTable
                index={index}
                key={index}
                group={group}
                handleGroupDelete={handleGroupDelete}
              ></MygroupTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroup;
