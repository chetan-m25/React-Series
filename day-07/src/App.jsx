import React, { useState } from "react";
import Card from "./components/Card"

const App = () => {
  // Form input states
  const [userName, setUserName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userDesc, setUserDesc] = useState("");

  // Load users from localStorage
  const localData = JSON.parse(localStorage.getItem("all-users")) || [];
  const [allUsers, setAllUsers] = useState(localData);

  // Handle form submit
  function submitHandler(e) {
    e.preventDefault();

    const oldData = [...allUsers];
    oldData.push({ userName, imageURL, userRole, userDesc });

    setAllUsers(oldData);
    localStorage.setItem("all-users", JSON.stringify(oldData));

    // Clear inputs
    setUserName("");
    setImageURL("");
    setUserRole("");
    setUserDesc("");
  }

  // Handle user delete
  function deleteHandler(idx) {
    const usersCopy = [...allUsers];
    const confirmMsg = confirm("Are you sure you want to delete this user ?");

    if (confirmMsg) {
      usersCopy.splice(idx, 1);
    } else {
      alert("User not deleted");
    }

    setAllUsers(usersCopy);
    localStorage.setItem("all-users", JSON.stringify(usersCopy));
  }

  return (
    <div className="min-h-screen bg-[#2872A1] px-6 py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-center mb-10 text-[#CBDDE9]">
        USER PROFILES
      </h1>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto bg-[#CBDDE9] rounded-3xl shadow-2xl p-10">
        <form
          onSubmit={submitHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <input
            className="px-4 py-3 font-semibold rounded-xl border-2 border-transparent bg-[#2872A1] text-[#CBDDE9]
                       focus:border-[#2872A1] focus:outline-none
                       transition-all duration-200 focus:scale-[1.02]"
            type="text"
            placeholder="Enter Name"
            maxLength={25}
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          {/* Image URL */}
          <input
            className="px-4 py-3 font-semibold rounded-xl border-2 border-transparent bg-[#2872A1] text-[#CBDDE9]
                       focus:border-[#2872A1] focus:outline-none
                       transition-all duration-200 focus:scale-[1.02]"
            type="text"
            placeholder="Image URL"
            required
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />

          {/* Role */}
          <input
            className="px-4 py-3 font-semibold rounded-xl border-2 border-transparent bg-[#2872A1] text-[#CBDDE9]
                       focus:border-[#2872A1] focus:outline-none
                       transition-all duration-200 focus:scale-[1.02]"
            type="text"
            placeholder="Enter Role"
            maxLength={30}
            required
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          />

          {/* Description */}
          <input
            className="px-4 py-3 font-semibold rounded-xl border-2 border-transparent bg-[#2872A1] text-[#CBDDE9]
                       focus:border-[#2872A1] focus:outline-none
                       transition-all duration-200 focus:scale-[1.02]"
            type="text"
            placeholder="Enter Description"
            maxLength={60}
            required
            value={userDesc}
            onChange={(e) => setUserDesc(e.target.value)}
          />

          {/* Create User Button */}
          <button
            className="md:col-span-2 bg-[#2872A1] text-[#CBDDE9] py-3 rounded-xl font-bold
                       transition-all duration-300 hover:bg-green-600 hover:scale-105 active:scale-95"
          >
            CREATE USER
          </button>
        </form>
      </div>

      {/* User Cards */}
      <div className="mt-14 flex flex-wrap justify-center gap-8">
        {allUsers.map((elem, idx) =>{
          return <Card key={idx} idx={idx} elem={elem} deleteHandler={deleteHandler} />
        })}
      </div>
    </div>
  );
};

export default App;
