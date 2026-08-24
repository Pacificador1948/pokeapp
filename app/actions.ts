"use server";

import { supabase } from "@/lib/supabaseClient";

export async function addPokemon(name: string, type: string) {
  const { data, error } = await supabase
    .from("pokemons")
    .insert([{ name, type }]);

  if (error) throw new Error(error.message);
  return data;
}
