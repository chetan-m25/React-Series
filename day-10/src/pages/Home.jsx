// Import useNavigate hook for navigation
import { useNavigate } from "react-router-dom";

const Home = () => {
  // Create navigate function
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center text-center py-32 px-6">

      {/* Main heading */}
      <h1 className="text-6xl font-extrabold text-[#FF7846] mb-6">
        Smart Shopping Starts Here
      </h1>

      {/* Short description */}
      <p className="max-w-xl mb-8 text-xl">
        Explore electronics, fashion, jewelry and more with trusted reviews.
      </p>

      {/* Button to go to products page */}
      <button
        onClick={() => navigate("/products")}
        className="bg-[#FF7846] text-white px-8 py-3 rounded-full font-semibold cursor-pointer hover:scale-105  transform transition-transform duration-300 ease-in-out"
      >
        Browse Products →
      </button>
      
    </div>
  );
};

export default Home;
