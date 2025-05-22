import React, { use } from "react";

import { toast, ToastContainer } from "react-toastify";

import { AuthContext } from "./Context/AuthContext";
const CreateGroup = () => {
  const { user } = use(AuthContext);
  const { email, displayName } = user;

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const groupName = form.groupName.value;
    const groupCategory = form.groupCategory.value;
    const groupdescription = form.groupDescription.value;
    const startDate = form.startdate.value;
    const meetingLocation = form.meetingLocation.value;
    const maxMembers = form.maxmembers.value;
    const imageURL = form.imageURL.value;
    const name = form.name.value;
    const email = form.email.value;
    const createGroupData = {
      groupName,
      groupdescription,
      meetingLocation,
      groupCategory,
      maxMembers,
      imageURL,
      name,
      startDate,
      email,
    };
    fetch("http://localhost:3000/creategroups", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createGroupData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertId) {
          toast("Group Created Sucessfully");
          form.reset();
        }
      });
  };

  return (
    <div className="w-full mx-auto text-center">
      <h1 className="text-5xl font-bold py-10">Create Group</h1>
      <div className="card bg-base-100 w-full mx-auto max-w-2xl shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleCreateUser} className="fieldset ">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <div>
                <label className="label py-2">Group Name</label>
                <input
                  type="text"
                  className="input"
                  name="groupName"
                  placeholder="Group Name "
                  required
                />
                <label className="label py-2">Hobby Category</label>
                <input
                  type="text"
                  name="groupCategory"
                  className="input"
                  placeholder="Hobby Category"
                  list="browsers"
                  required
                />
                <datalist id="browsers">
                  <option value="Photography "></option>
                  <option value="Video Gaming"></option>
                  <option value="Drawing & Painting"></option>
                  <option value="Running"></option>
                  <option value="Cooking"></option>
                  <option value="Reading"></option>
                  <option value="Writing"></option>
                </datalist>
                <label className="label py-2">Description</label>
                <input
                  type="text"
                  name="groupDescription"
                  className="input"
                  placeholder="Group Description"
                  required
                />
                <label className="label py-2">Meeting Location</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Meeting Location"
                  name="meetingLocation"
                  required
                />
                <label className="label py-2">Max Members</label>
                <input
                  type="number"
                  className="input"
                  placeholder="Max Members"
                  name="maxmembers"
                  required
                />
              </div>

              <div>
                <label className="label py-2">
                  Start Date (deadline equivalent)
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="Starting Date"
                  name="startdate"
                  required
                />
                <label className="label py-2">Image URL</label>
                <input
                  type="text"
                  className="input"
                  placeholder="ImageURL"
                  name="imageURL"
                  required
                />
                <label className="label py-2">Your Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Your Name"
                  name="name"
                  value={displayName}
                  readOnly
                />
                <label className="label py-2">Your Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  readOnly
                />
              </div>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Create Group
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
