import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-5xl mt-8 font-bold mb-12 text-center text-[#FEFACD]">
        OUR COLLECTION
      </h1>
      <p className="text-center mb-6 font-semibold text-[#FEFACD] text-xl">
        SELECT GENDER
      </p>

      {/* Gender navigation */}
      <div className="flex justify-center font-bold gap-12 mb-10 text-xl">
        <NavLink
          to="men"
          className={({ isActive }) =>
            isActive ? "border-b-4 border-[#FEFACD] pb-3" : null
          }
        >
          <button className="bg-[#FEFACD] text-[#5F4A8B] font-extrabold px-4 py-2 rounded-2xl">
            MEN
          </button>
        </NavLink>

        <NavLink
          to="women"
          className={({ isActive }) =>
            isActive ? "border-b-4 border-[#FEFACD] pb-3" : null
          }
        >
          <button className="bg-[#FEFACD] text-[#5F4A8B] font-extrabold px-4 py-2 rounded-2xl">
            WOMEN
          </button>
        </NavLink>
      </div>

      {/* Renders Men or Women component */}
      <Outlet />
    </div>
  );
};

export default Products;
