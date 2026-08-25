"use client";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function Navbar() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/"; // redirige al inicio
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6">
      <Link href="/" className="hover:text-yellow-300">Inicio</Link>
      <Link href="/registro" className="hover:text-yellow-300">Registro</Link>
      <Link href="/login" className="hover:text-yellow-300">Login</Link>
      <Link href="/explorar" className="hover:text-yellow-300">Explorar</Link>
      <Link href="/admin" className="hover:text-yellow-300">Admin</Link>
      <button onClick={handleLogout} className="ml-auto hover:text-red-400">
        Logout
      </button>
    </nav>
  );
}
