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
    console.log(startDate);
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
  const inputClass = "flex flex-col  justify-center items-center mb-2";
  const inputBoxClass =
    "w-full p-3 rounded-lg border border-slate-300 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 transition capitalize cursor-pointer";

  return (
    <div className="w-full mx-auto text-center ">
      <h1 className="text-5xl font-bold   py-10 logoName text-white">
        Create Group
      </h1>
      <div className="card  w-full mx-auto  border border-gray-500 max-w-2xl  shadow-2xl">
        <div className="card-body   rounded-2xl">
          <form onSubmit={handleCreateUser} className="fieldset ">
            <div className="grid grid-cols-1 gap-2  lg:grid-cols-2 text-white">
              {/* 1st div */}
              <div>
                <span className={inputClass}>
                  <label className="label py-2 ">Group Name</label>
                  <input
                    type="text"
                    className={inputBoxClass}
                    name="groupName"
                    placeholder="Group Name "
                    required
                  />
                </span>
                <span className={inputClass}>
                  <label className="label py-2">Hobby Category</label>
                  <input
                    type="text"
                    name="groupCategory"
                    className={inputBoxClass}
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
                </span>
                <span className={inputClass}>
                  <label className="label py-2">Description</label>
                  <input
                    type="text"
                    name="groupDescription"
                    className={inputBoxClass}
                    placeholder="Group Description"
                    required
                  />
                </span>
                <span className={inputClass}>
                  <label className="label py-2">Meeting Location</label>
                  <input
                    type="text"
                    className={inputBoxClass}
                    placeholder="Meeting Location"
                    name="meetingLocation"
                    required
                  />
                </span>
                <span className={inputClass}>
                  <label className="label py-2">Max Members</label>
                  <input
                    type="number"
                    className={inputBoxClass}
                    placeholder="Max Members"
                    name="maxmembers"
                    required
                  />
                </span>
              </div>

              {/* 2nd div */}

              <div>
                <span className={inputClass}>
                  <label className="label py-2">Start Date</label>
                  <input
                    type="date"
                    className={inputBoxClass}
                    placeholder="Starting Date"
                    name="startdate"
                    required
                  />
                </span>
                <span className={inputClass}>
                  <label className="label py-2">Image URL</label>
                  <input
                    type="text"
                    className={inputBoxClass}
                    placeholder="ImageURL"
                    name="imageURL"
                    required
                  />
                </span>
                <span className={inputClass}>
                  <label className="label py-2">Your Name</label>
                  <input
                    type="text"
                    className={`${inputBoxClass}  cursor-not-allowed`}
                    placeholder="Your Name"
                    name="name"
                    value={displayName}
                    readOnly
                  />
                </span>
                <span className={inputClass}>
                  <label className="label py-2">Your Email</label>
                  <input
                    type="email"
                    className={`${inputBoxClass} cursor-not-allowed`}
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    readOnly
                  />
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="inline-block rounded-full border border-indigo-600 px-7 py-2  font-medium text-white hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden  md:text-lg"
            >
              Create Group
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
