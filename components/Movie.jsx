import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Movie({ result, selectedMovies, getMovieIndex, setMovieCount }) {
  const base_url = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();

  const handleSelect = () => {
    selectedMovies(result);
    setMovieCount(getMovieIndex);
  };

  return (
    <div className="relative group">
      <div className=" bg-[#1B2430]">
        {result.backdrop_path || result.poster_path ? (
          <>
            <Image
              className="cursor-pointer group-hover:scale-110  to-gray-500"
              priority
              layout="responsive"
              alt="movie image"
              src={
                `${base_url}${result.backdrop_path || result.poster_path}` ||
                `${base_url}${result.poster_path}`
              }
              height={1080}
              width={1920}
              onClick={handleSelect}
            />
          </>
        ) : (
          <div className="h-[29vh] w-full flex items-center justify-center bg-gray-500">
            <span className="text-sm">Cannot load the image..</span>
          </div>
        )}
      </div>
      <div className=" bg-slate-400 flex flex-col item-center gap-1 ">
        <span
          onClick={() => router.push(`/movie/${result.id}`)}
          className=" mx-1 group-hover:text-2xl group-hover:font-bold text-white group-hover:text-red-900 bg-gradient-to-r from-black group-hover:from-blue-400  absolute bottom-8 text-lg font-semibold cursor-pointer"
        >
          {result.original_title || result.name}
        </span>
        <div className="w-full text-white absolute top-2 flex items-center justify-between bg-gradient-to-r from-black group-hover:from-blue-400">
          <span className="text-sm mx-2 group-hover:text-red-900">
            Popularity: {result.popularity}
          </span>
          <span className="text-sm text-white mx-2 group-hover:text-red-900">
            Average: {result.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Movie;
