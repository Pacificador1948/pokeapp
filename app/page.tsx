export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-50">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a PokeApp</h1>
      <a
        href="/explorar"
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Explorar Pokémon
      </a>
    </div>
  );
}
