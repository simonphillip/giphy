import Image from "next/image";
import { getTrendingGifs } from "@/api/gifs";
import { IGif } from "@/types/gif";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isError, error, isLoading } = useQuery({
    queryFn: () => getTrendingGifs(),
    queryKey: ["gifs"],
  });

  if (isError) {
    //create proper component for error at a later time
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-6xl">Trending</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="md:columns-2 lg:columns-3 xl:columns-4">
          {data?.map((gif: IGif) => (
            <Image
              key={gif.id}
              src={gif.images.fixed_height.webp}
              width={gif.images.fixed_height.width}
              height={gif.images.fixed_height.height}
              className="max-w-full w-full max-h-max rounded-lg cursor-pointer align-middle inline-block object-cover my-2"
              alt={gif?.alt_text || gif.title}
            />
          ))}
        </section>
      )}
    </div>
  );
}
