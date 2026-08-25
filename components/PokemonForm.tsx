"use client";

import { useState } from "react";
import { addPokemon } from "@/app/actions";

export default function PokemonForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      await addPokemon(name, type);
      setMessage("✅ Pokémon agregado con éxito!");
      setIsError(false);
      setName("");
      setType("");
    } catch (error: any) {
      setMessage("❌ Error: " + error.message);
      setIsError(true);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Agregar Pokémon
      </h2>

      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="off"
        className="border border-gray-300 p-3 rounded-lg placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Tipo"
        value={type}
        onChange={(e) => setType(e.target.value)}
        autoComplete="off"
        className="border border-gray-300 p-3 rounded-lg placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
      >
        {loading ? "Guardando..." : "Guardar"}
      </button>

      {message && (
        <p
          className={`text-center text-sm font-medium p-2 rounded ${
            isError
              ? "bg-red-100 text-red-700 border border-red-300"
              : "bg-green-100 text-green-700 border border-green-300"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
