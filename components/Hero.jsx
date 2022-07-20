import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Hero({ hero, setMovieCount }) {
  const base_url = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();

  return (
    <div className="relative bg-red-900 top-0 w-full h-[70vh]">
      <div className=" flex items-center justify-center h-full   w-full">
        <div
          className="flex flex-col w-[500px] z-[400] lg:mr-[300px] group cursor-pointer"
          onClick={() => router.push(`/movie/${hero?.id}`)}
        >
          <span className="text-4xl md:text-6xl group-hover:text-red-900 font-bold text-white break-words">
            {hero?.original_title || hero?.title || hero?.name || hero?.original_name}
          </span>
          <p className='text-white mt-3'>{hero?.overview}</p>
        </div>
      </div>
      <div className="absolute bottom-2 md:top-0 md:bottom-0 left-0 right-0 m-auto flex justify-between mx-20 md:items-center z-[300]">
        <svg
          onClick={() => setMovieCount(prev => (prev !== 0 ? prev - 1 : prev))}
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 cursor-pointer hover:text-gray-600 z-[300]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <svg
          onClick={() => setMovieCount(prev => (prev === 19 ? prev : prev + 1))}
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 cursor-pointer hover:text-gray-600 z-[300] "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      {hero?.backdrop_path || hero?.poster_path ? (
          <Image
            className="z-10 w-full h-full bg-gradient-to-bl from-black to-blue-900"
            priority
            src={
              `${base_url}${hero?.backdrop_path || hero?.poster_path}` ||
              `${base_url}${hero?.poster_path}`
            }
            layout='fill'
            alt='Hero Movie'
            objectFit='cover'
          />
      ) : (
        <div className="h-full w-full flex items-center justify-center bg-gray-500">
          <span className="text-sm ">Cannot load the image..</span>
        </div>
      )}
    </div>
  );
}

export default Hero;
