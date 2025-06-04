import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "./Context/AuthContext";
import { useNavigate } from "react-router";

const CreateGroup = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(AuthContext);
  const { email, displayName } = user;

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const groupName = form.groupName.value;
    const groupCategory = form.groupCategory.value;
    const groupdescription = form.groupDescription.value;
    const startDate = form.startdate.value;
    const lastDate = new Date(startDate);
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
      lastDate,
      email,
    };

    fetch("https://assaignment-10-server-side.vercel.app/creategroups", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(createGroupData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertId) {
          toast.success("Group Created Successfully");
          navigate(`${location.state ? location.state : "/"}`);
          form.reset();
        }
      });
  };

  const inputClass = "flex flex-col justify-center items-start mb-4";
  const inputBoxClass =
    "w-full p-3 rounded-md border border-gray-300 bg-[#101828] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition capitalize";

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center px-4 py-12">
      <div className="bg-[#101828] shadow-lg rounded-2xl w-full max-w-3xl p-8 border border-gray-700">
        <h1 className="text-4xl font-extrabold text-white mb-10 text-center">
          Create Group
        </h1>
        <form onSubmit={handleCreateUser} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left Side */}
            <div>
              <div className={inputClass}>
                <label className="mb-2 font-semibold text-white">
                  Group Name
                </label>
                <input
                  type="text"
                  className={inputBoxClass}
                  name="groupName"
                  placeholder="Group Name"
                  required
                />
              </div>

              <div className={inputClass}>
                <label className="mb-2 font-semibold text-white">
                  Hobby Category
                </label>
                <input
                  type="text"
                  name="groupCategory"
                  className={inputBoxClass}
                  placeholder="Hobby Category"
                  list="browsers"
                  required
                />
                <datalist id="browsers">
                  <option value="Photography"></option>
                  <option value="Video Gaming"></option>
                  <option value="Drawing & Painting"></option>
                  <option value="Running"></option>
                  <option value="Cooking"></option>
                  <option value="Reading"></option>
                  <option value="Writing"></option>
                </datalist>
              </div>

              <div className={inputClass}>
                <label className="mb-2 font-semibold text-white">
                  Description
                </label>
                <input
                  type="text"
                  name="groupDescription"
                  className={inputBoxClass}
                  placeholder="Group Description"
                  required
                />
              </div>

              <div className={inputClass}>
                <label className="mb-2 font-semibold text-white">
                  Meeting Location
                </label>
                <input
                  type="text"
                  className={inputBoxClass}
                  placeholder="Meeting Location"
                  name="meetingLocation"
                  required
                />
              </div>

              <div className={inputClass}>
                <label className="mb-2 font-semibold text-white">
                  Max Members
                </label>
                <input
                  type="number"
                  className={inputBoxClass}
                  placeholder="Max Members"
                  name="maxmembers"
                  required
                />
              </div>
            </div>

            {/* Right Side */}
            <div>
              <div className={inputClass}>
                <label className="mb-2 font-semibold text-white">
                  Start Date
                </label>
                <input
                  type="date"
                  className={inputBoxClass}
                  placeholder="Starting Date"
                  name="startdate"
                  required
                />
              </div>

              <div className={inputClass}>
                <label className="mb-2 font-semibold text-white">
                  Image URL
                </label>
                <input
                  type="text"
                  className={inputBoxClass}
                  placeholder="Image URL"
                  name="imageURL"
                  required
                />
              </div>

              <div className={inputClass}>
                <label className="mb-2 font-semibold text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  className={`${inputBoxClass} cursor-not-allowed bg-gray-800`}
                  placeholder="Your Name"
                  name="name"
                  value={displayName}
                  readOnly
                />
              </div>

              <div className={inputClass}>
                <label className="mb-2 font-semibold text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  className={`${inputBoxClass} cursor-not-allowed bg-gray-800`}
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  readOnly
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Create Group
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="!bg-[#101828] !text-white border border-gray-700"
        bodyClassName="!text-white"
      />
    </div>
  );
};

export default CreateGroup;
