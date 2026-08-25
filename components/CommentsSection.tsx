"use client";
import { useState, useEffect } from "react";
import { addComment, getComments } from "@/app/actions";

export default function CommentsSection({ pokemonId }: { pokemonId: number }) {
  const [comments, setComments] = useState<any[]>([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getComments(pokemonId);
      setComments(data || []);
    };
    fetchComments();
  }, [pokemonId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addComment(pokemonId, content);
    setContent("");
    const data = await getComments(pokemonId);
    setComments(data || []);
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-2">Comentarios</h3>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Escribe un comentario..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </form>
      <ul className="space-y-2">
        {comments.map((c) => (
          <li key={c.id} className="border p-2 rounded bg-gray-50">
            <p className="text-sm text-gray-700">{c.content}</p>
            <span className="text-xs text-gray-500">
              {c.profiles?.username || "Usuario"} — {new Date(c.created_at).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
