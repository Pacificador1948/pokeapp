import React from "react";
import { deletePokemon } from "@/app/actions";

interface PokemonCardProps {
  id: string;
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
  };
  types: { type: { name: string } }[];
}

export default function PokemonCard({ id, name, sprites, types }: PokemonCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto border border-gray-200">
      <h2 className="text-3xl font-bold capitalize mb-4 text-gray-800 text-center">
        {name}
      </h2>

      <div className="flex gap-6 justify-center">
        <img
          src={sprites.front_default}
          alt={`${name} front`}
          className="w-24 h-24 object-contain border rounded-lg hover:scale-105 transition-transform"
        />
        <img
          src={sprites.back_default}
          alt={`${name} back`}
          className="w-24 h-24 object-contain border rounded-lg hover:scale-105 transition-transform"
        />
        <img
          src={sprites.front_shiny}
          alt={`${name} shiny`}
          className="w-24 h-24 object-contain border rounded-lg hover:scale-105 transition-transform"
        />
      </div>

      <h3 className="text-lg mt-6 font-semibold text-gray-700">Tipos</h3>
      <ul className="flex gap-3 mt-2 flex-wrap">
        {types.map((t) => (
          <li
            key={t.type.name}
            className="px-3 py-1 bg-blue-100 text-blue-800 font-medium rounded-full shadow-sm"
          >
            {t.type.name}
          </li>
        ))}
      </ul>

      <button
        onClick={() => deletePokemon(id)}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 mt-6 w-full transition-colors font-semibold"
      >
        Eliminar
      </button>
    </div>
  );
}
