import React from "react";

const PokeCard = ({ pokeData }) => {
  return (
    <li
      className="bg-[#fcfbebf1] rounded-xl border border-[#5F4A8B]/20 
                   p-6 flex flex-col items-center text-center"
    >
      <img
        src={pokeData.sprites.other.dream_world.front_default}
        alt={pokeData.name}
        className="h-28 mb-4"
      />

      <h1 className="text-xl font-bold capitalize text-[#5F4A8B]">
        {pokeData.name}
      </h1>

      <p className="text-sm text-gray-600 mt-1">
        {pokeData.types.map((t) => t.type.name).join(", ")}
      </p>

      <div className="w-full mt-5 grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Height</span>
          <span className="font-semibold text-[#5F4A8B]">
            {pokeData.height}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Weight</span>
          <span className="font-semibold text-[#5F4A8B]">
            {pokeData.weight}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">HP</span>
          <span className="font-semibold text-[#5F4A8B]">
            {pokeData.stats[0].base_stat}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Speed</span>
          <span className="font-semibold text-[#5F4A8B]">
            {pokeData.stats[5].base_stat}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Attack</span>
          <span className="font-semibold text-[#5F4A8B]">
            {pokeData.stats[1].base_stat}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Defense</span>
          <span className="font-semibold text-[#5F4A8B]">
            {pokeData.stats[2].base_stat}
          </span>
        </div>

        <div className="col-span-2 flex justify-between pt-2 border-t border-gray-200 mt-2">
          <span className="text-gray-500">Ability</span>
          <span className="font-semibold text-[#5F4A8B] capitalize">
            {pokeData.abilities
              .map((a) => a.ability.name)
              .slice(0, 1)
              .join(", ")}
          </span>
        </div>
      </div>
    </li>
  );
};

export default PokeCard;
