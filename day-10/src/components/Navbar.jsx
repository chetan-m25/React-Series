import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-[#FF7846]">
        {/* Logo or Tittle with link to Home*/}
        <NavLink to={"/"} className="cursor-default">
          FakeStore
        </NavLink>
      </h1>

      <div className="space-x-6 text-xl font-medium">
        {/* Home link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#FF7846]" : "hover:text-[#FF7846]"
          }
        >
          Home
        </NavLink>

        {/* Products link */}
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-[#FF7846]" : "hover:text-[#FF7846]"
          }
        >
          Products
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
