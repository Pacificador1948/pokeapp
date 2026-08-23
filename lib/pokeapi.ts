// lib/pokeapi.ts
export async function getPokemons(limit: number = 20) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  if (!res.ok) throw new Error("Error al obtener Pokémon");
  return res.json();
}

export async function getPokemonDetail(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error("Error al obtener detalle del Pokémon");
  return res.json();
}
