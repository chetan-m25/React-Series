import { useContext } from "react";
import { ProductDataContext } from "../context/ProductDataContext";
import { Link } from "react-router-dom";

const Products = () => {
  // Get all products from context
  const products = useContext(ProductDataContext);

  // Show loading message if products not loaded yet
  if (products.length === 0)
    return <div className="text-center py-20 text-xl">Loading...</div>;

  return (
    <div className="px-10 py-10">
      {/* Products Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {/* Loop through products */}
        {products.map((elem) => (
          // Each product card links to its details page
          <Link
            key={elem.id}
            to={`/products/${elem.id}`}
            className="bg-white rounded-xl p-5 shadow hover:shadow-lg hover:scale-105 transition"
          >
            {/* Product Image */}
            <img
              src={elem.image}
              alt={elem.title}
              className="h-40 mx-auto object-contain mb-4"
            />

            {/* Product Title */}
            <h2 className="text-md font-semibold mb-2 line-clamp-2">
              {elem.title}
            </h2>

            {/* Product Price */}
            <p className="text-[#FF7846] font-bold text-xl">₹ {elem.price}</p>

            {/* Product Rating */}
            <p className="text-sm mt-2">
              ⭐ {elem.rating.rate} ({elem.rating.count})
            </p>
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Products;
