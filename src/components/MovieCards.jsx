import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidLike } from "react-icons/bi";

export default function MovieCards({ data, error, pageIndex, genre }) {
  return (
    <div className="container mx-auto p-5 md:px-20 2xl:px-2">
      {error ? (
        <p className="text-red-500 text-center text-xl">
          Something went wrong: {error.message}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 2xl:gap-12 gap-6">
          {data.results.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center bg-white dark:bg-slate-600 rounded-lg shadow-md overflow-hidden"
            >
              <Link href={`/movie/${item.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
                  width={500}
                  height={280}
                  alt={item.title || item.name}
                  className="group-hover:opacity-75 transition-opacity duration-300"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-1 ">
                    {item.title || item.name}
                  </h3>
                  <p className="text-sm line-clamp-2">{item.overview}</p>
                  <div className="flex items-center gap-5">
                    <p className="text-sm">{item.release_date || item.first_air_date}</p>
                    <p className="text-sm flex items-center gap-1">
                      <BiSolidLike />{item.vote_count}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8 flex justify-center gap-4">
        {pageIndex > 1 && (
          <Link
            href={`/?genre=${genre}&page=${pageIndex - 1}`}
            className="bg-red-300 text-white p-2 px-4 rounded-md hover:bg-red-400 transition-colors duration-200"
          >
            Prev
          </Link>
        )}
        {data.results.length > 0 && (
          <Link
            href={`/?genre=${genre}&page=${pageIndex + 1}`}
            className="bg-red-300 text-white p-2 px-4 rounded-md hover:bg-red-400 transition-colors duration-200"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
