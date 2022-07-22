import React, { useEffect } from 'react';
import Movie from './Movie';
import requestMovie from '../util/requestMovie';

function Content({ content, selectedMovies, getMovieIndex, setMovieCount, genre, name, search }) {

  
  useEffect(() =>{
    setMovieCount(0);
  },[search,genre])
  
  return (
    <div className="mx-3 mb-10">
      <div className={content?.length === 0 ? `mt-20  z-20` : 'mt-10 z-20'}>
        {name || search ? (
          <h1 className="font-bold text-3xl md:text-5xl">{name || 'Search Result...'}</h1>
        ) : (
          <h1 className="font-bold text-3xl md:text-5xl">
            {requestMovie[genre]?.title || 'Trending'}
          </h1>
        )}
      </div>
      {content?.length ? (
        <div className="mt-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4">
          {content?.map(result => (
            <Movie
              key={result.id}
              result={result}
              getMovieIndex={getMovieIndex++}
              selectedMovies={selectedMovies}
              setMovieCount={setMovieCount}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-[70vh] flex items-center justify-center">
          <span className=' md:text-4xl text-gray-400'>No matches found on {search}..!</span>
        </div>
      )}
    </div>
  );
}

export default Content;
