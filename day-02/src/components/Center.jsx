import React from "react";

const Center = () => {
  return (
    <div className="center-image">
      <img
        src="https://images.pexels.com/photos/26238656/pexels-photo-26238656.jpeg"
        alt=""
      />
      <div className="centered-text">
        <h1>Unleash your inner champion Today</h1>
        <h1>All in one place</h1>
      </div>
      <div className="sub-text">
        <p>
          Join the ultimate tennis experience - where passion meets performance,
          and every swing brings you closer to victory
        </p>
      </div>
      <button className="center-btn">Start your own journey</button>
      <div className="foot">
        <div className="left-foot">
          <p>Train with real professionals Get the real results</p>
        </div>
        <div className="right-foot">
          <a href="">Instagram</a>
          <a href="">Facebook</a>
          <a href="">Tik Tok</a>
        </div>
      </div>
    </div>
  );
};

export default Center;
