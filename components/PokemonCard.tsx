import React from "react";

interface PokemonCardProps {
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
  };
  types: { type: { name: string } }[];
}

export default function PokemonCard({ name, sprites, types }: PokemonCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold capitalize mb-4">{name}</h2>
      <div className="flex gap-6 justify-center">
        <img src={sprites.front_default} alt={`${name} front`} />
        <img src={sprites.back_default} alt={`${name} back`} />
        <img src={sprites.front_shiny} alt={`${name} shiny`} />
      </div>
      <h3 className="text-lg mt-6 font-semibold">Tipos</h3>
      <ul className="flex gap-4 mt-2">
        {types.map((t) => (
          <li
            key={t.type.name}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded"
          >
            {t.type.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
