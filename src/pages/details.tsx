import React from "react";
import { Loader } from "../components/loader";

export default function DetailsPage() {
  const searchParams = new URLSearchParams(location.search);
  const breed = searchParams.get("breed");

  return (
    <div className="space-y-6">
      <header className="flex items-center flex-col gap-4 mt-10 text-center">
        <h1 className="mt-4 text-4xl font-bold [text-shadow:_0_4px_0_#e1e1e1] md:text-7xl capitalize">
          {breed}
        </h1>

        <h2 className="max-w-xl text-lg text-muted-foreground">
          This one is an especially good boi. Look how adorable it is!
        </h2>
      </header>

      <div className="flex justify-center">
        <React.Suspense
          fallback={<Loader className="h-72 flex items-center" />}
        >
          <DogImage breed={breed!} />
        </React.Suspense>
      </div>
    </div>
  );
}

async function getDogImage(breed: string) {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const data = await response.json();
  return data.message;
}

function DogImage({ breed }: { breed: string }) {
  const image = React.use(getDogImage(breed));

  return (
    <img
      src={image}
      alt={`A dog of the ${breed} breed`}
      className="object-cover rounded-md shadow hover:shadow-lg duration-300 max-w-4xl"
    />
  );
}
