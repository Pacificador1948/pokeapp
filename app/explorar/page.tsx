import { getPokemons, getPokemonDetail } from "@/lib/pokeapi";
import PokemonCard from "@/components/PokemonCard";
import PokemonForm from "@/components/PokemonForm";

export default async function ExplorarPage() {
  // Obtener lista de nombres
  const data = await getPokemons(12);

  // Obtener detalles de cada Pokémon
  const pokemons = await Promise.all(
    data.results.map((p: any) => getPokemonDetail(p.name))
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Explorar Pokémon</h1>
      {/* Formulario para agregar un pokemon */}
      <PokemonForm />
      <div className="grid grid-cols-2 gap-6">
        {pokemons.map((pokemon: any) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            sprites={pokemon.sprites}
            types={pokemon.types}
          />
        ))}
      </div>
    </div>
  );
}
