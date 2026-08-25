import { getPokemons, getPokemonDetail } from "@/lib/pokeapi";
import ExplorarClient from "@/components/ExplorarClient";

export default async function ExplorarPage() {
  // Obtener lista de nombres
  const data = await getPokemons(12);

  // Obtener detalles de cada Pokémon
  const pokemons = await Promise.all(
    data.results.map((p: any) => getPokemonDetail(p.name))
  );

  // Pasar los datos al Client Component
  return <ExplorarClient pokemons={pokemons} />;
}

