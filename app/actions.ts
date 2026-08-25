"use server";

import { supabase } from "@/lib/supabaseClient";

export async function addPokemon(name: string, type: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("No hay usuario autenticado");

  const { data, error } = await supabase
    .from("pokemons")
    .insert([{ name, type, user_id: user.id }]);

  if (error) throw new Error(error.message);
  return data;
}

export async function updatePokemon(id: string, name: string, type: string) {
  const { data, error } = await supabase
    .from("pokemons")
    .update({ name, type })
    .eq("id", id);

  if (error) throw new Error(error.message);
  return data;
}

export async function deletePokemon(id: string) {
  const { error } = await supabase.from("pokemons").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
