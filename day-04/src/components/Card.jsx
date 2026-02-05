import React from "react";

const Card = ({
  name,
  role,
  profileImage,
  bgImage,
  likes,
  posts,
  views,
  color,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className={`w-82 ${color} rounded-3xl shadow-xl overflow-hidden`}>
        
        {/* Top Cover */}
        <div
          className="relative h-40 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <button className="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-sm font-medium shadow">
            Follow +
          </button>

          {/* Avatar */}
          <div className="absolute -bottom-10 left-6">
            <img
              src={profileImage}
              alt="profile"
              className="w-20 h-20 rounded-full border-4 border-white bg-white"
            />
          </div>
        </div>

        {/* Content */}
        <div className="pt-14 px-6">
          {/* Name */}
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>

          {/* Bio */}
          <p className="text-sm text-gray-500 mt-1">{role}</p>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 text-center border-t border-gray-300">
          <div className="py-4">
            <p className="font-semibold text-gray-800">{likes}</p>
            <p className="text-xs text-gray-500">Likes</p>
          </div>
          <div className="py-4 border-x border-gray-300">
            <p className="font-semibold text-gray-800">{posts}</p>
            <p className="text-xs text-gray-500">Posts</p>
          </div>
          <div className="py-4">
            <p className="font-semibold text-gray-800">{views}</p>
            <p className="text-xs text-gray-500">Views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
