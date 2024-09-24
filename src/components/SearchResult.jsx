import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SearchResult({ data }) { 
  const { results } = data; // Destructure results from data

  if (!results || results.length === 0) {
    return (
      <p className="text-red-500 text-center text-xl">
        No results found
      </p>
    );
  }

  return (
    <div className="container mx-auto p-5 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {results.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-white dark:bg-slate-600 rounded-lg shadow-md overflow-hidden"
          >
            <Link href={`/movie/${item.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
                width={500}
                height={280}
                alt={item.title || item.original_title}
                className="sm:max-h-28 group-hover:opacity-75 transition-opacity duration-300"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                  {item.original_title}
                </h3>
                <p className="text-sm line-clamp-2">
                  {item.overview}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-blue-400 text-white p-2 px-4 rounded-md hover:bg-amber-400 transition-colors duration-200">
          Prev
        </button>
        <button className="bg-blue-400 text-white p-2 px-4 rounded-md hover:bg-amber-400 transition-colors duration-200">
          Next
        </button>
      </div>
    </div>
  );
}
