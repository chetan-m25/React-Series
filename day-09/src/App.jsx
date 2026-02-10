import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Contact from "./pages/Contact";

const App = () => {
  return (
    // Wrapper div for full height and background color
    <div className="min-h-screen bg-[#5F4A8B]">
      
      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>
        {/* Multiple Route in Routes for Home, About, Contact */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Products route with nested routes */}
        <Route path="/products" element={<Products />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
