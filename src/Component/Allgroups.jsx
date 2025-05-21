import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Table from "./Table";

const Allgroups = () => {
  const allgroupdata = useLoaderData();
  const [tableData, settableData] = useState(allgroupdata);
//   const handleGroupDelete = (id) => {
//     console.log("hello", id);
//     fetch(`http://localhost:3000/deleteGroup${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.deletedCount) {
//           const remainingGroup = tableData.filter((table) => table._id !== id);
//           settableData(remainingGroup);
//         }
//         console.log(data);
//         alert("group deleted");
//       });
//   };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Group Name</th>
            <th>Author</th>
            <th>Starting Date</th>
            <th>Max Members</th>
            <th>Group Details</th>
          </tr>
        </thead>
        {/* table row  */}
        <tbody>
          {tableData.map((table, index) => (
            <Table
              key={index}
            //   handleGroupDelete={handleGroupDelete}
              table={table}
            ></Table>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allgroups;
