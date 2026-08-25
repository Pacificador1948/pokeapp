"use client";
import { useState } from "react";
import { updatePokemon } from "@/app/actions";

export default function EditPokemonPage({ params }: { params: { id: string } }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updatePokemon(params.id, name, type);
      setMessage("✅ Pokémon actualizado!");
    } catch (error: any) {
      setMessage("❌ Error: " + error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Editar Pokémon</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nuevo nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Nuevo tipo"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Guardar cambios
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
