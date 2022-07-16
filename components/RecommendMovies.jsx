import React from 'react';
import Carousel from 'react-elastic-carousel';
import { useRouter } from 'next/router';
import Image from 'next/image';

function RecommendMovies({ recommends }) {
  const base_url = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className={`w-full shadow-2xl mt-10`}>
      <span className="text-4xl font-bold">Recommend Movies</span>
      <Carousel breakPoints={breakPoints}>
        {recommends.map(movie => (
          <div
            key={movie.id}
            className="relative group h-full mt-5 cursor-pointer"
            onClick={() => router.push(`/movie/${movie.id}`)}
          >
            {movie.poster_path || movie.backdrop_path ? (
              <Image
                src={
                  `${base_url}${movie.backdrop_path || movie.poster_path}` ||
                  `${base_url}${movie.poster_path}`
                }
                width="400px"
                height="400px"
                alt=""
                objectFit="cover"
              />
            ) : (
              <Image
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
                }
                width="400px"
                height="400px"
              />
            )}
            <span className="text-lg md:flex left-0 absolute font-bold group-hover:text-red-900 top-2 md:text-2xl group-hover:text-3xl text-white ">
              {movie.original_title || movie.title}
            </span>
            <div className="absolute bottom-3 flex justify-between  w-full">
              <small className="md:mx-5 mx-1 font-bold group-hover:text-red-900 group-hover:text-lg">
                Popularity: {movie.popularity}
              </small>
              <small className="md:mx-4 mx-1 font-bold group-hover:text-red-900 group-hover:text-lg">
                Average: {movie.vote_average}
              </small>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default RecommendMovies;
