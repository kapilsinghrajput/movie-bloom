import MovieCards from "src/components/MovieCards";
import { Suspense } from "react";

const API_KEY = process.env.API_KEY;

const Loading = () => <div>Loading movies...</div>; 

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  const pageIndex = parseInt(searchParams.page) || 1;

  let data = { results: [] };
  let error = null;

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === "fetchToprated" ? "/movie/top_rated" : "/trending/all/week"
      }?api_key=${API_KEY}&language=en-US&page=${pageIndex}`
    );
    data = await res.json();
  } catch (err) {
    console.error("Failed to fetch data:", err);
    error = err;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <MovieCards data={data} error={error} pageIndex={pageIndex} genre={genre} />
      </div>
    </Suspense>
  );
};

export default Home;
