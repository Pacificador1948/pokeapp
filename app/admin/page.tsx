import { createClient } from "@/lib/supabaseServer";

export default async function AdminPage() {
  const supabase = await createClient();
  
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError || !user) {
    return <p className="text-yellow-600">Debes iniciar sesión para acceder.</p>;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    return <p className="text-red-600">No tienes permisos de administrador.</p>;
  }

  return <p className="text-green-600 font-bold">Bienvenido administrador</p>;
}