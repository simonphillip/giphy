import { getTrendingGifs } from "@/api/gifs";
import { IGif } from "@/types/gif";
import { useQuery } from "@tanstack/react-query";
import GifImageCard from "@/components/gifImageCard";

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 className="text-5xl mb-3 font-semibold">Trending</h1>
          <section className="md:columns-2 lg:columns-3 xl:columns-4">
            {data?.map((gif: IGif) => (
              <GifImageCard key={gif.id} gif={gif} />
            ))}
          </section>
        </>
      )}
    </div>
  );
}
