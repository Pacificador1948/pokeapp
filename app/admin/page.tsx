import { supabase } from "@/lib/supabaseClient";

export default async function AdminPage() {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return <p>Debes iniciar sesión</p>;

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") return <p>No tienes permisos</p>;

  return <p>Bienvenido administrador</p>;
}
