"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Sesión iniciada!");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md"
    >
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-3 rounded-lg placeholder-gray-500 text-black"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-3 rounded-lg placeholder-gray-500 text-black"
      />
      <button
        type="submit"
        className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
      >
        Iniciar sesión
      </button>
    </form>
  );
}
