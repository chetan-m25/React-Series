import React from "react";

const Card = ({ elem, idx, deleteHandler }) => {
  return (
    <div
      className="bg-[#CBDDE9] text-[#2872A1] rounded-3xl p-6 shadow-xl
                flex flex-col items-center text-center w-full sm:w-75 overflow-hidden"
    >
      {/* Profile Image */}
      <img
        className="h-24 w-24 rounded-full object-cover border-4 border-[#2872A1]
                  transition-transform duration-300 hover:scale-105"
        src={elem.imageURL}
        alt=""
      />

      {/* User Name */}
      <h2 className="text-xl font-extrabold mt-4 wrap-break-words max-w-full">
        {elem.userName}
      </h2>

      {/* User Role */}
      <p className="text-sm font-bold mt-1 break-all  max-w-full">
        {elem.userRole}
      </p>

      {/* User Description */}
      <p className="text-sm mt-3 font-semibold leading-relaxed opacity-80 break-all max-w-full">
        {elem.userDesc}
      </p>

      {/* Remove Button */}
      <button
        onClick={() => deleteHandler(idx)}
        className="mt-5 px-5 py-2 rounded-lg bg-[#2872A1] text-white text-sm
                   transition-all duration-300 hover:bg-red-600 hover:scale-105 active:scale-95"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
