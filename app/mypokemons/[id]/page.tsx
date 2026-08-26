import { getPokemonDetail } from "@/lib/pokeapi";
import CommentsSection from "@/components/CommentsSection";

export default async function PokemonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pokemon = await getPokemonDetail(id);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 capitalize">{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      {/* Sección de comentarios */}
      <CommentsSection pokemonId={pokemon.id} />
    </div>
  );
}
