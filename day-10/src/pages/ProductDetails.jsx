import { useContext } from "react";
import { ProductDataContext } from "../context/ProductDataContext";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  // Get all products from context
  const products = useContext(ProductDataContext);
  const { productId } = useParams(); // Get productId from URL
  const navigate = useNavigate(); // For navigating back

  // Find selected product by id
  const product = products.find((p) => p.id == productId);

  // Show loading if product not found yet
  if (!product) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="px-10 py-10 flex flex-col md:flex-row gap-12">
      {/* Product Image Section */}
      <div className="flex-1 bg-white p-10 rounded-xl shadow">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 mx-auto object-contain"
        />
      </div>

      {/* Product Info Section */}
      <div className="flex-1 space-y-6">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="text-[#625f5d] text-xl font-semibold cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          ← Back
        </button>

        {/* Product Title */}
        <h1 className="text-3xl font-bold text-[#FF7846]">{product.title}</h1>

        {/* Product Description */}
        <p>{product.description}</p>

        {/* Product Category */}
        <p>
          <strong>Category:</strong> {product.category}
        </p>

        {/* Product Rating */}
        <p>
          <strong>Rating:</strong> ⭐ {product.rating.rate} (
          {product.rating.count} reviews)
        </p>

        {/* Product Price */}
        <p className="text-2xl font-bold text-[#FF7846]">₹ {product.price}</p>

        {/* Add to Cart Button */}
        <button className="bg-[#FF7846] text-white cursor-pointer px-6 py-3 rounded-full hover:opacity-70 active:scale-105 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
