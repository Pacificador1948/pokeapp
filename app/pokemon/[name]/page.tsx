import { getPokemonDetail } from "@/lib/pokeapi";
import PokemonCard from "@/components/PokemonCard";

export default async function PokemonPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const pokemon = await getPokemonDetail(name);

  return (
    <div className="p-6">
      <PokemonCard
        name={pokemon.name}
        sprites={pokemon.sprites}
        types={pokemon.types} id={""}      />
    </div>
  );
}
