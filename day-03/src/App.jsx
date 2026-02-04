import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-800">
      <div className="w-75 bg-white rounded-3xl shadow-xl p-5">
        {/* Image */}
        <div className="rounded-3xl overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/23/ab/35/23ab352be0edd95581d73e3d988a8ee4.jpg"
            alt="profile"
            className="w-full h-65 object-cover"
          />
        </div>

        {/* Name */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <h2 className="text-xl font-semibold text-gray-800">
            Sadie Sink
          </h2>
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-500 text-center mt-2">
          American actress compelling performances in television, film, and theater
        </p>

        {/* Bottom Row */}
        <div className="flex items-center justify-center mt-6">
          <button className="bg-black text-white px-25 py-2.5 cursor-pointer
            rounded-full text-sm hover:bg-red-600 transition ease-in ">
            Follow +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
