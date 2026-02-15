import { useEffect, useState } from "react";
import { getData } from "../api/FakeStoreApi";
import { ProductDataContext } from "./ProductDataContext";

const ProductContext = (props) => {
  const [products, setProducts] = useState([]);

  // Fetch products when component loads
  useEffect(() => {
    async function setData() {
      try {
        setProducts(await getData());
      } catch (err) {
        console.log("Error fetching products:", err);
      }
    }
    setData();
  }, []);

  return (
    <div>
      {/* Provide products data to entire app */}
      <ProductDataContext.Provider value={products}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  );
};

export default ProductContext;
