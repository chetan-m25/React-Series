import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="h-125 flex flex-col items-center justify-center text-center px-6">

      {/* Main heading */}
      <h1 className="text-5xl font-extrabold mb-10 text-[#FEFACD]">
        DISCOVER YOUR STYLE
      </h1>

      {/* Sub text */}
      <p className="text-xl font-semibold text-[#FEFACD] max-w-xl">
        click below to explore more products
      </p>
      
      {/* Button navigates to products page */}
      <button
        onClick={() => {
          navigate("/products");
        }}
        className="mt-10 bg-[#FEFACD] text-[#5F4A8B] font-extrabold px-6 py-3 rounded-2xl active:scale-105"
      >
        EXPLORE PRODUCTS
      </button>
    </section>
  );
};

export default Home;
