import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const UpdateGroup = () => {
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
  } = useLoaderData();
  const navigate = useNavigate();
  const handleUpdateGroup = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to Update this Group Details?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `Don't Update`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Updated!", "", "success");
        const form = e.target;
        const updated_groupName = form.updateGroupName.value;
        const updated_groupdescription = form.updateGroupDescription.value;
        const updated_meetingLocation = form.updateMeetingLocation.value;
        const updated_groupCategory = form.updateGroupCategory.value;
        const updated_imageURL = form.updateImageURL.value;
        const updated_maxMembers = form.updateMaxmembers.value;
        const updated_startDate = form.updateStartdate.value;

        const updateGroup = {
          groupName: updated_groupName,
          groupdescription: updated_groupdescription,
          meetingLocation: updated_meetingLocation,
          groupCategory: updated_groupCategory,
          imageURL: updated_imageURL,
          maxMembers: updated_maxMembers,
          startDate: updated_startDate,
        };

        fetch(`https://assaignment-10-server-side.vercel.app/groups/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateGroup),
        })
          .then((res) => res.json())
          .then((data) => {
            navigate("/");
            toast("Group Updated!!!");
          });
      } else if (result.isDenied) {
        Swal.fire("Not Updated", "", "info");
      }
    });
  };
  const inputClass = "flex flex-col  justify-center items-center mb-2";
  const inputBoxClass =
    "w-full p-3 rounded-lg border border-slate-300 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 transition capitalize cursor-pointer";

  return (
    <div>
      <div className="w-full mx-auto text-center ">
      
        <div className="card w-full mx-auto border border-gray-500 max-w-2xl shadow-2xl bg-[#101828]">
          <h1 className="text-5xl font-bold py-5 text-white logoName">
            Update Group
          </h1>
          <div className="card-body rounded-2xl">
            <form onSubmit={handleUpdateGroup} className="fieldset">
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 text-white">
                {/* Left Side */}
                <div>
                  <span className={inputClass}>
                    <label className="label py-2">Group Name</label>
                    <input
                      type="text"
                      className={inputBoxClass}
                      name="updateGroupName"
                      defaultValue={groupName}
                      placeholder="Group Name"
                      required
                    />
                  </span>
                  <span className={inputClass}>
                    <label className="label py-2">Hobby Category</label>
                    <input
                      type="text"
                      name="updateGroupCategory"
                      defaultValue={groupCategory}
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
                      name="updateGroupDescription"
                      defaultValue={groupdescription}
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
                      defaultValue={meetingLocation}
                      name="updateMeetingLocation"
                      required
                    />
                  </span>
                  <span className={inputClass}>
                    <label className="label py-2">Max Members</label>
                    <input
                      type="number"
                      className={inputBoxClass}
                      placeholder="Max Members"
                      defaultValue={maxMembers}
                      name="updateMaxmembers"
                      required
                    />
                  </span>
                </div>

                {/* Right Side */}
                <div>
                  <span className={inputClass}>
                    <label className="label py-2">Start Date</label>
                    <input
                      type="date"
                      className={inputBoxClass}
                      placeholder="Starting Date"
                      defaultValue={startDate}
                      name="updateStartdate"
                      required
                    />
                  </span>
                  <span className={inputClass}>
                    <label className="label py-2">Image URL</label>
                    <input
                      type="text"
                      className={inputBoxClass}
                      placeholder="Image URL"
                      defaultValue={imageURL}
                      name="updateImageURL"
                      required
                    />
                  </span>
                  <span className={inputClass}>
                    <label className="label py-2">Your Name</label>
                    <input
                      type="text"
                      className={`${inputBoxClass} cursor-not-allowed`}
                      placeholder="Your Name"
                      value={name}
                      name="name"
                      readOnly
                    />
                  </span>
                  <span className={inputClass}>
                    <label className="label py-2">Your Email</label>
                    <input
                      type="email"
                      className={`${inputBoxClass} cursor-not-allowed`}
                      placeholder="Your Email"
                      value={email}
                      name="email"
                      readOnly
                    />
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="inline-block rounded-full border border-indigo-600 px-7 py-2 font-medium text-white hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden md:text-lg mt-6"
              >
                Update Group
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default UpdateGroup;
