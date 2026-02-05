import React from "react";
import Card from "./components/Card";

const App = () => {
  const cardsData = [
    {
      name: "Sadie Sink",
      role: "Hi, I am Sadie Sink. I am an actress known for playing Max in Stranger Things. I am passionate about emotional role.",
      profileImage:
        "https://i.pinimg.com/1200x/36/f0/c7/36f0c7644e838efb8ab135fb590ba6df.jpg",
      bgImage:
        "https://i.pinimg.com/1200x/4a/1a/de/4a1adec6e5189cd215d65213888aee38.jpg",
      likes: "1.6M",
      posts: 131,
      views: "8.3M",
      color: "bg-red-100",
    },
    {
      name: "Mily boby brown",
      role: "Hi, I am Millie Bobby Brown. I am an actress and producer, best known as Eleven from Stranger Things.",
      profileImage:
        "https://i.pinimg.com/1200x/9d/ef/90/9def9054c8b3aaf206e70b4955a58117.jpg",
      bgImage:
        "https://i.pinimg.com/1200x/9f/36/2c/9f362cdaacfb4668e3fb42de937e3976.jpg",
      likes: "4.8M",
      posts: 716,
      views: "11.2M",
      color: "bg-violet-100",
    },
    {
      name: "Maisie Williams",
      role: "Hi, I am Maisie Williams. I am a British actress best known for playing Arya Stark in Game of Thrones.",
      profileImage:
        "https://i.pinimg.com/1200x/60/b7/17/60b7170293bc639aaeba517aab9d2715.jpg",
      bgImage:
        "https://i.pinimg.com/1200x/7a/45/e7/7a45e79ed0e3eb62ae623e0917a7f6b9.jpg",
      likes: "852K",
      posts: 118,
      views: "5.6M",
      color: "bg-slate-100",
    },
    {
      name: "Sophie Turner",
      role: "Hi, I am Sophie Turner. I am a British actress, best known for playing Sansa Stark in Game of Thrones.",
      profileImage:
        "https://i.pinimg.com/736x/d6/48/f8/d648f868cffd9abee1dd514e5052193d.jpg",
      bgImage:
        "https://i.pinimg.com/736x/8b/69/80/8b69800c066e8bb70b943fee4971f1b0.jpg",
      likes: "592K",
      posts: 526,
      views: "4.8M",
      color: "bg-blue-100",
    },
  ];

  return (
    <div
      className="w-screen min-h-screen bg-zinc-900 p-10 grid gap-10
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center"
    >
      {/* Destructuring Cards Data */}
      {cardsData.map((card,idx) => (
        <Card kay={idx} {...card} />
      ))}
    </div>
  );
};

export default App;
