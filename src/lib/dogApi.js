const rootUrl = "https://nice-dogs.vercel.app/api/dogs";

export async function getAllDogs() {
  const res = await fetch(rootUrl);
  return await res.json();
}
export async function getDogBySlug(slug) {
  const res = await fetch(`${rootUrl}?slug=${slug}`);
  return await res.json();
}
