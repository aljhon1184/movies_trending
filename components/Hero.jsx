import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Hero({ hero, setMovieCount }) {
  const base_url = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();

  return (
    <div className=" top-0 w-screen shadow-md h-[40vh] md:h-[74vh]">
      <div className=" flex items-center justify-center h-full   w-full">
        <div
          className="flex flex-col w-[500px] z-[500]  lg:mr-[300px] group cursor-pointer"
          onClick={() => router.push(`/movie/${hero?.id}`)}
        >
          <span className="text-4xl md:text-6xl group-hover:text-red-900 font-bold text-white break-words">
            {hero?.original_title ||
              hero?.title ||
              hero?.name ||
              hero?.original_name}
          </span>
          <p className="text-white mt-3 font-semibold">{hero?.overview}</p>
        </div>
      </div>
      <div className="  absolute mt-44 top-0 md:mt-0 w-full h-[40vh] md:h-[74vh] flex items-center justify-center">
        <div className='h-full w-[80%] flex items-center justify-between z-50'>
          <svg
            onClick={() =>
              setMovieCount(prev => (prev !== 0 ? prev - 1 : prev))
            }
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 cursor-pointer hover:text-gray-600"
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
            onClick={() =>
              setMovieCount(prev => (prev === 19 ? prev : prev + 1))
            }
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 cursor-pointer hover:text-gray-600 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <div className="w-full h-full absolute top-0">
        {hero?.backdrop_path || hero?.poster_path ? (
          <div className="absolute top-0 w-screen -z-10 h-[41vh] md:h-[74vh]">
            <Image
              className="w-full h-full"
              priority
              src={
                `${base_url}${hero?.backdrop_path || hero?.poster_path}` ||
                `${base_url}${hero?.poster_path}`
              }
              layout="fill"
              objectFit="cover"
              alt="Hero Movie"
            />
            {/* <div className="absolute h-[70px] bottom-0 w-screen bg-black opacity-[0.70] shadow-2xl   z-10"></div> */}
          </div>
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-500">
            <span className="text-sm ">Cannot load the image..</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
