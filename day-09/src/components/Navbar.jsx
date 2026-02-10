import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  // useNavigate helps navigate using button click
  const navigate = useNavigate();

  return (
    <nav className="bg-[#FEFACD] text-[#5F4A8B] h-25 flex items-center justify-between px-18 shadow-xl">
        
      {/* Logo button navigates to home page */}
      <button
        onClick={() => {
          navigate("/");
        }}
        className="text-4xl font-extrabold tracking-wide text-[#5F4A8B]"
      >
        MYSHOP
      </button>

      {/* Navigation links */}
      <div className="flex gap-8 text-2xl font-extrabold">
        {["/", "/about", "/products", "/contact"].map((path, i) => {
          const names = ["HOME", "ABOUT", "PRODUCTS", "CONTACT"];
          return (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}  // Makes home active only on exact "/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FD802E] border-b-4 border-[#FD802E] pb-1"
                  : "text-[#553893]"
              }
            >
              {names[i]}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
