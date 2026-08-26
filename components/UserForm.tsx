"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function UserForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      // 1. Enviamos el username dentro de los metadatos de Supabase Auth
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username: username, // Se pasa directamente al Trigger de la BD
          },
        },
      });

      if (error) {
        setMessage("❌ " + error.message);
        setIsError(true);
      } else {
        // 2. Si no hay error, el Trigger en Supabase crea el perfil automáticamente
        setMessage("✅ Usuario registrado con éxito!");
        setIsError(false);
        setEmail("");
        setPassword("");
        setUsername("");
      }
    } catch (err: any) {
      setMessage("❌ Error inesperado: " + err.message);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Registro de Usuario
      </h2>

      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="username"
        required
        className="border border-gray-300 p-3 rounded-lg placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        required
        className="border border-gray-300 p-3 rounded-lg placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        required
        className="border border-gray-300 p-3 rounded-lg placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        {loading ? "Registrando..." : "Registrarse"}
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