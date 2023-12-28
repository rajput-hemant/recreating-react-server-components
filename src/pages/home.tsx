import React from "react";

import { Link } from "../lib/router";
import { Loader } from "../components/loader";

export default function HomePage() {
  return (
    <div className="space-y-6 my-4">
      <header className="flex items-center flex-col gap-4 mt-10 text-center">
        <h1 className="mt-4 text-4xl font-bold [text-shadow:_0_4px_0_#e1e1e1] md:text-7xl">
          Welcome to my dog site!
        </h1>

        <h2 className="max-w-xl text-lg text-muted-foreground">
          Here are some of my favorite good bois. They are so good, the goodest.
          I love them. Please click on one to go to its page.
        </h2>
      </header>

      <React.Suspense
        fallback={<Loader className="flex justify-center h-72 items-center" />}
      >
        <BreedsList />
      </React.Suspense>
    </div>
  );
}

async function getBreeds() {
  const resposne = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await resposne.json();
  return Object.keys(data.message);
}

export function BreedsList() {
  const breeds = React.use(getBreeds());

  return (
    <ul className="grid grid-cols-2 gap-4 mt-10 text-center md:grid-cols-4">
      {breeds.map((breed) => (
        <Link
          key={breed}
          href={`/details?breed=${breed}`}
          className="p-4 text-xl font-semibold border rounded-md hover:shadow-md transition-shadow cursor-pointer"
        >
          {breed}
        </Link>
      ))}
    </ul>
  );
}
