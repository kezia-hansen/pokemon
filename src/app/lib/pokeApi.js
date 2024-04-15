const rootUrl = "https://pokeapi.co/api/v2/pokemon";

export async function getAllPokemons() {
  const res = await fetch(rootUrl);
  return await res.json();
}
export async function getPokemonBySlug(slug) {
  const res = await fetch(`${rootUrl}?slug=${slug}`);
  return await res.json();
}
