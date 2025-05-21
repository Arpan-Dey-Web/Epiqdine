import React, { use } from "react";
// import { toast } from "react-toastify";
// ✅Create Group Page ( /createGroup )
// ✅Create Group Page that can be part of HobbyHub. The form will allow users to create a new hobby group. The form will have:

//         ✅Group Name
//         ✅Hobby Category (dropdown)
//         ✅Hobby Category for example =====>

//                     ✅Photography
//                     ✅Video Gaming
//                     ✅Drawing & Painting
//                     ✅Fishing
//                     ✅Running
//                     ✅Cooking
//                     ✅Reading
//                     ✅Writing (etc)

// ✅Description
// ✅Meeting Location
// ✅Max Members
// ✅Start Date (deadline equivalent)
// ✅Image URL
// ✅User Name (readonly)
// ✅User Email (readonly)
// ✅"Create" Button
// ✅This page will be a private/protected route.
// ✅Once you fill in the form and click the "Create" button, the data will be saved to the database, and a
// success message will be displayed using a toast or sweet alert.
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
        console.log(data);
        if (data.insertId) {
          // toast("Wow so easy !");
          e.target.reset();
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
