const Women = () => {
    
  // Static women products data
  const womenProducts = [
    {
      id: 1,
      name: "Frock",
      price: 1299,
      img: "https://i.pinimg.com/736x/f7/0a/96/f70a96ef45e22019e75a7c6b27026206.jpg",
    },
    {
      id: 2,
      name: "Top",
      price: 699,
      img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    },
    {
      id: 3,
      name: "Jacket",
      price: 1899,
      img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      {/* Loop through women products */}
      {womenProducts.map((item) => (
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

export default Women;
