import React, { useState } from "react";
import { useLoaderData } from "react-router";
import MygroupTable from "./MygroupTable";
import Group from "./Group";

const MyGroup = () => {
  const initialData = useLoaderData();

  const [myGroup, setMyGroup] = useState(initialData);

  return (
    <div>
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
              <th>Group Details</th>
            </tr>
          </thead>
          <tbody>
            {myGroup.map((group, index) => (
              <MygroupTable key={index} group={group}></MygroupTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroup;
<h1>this is mygroups</h1>;
