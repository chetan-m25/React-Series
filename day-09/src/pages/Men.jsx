const Men = () => {
    
  // Static men products data
  const menProducts = [
    {
      id: 1,
      name: "T-Shirt",
      price: 499,
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 2,
      name: "Jeans",
      price: 999,
      img: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    },
    {
      id: 3,
      name: "Jacket",
      price: 1999,
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      {/* Loop through products and create cards */}
      {menProducts.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow hover:shadow-2xl transition overflow-hidden"
        >
          <img
            src={item.img}
            alt={item.name}
            className="h-56 w-full object-cover"
          />
          <div className="p-5 text-center">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-slate-600 mt-1">₹{item.price}</p>
            <button className="mt-4 bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-700">
              View Product
            </button>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Men;
