"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function UserForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Registrar usuario en Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("Error: " + error.message);
      return;
    }

    // 2. Insertar perfil en la tabla profiles
    const userId = data.user?.id;
    if (userId) {
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([{ id: userId, username }]);

      if (profileError) {
        alert("Error creando perfil: " + profileError.message);
      } else {
        alert("Usuario registrado con éxito!");
        setEmail("");
        setPassword("");
        setUsername("");
      }
    }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-4 p-4 bg-gray-50 rounded shadow">
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Registrarse
      </button>
    </form>
  );
}
