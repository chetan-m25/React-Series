import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import axios from "axios";

const Pokemon = () => {
  const [pokei, setPokei] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon/?limit=100";

  useEffect(() => {
    async function fetchpokemon() {
      try {
        const { data } = await axios.get(API);

        const detailedData = data.results.map(async (currentPokemon) => {
          const res = await fetch(currentPokemon.url);
          const data = await res.json();
          return data;
        });

        const detailedRes = await Promise.all(detailedData);
        setPokei(detailedRes);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }
    fetchpokemon();
  }, []);

  const searchData = pokei.filter((currPoke) =>
    currPoke.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fefbd8]">
        <h1 className="text-lg font-semibold text-[#5F4A8B]">
          Loading Pokemon's...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fefbd8]">
        <h1 className="text-red-500">{error.message}</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#fefbd8] px-6 py-10">
      <header className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold text-[#5F4A8B]">
          LET'S CATCH SOME POKEMON
        </h1>
        <p className="text-gray-700 mt-3">Search and explore Pokemon details</p>
      </header>

      <div className="max-w-md mx-auto mb-15">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-[#5F4A8B]/40 
                     bg-white focus:outline-none focus:ring-2 
                     focus:ring-[#5F4A8B]"
        />
      </div>

      <ul className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {searchData.map((currentPokemon) => (
          <PokeCard key={currentPokemon.id} pokeData={currentPokemon} />
        ))}
      </ul>
    </section>
  );
};

export default Pokemon;
