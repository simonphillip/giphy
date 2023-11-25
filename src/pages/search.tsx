import { getSearchedGifs } from "@/api/gifs";
import { IGif } from "@/types/gif";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import GifImageCard from "@/components/gifImageCard";

export default function Search() {
  const router = useRouter();
  const { query } = router;

  const { data, isError, error, isLoading, refetch } = useQuery({
    queryFn: () => getSearchedGifs(query.q as string),
    queryKey: ["search-gifs"],
  });

  if (isError) {
    //create proper component for error at a later time
    return <p>Error: {error.message}</p>;
  }

  useEffect(() => {
    refetch();
  }, [query.q, refetch]);

  if (!query.q) {
    return (
      <div className="max-w-6xl mx-auto">
        <p>Please enter a search to return results</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 className="text-5xl mb-3 font-semibold text-custom-wenge">
            Search Results
          </h1>
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
