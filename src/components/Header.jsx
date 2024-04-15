import Link from "next/link";

export default async function Header() {
  const url = "https://nice-dogs.vercel.app/api/dogs";
  const res = await fetch(url);

  const dogs = await res.json();

  console.log(dogs);

  return (
    <nav className="bg-black text-white p-2">
      <ul className="md:flex gap-2">
        <li>
          <Link href={"/"} prefetch={false}>
            Home
          </Link>
        </li>
        {dogs.map((dog) => {
          const { name, slug } = dog;
          return (
            <li key={slug}>
              <Link href={`/${slug}`} prefetch={false}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
