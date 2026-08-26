"use server";

import { createClient } from "@/lib/supabaseServer";

export async function addPokemon(name: string, type: string) {
  const supabase = await createClient();
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
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("pokemons")
    .update({ name, type })
    .eq("id", id);

  if (error) throw new Error(error.message);
  return data;
}

export async function deletePokemon(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("pokemons").delete().eq("id", id);

  if (error) throw new Error(error.message);
}

export async function addComment(pokemonId: number, content: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("No hay usuario autenticado");

  const { data, error } = await supabase
    .from("comments")
    .insert([{ user_id: user.id, pokemon_id: pokemonId, content }]);

  if (error) throw new Error(error.message);
  return data;
}

export async function getComments(pokemonId: number) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("comments")
    .select("id, content, created_at, profiles(username)")
    .eq("pokemon_id", pokemonId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}
