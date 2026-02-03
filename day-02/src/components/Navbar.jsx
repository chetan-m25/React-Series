import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <h2>Horizon Courts</h2>
        </div>
        <div className="nav-right">
          <button>About Us</button>
          <button>Services</button>
          <button>Coaches</button>
          <button>Events</button>
          <button>Contacts</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
