"use client";

import { useState } from "react";
import { addPokemon } from "@/app/actions";

export default function PokemonForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addPokemon(name, type);
      alert("Pokémon agregado!");
      setName("");
      setType("");
    } catch (error: any) {
      alert("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-gray-50 rounded shadow">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Tipo"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
        Guardar
      </button>
    </form>
  );
}
