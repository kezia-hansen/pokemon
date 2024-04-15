import { notFound } from "next/navigation";
import Image from "next/image";

import { getAllDogs, getDogBySlug } from "@/lib/dogApi";

export async function generateStaticParams() {
  const pages = await getAllDogs();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const data = await getDogBySlug(slug);

  if (data.message) return notFound();

  return {
    title: data.name,
    description: `Here is ${data.name}`,
  };
}

export default async function DogPage({ params }) {
  const { slug } = params;
  const url = `https://nice-dogs.vercel.app/api/dogs?slug=${slug}`;
  const res = await fetch(url);

  if (res.status != 200) return notFound();

  const data = await res.json();
  const { name, age, favouriteColor, image } = data;

  console.log(data);

  return (
    <main className="md:flex grid-cols-2  max-w-7xl mx-auto">
      <Image
        src={data.image.url}
        alt="A cute dog"
        width={data.image.width}
        height={data.image.height}
        priority={true} // disables lazy load
        className="w-full md:w-1/2 xl:w-{600px}"
        sizes="(max-width: 768px) 100vw,
         (max-width: 1280px) 50vw,
         600px"
      />
      <div>
        <h1>
          {name} is {age} {age === "1" ? "year" : "years"} old{" "}
        </h1>
        <p>His favourite colour is {favouriteColor} </p>
      </div>
    </main>
  );
}
