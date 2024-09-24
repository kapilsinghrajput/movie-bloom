
import React from "react";
import SearchResult from "src/components/SearchResult";

const Loading = () => <div>Loading results...</div>;

export default async function Search({ params }) {
  const searchTerm = params.searchtream;

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return (
      <div>
        {data.results.length === 0 ? (
          <h1>No results found</h1>
        ) : (
          <div>
            <Loading />
            <SearchResult data={data} />
          </div>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }
}
