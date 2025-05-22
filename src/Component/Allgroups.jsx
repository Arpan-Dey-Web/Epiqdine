import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Table from "./Table";

const Allgroups = () => {
  const allgroupdata = useLoaderData();
  const [tableData, settableData] = useState(allgroupdata);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Group Name</th>
            <th>Group Location</th>
            <th>Category</th>
            <th>Starting Date</th>
            <th>Max Members</th>
            <th></th>
          </tr>
        </thead>
        {/* table row  */}
        <tbody>
          {tableData.map((table, index) => (
            <Table
              key={index}
              index={index}
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
