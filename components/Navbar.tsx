"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6">
      <Link href="/" className="hover:text-yellow-300">Inicio</Link>
      <Link href="/registro" className="hover:text-yellow-300">Registro</Link>
      <Link href="/login" className="hover:text-yellow-300">Login</Link>
      <Link href="/explorar" className="hover:text-yellow-300">Explorar</Link>
      <Link href="/admin" className="hover:text-yellow-300">Admin</Link>
    </nav>
  );
}
