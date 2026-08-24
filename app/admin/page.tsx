"use client";
import { supabase } from "@/lib/supabaseClient";

export default async function AdminPage() {
  // 1. Obtener usuario autenticado
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError) {
    return <p className="text-red-600">❌ Error obteniendo usuario: {userError.message}</p>;
  }

  if (!user) {
    return <p className="text-yellow-600">⚠️ Debes iniciar sesión para acceder a esta página.</p>;
  }

  // 2. Obtener perfil del usuario
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profileError) {
    return <p className="text-red-600">❌ Error cargando perfil: {profileError.message}</p>;
  }

  if (!profile) {
    return <p className="text-yellow-600">⚠️ No se encontró tu perfil en la base de datos.</p>;
  }

  // 3. Validar rol
  if (profile.role !== "admin") {
    return <p className="text-red-600">🚫 No tienes permisos para acceder a esta sección.</p>;
  }

  // 4. Si todo está bien
  return <p className="text-green-600 font-bold">✅ Bienvenido administrador</p>;
}
