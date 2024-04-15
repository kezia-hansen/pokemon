export const dynamic = "force-static"; // SSR
import { extractData } from "../helper/extractData";

export const metadata = {
  title: "Frontpage",
  description: "Description",
};

export default async function Home() {
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
  return (
    <main>
      <h1>And so it begins...</h1>
      <img src={pokemon.image} alt="random dog" />
    </main>
  );
}
