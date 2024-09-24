import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default async function  MoviePage({params}) {
    const movieId = params.id
     
      const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
      const data = await res.json();
      

    return (
      <div className="w-full grid justify-center items-center grid-cols-1 sm:grid-cols-2 gap-9  md:mt-18 p-5 md:px-20 py-5">
        <Image src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`} 
        width={500}
        height={300}
        className=" max-h-96 "
        alt={`Poster of ${data.original_title}`}
        ></Image>

        <div>
        <h1 className="text-2xl text-orange-500 font-bold">{data.original_title}</h1>
        <p>{data.overview}</p>
        
        <div className="mt-4">
        <p>{`Release-Date : ${data.release_date}`}</p>
        <p>{`Country : ${data.origin_country}`}</p>
        <p>{`Language : ${data.original_language}`}</p>
        <p className=" inline-flex gap-2 items-center ">{`Rating : ${data.vote_average}`}<FaStar color="orange"/></p>
        <p>{`Duration : ${data.runtime} min`}</p>
        </div>

        </div>
      </div>  
    )
  }
  