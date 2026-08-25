"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return; // 🚫 evita doble envío
    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage("❌ " + error.message);
        setIsError(true);
      } else {
        setMessage("✅ Sesión iniciada!");
        setIsError(false);
        setEmail("");
        setPassword("");
      }
    } catch (err: any) {
      setMessage("❌ Error inesperado: " + err.message);
      setIsError(true);
    } finally {
      setLoading(false); // ✅ siempre se ejecuta
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Iniciar Sesión
      </h2>

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        className="border border-gray-300 p-3 rounded-lg placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        className="border border-gray-300 p-3 rounded-lg placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
      >
        {loading ? "Ingresando..." : "Iniciar sesión"}
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
