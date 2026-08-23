import { getPokemons } from "@/lib/pokeapi";

export default async function ExplorarPage() {
  const data = await getPokemons(12);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Explorar Pokémon</h1>
      <ul className="grid grid-cols-2 gap-4">
        {data.results.map((pokemon: any) => (
          <li key={pokemon.name}>
            <a
              href={`/pokemon/${pokemon.name}`}
              className="block p-4 bg-gray-100 rounded hover:bg-gray-200"
            >
              {pokemon.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
