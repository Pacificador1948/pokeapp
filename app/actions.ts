"use server";

import { supabase } from "@/lib/supabaseClient";

export async function addPokemon(name: string, type: string) {
  const { data, error } = await supabase
    .from("pokemons")
    .insert([{ name, type }]);

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
