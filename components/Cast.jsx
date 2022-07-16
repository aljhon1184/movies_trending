import React from 'react';
import Carousel from 'react-elastic-carousel';
import Image from 'next/image';

function Cast({ cast }) {
  const base_url = 'https://image.tmdb.org/t/p/original/';

  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
  ];
  return (
    <div className="w-full ">
      <div className="mt-10 w-full flex flex-col md:w-[600px] lg:w-[900px] shadow-2xl p-2">
        <span className="text-2xl font-semibold">Cast</span>
        {cast.length === 0 ? (
          <span className='text-gray-500'>No cast found.</span>
        ) : (
          <Carousel breakPoints={breakPoints}>
            {cast.map(cast => (
              <div key={cast.id} className="mx-1 flex flex-col">
                {cast.profile_path ? (
                  <Image
                    className="hover:scale-110 cursor-pointer"
                    src={
                      `${base_url}${cast.profile_path}` ||
                      '`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
                    }
                    objectFit="cover"
                    height="250px"
                    width="200px"
                  />
                ) : (
                  <Image
                    className="h-[250px] md:h-auto hover:scale-110 cursor-pointer"
                    src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`}
                    height="250px"
                    width="200px"
                  />
                )}
                <span className="text-lg font-semibold break-all">
                  {cast.name}
                </span>
                <p className="hidden md:flex font-light text-gray-500">
                  {cast.character}
                </p>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default Cast;
