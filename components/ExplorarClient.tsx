"use client";
import { useState } from "react";
import PokemonCard from "@/components/PokemonCard";
import PokemonForm from "@/components/PokemonForm";

export default function ExplorarClient({ pokemons }: { pokemons: any[] }) {
  const [search, setSearch] = useState("");

  //filtro
  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Explorar Pokémon</h1>
      {/* Formulario para agregar un pokemon */}
      <PokemonForm />

      {/* Input de búsqueda */}
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-4 w-full -bg-linear-120"
      />

      {/* Grid de resultados */}
      <div className="grid grid-cols-2 gap-6">
        {filtered.map((pokemon: any) => (
          <PokemonCard
            key={pokemon.name}
            id={pokemon.id} 
            name={pokemon.name}
            sprites={pokemon.sprites}
            types={pokemon.types}
          />
        ))}
      </div>
    </div>
  );
}
