import React from "react";
import { useLoaderData } from "react-router";
import { toast, ToastContainer } from "react-toastify";

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

  const handleUpdateGroup = (e) => {
    e.preventDefault();
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

    fetch(`http://localhost:3000/groups/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Group Updated Sucesssfull");
      });
  };

  return (
    <div>
      <div className="w-full mx-auto text-center">
        <h1 className="text-5xl font-bold py-10">Update Group</h1>
        <div className="card bg-base-100 w-full mx-auto max-w-2xl shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleUpdateGroup} className="fieldset ">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div>
                  <label className="label py-2">Group Name</label>
                  <input
                    type="text"
                    className="input"
                    name="updateGroupName"
                    defaultValue={groupName}
                    placeholder="Group Name"
                    required
                  />
                  <label className="label py-2">Hobby Category</label>
                  <input
                    type="text"
                    name="updateGroupCategory"
                    defaultValue={groupCategory}
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
                    name="updateGroupDescription"
                    defaultValue={groupdescription}
                    className="input"
                    placeholder="Group Description"
                    required
                  />
                  <label className="label py-2">Meeting Location</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Meeting Location"
                    defaultValue={meetingLocation}
                    name="updateMeetingLocation"
                    required
                  />
                  <label className="label py-2">Max Members</label>
                  <input
                    type="number"
                    className="input"
                    placeholder="Max Members"
                    defaultValue={maxMembers}
                    name="updateMaxmembers"
                    required
                  />
                </div>

                <div>
                  <label className="label py-2">
                    Start Date (deadline equivalent)
                  </label>
                  <input
                    type="date"
                    className="input"
                    placeholder="Starting Date"
                    defaultValue={startDate}
                    name="updateStartdate"
                    required
                  />
                  <label className="label py-2">Image URL</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="ImageURL"
                    defaultValue={imageURL}
                    name="updateImageURL"
                    required
                  />
                  <label className="label py-2">Your Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Your Name"
                    value={name}
                    name="name"
                    readOnly
                  />
                  <label className="label py-2">Your Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Your Email"
                    value={email}
                    name="email"
                    readOnly
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
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
