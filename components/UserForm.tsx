"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function UserForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { data: { user }, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage("❌ Error: " + error.message);
      setLoading(false);
      return;
    }

    if (user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([{ id: user.id, username, role: "user" }]);

      if (profileError) {
        setMessage("Error creando perfil: " + profileError.message);
      } else {
        setMessage("Usuario registrado con éxito!");
        setEmail("");
        setPassword("");
        setUsername("");
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-3 rounded-lg placeholder-gray-500 text-black"
      />
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
        disabled={loading}
        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "Registrando..." : "Registrarse"}
      </button>
      {message && <p className="text-center text-sm">{message}</p>}
    </form>
  );
}
