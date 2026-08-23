import { getPokemonDetail } from "@/lib/pokeapi";

export default async function PokemonPage({ params }: { params: { name: string } }) {
  const pokemon = await getPokemonDetail(params.name);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
      <div className="flex gap-6 mt-4">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <img src={pokemon.sprites.back_default} alt={pokemon.name} />
        <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
      </div>
      <h2 className="text-xl mt-6">Tipos</h2>
      <ul>
        {pokemon.types.map((t: any) => (
          <li key={t.type.name}>{t.type.name}</li>
        ))}
      </ul>
    </div>
  );
}
