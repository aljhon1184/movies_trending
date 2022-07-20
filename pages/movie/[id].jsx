import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Iframe from 'react-iframe';
import Sidebar from '../../components/Sidebar';
import Cast from '../../components/Cast';
import Carousel from 'react-elastic-carousel';
import Reviews from '../../components/Reviews';
import RecommendMovies from '../../components/RecommendMovies';
import Footer from '../../components/Footer';
import MovieProvider from '../../components/MovieProvider';

function MovieDetails(result) {
  const base_url = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();
  const [openTrailer, setOpenTrailer] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [trailer] = useState(
    result.trailer?.results?.find(
      trailer =>
        trailer.name === 'Official Trailer' ||
        trailer.name === 'Official Teaser' ||
        trailer.type === 'Trailer' ||
        trailer.type === 'Teaser'
    )
  );

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div className="relative">
      <Head>
        <title> {result?.result.title || result?.result.original_title || result?.result.name || 'Watch Trending Movies'}</title>
        <meta
          name="description"
          content={`${result?.result.overview}, Trending Movies uses the TMDB API but is not endorsed or certified
              by TMDB, Trending Movies gets provider data from JustWatch but is not
              endorsed or certified by JustWatch`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <Navbar setShowSidebar={setShowSidebar} />
      {result.result.status_message ? (
        <div className="w-full flex flex-col items-center gap-2 justify-center h-[80vh]">
          <h1 className="md:text-4xl text-gray-400">
            Something Went Wrong. Please try again later. :)
          </h1>
          <button
          onClick={() =>router.push('/')}
            className=" font-bold h-fit py-2 px-5 md:right-10 rounded bg-black border-2 border-gray-500 hover:border-red-800"
          >
            Home
          </button>
        </div>
      ) : (
        <div className="h-[100vh]">
          <div className="mx-3 h-fit md:flex md:flex-row mt-5 lg:mt-16 gap-2">
            <div className="relative md:h-[60vh] md:w-full lg:w-4/5 lg:h-fit">
              {result.result.backdrop_path || result.result.poster_path ? (
                <div className="relative">
                  <Image
                    className="cursor-pointer"
                    layout="responsive"
                    priority={result.result.id}
                    src={
                      `${base_url}${
                        result.result.backdrop_path || result.result.poster_path
                      }` || `${base_url}${result.result.poster_path}`
                    }
                    height={1080}
                    width={1920}
                  />
                  <button
                    onClick={() => setOpenTrailer(true)}
                    className="absolute text-xs bottom-2 right-3 p-2 rounded bg-black border-2 border-white hover:border-red-800"
                  >
                    Watch Trailer
                  </button>
                </div>
              ) : (
                <div className="w-full flex items-center justify-center h-[50vh] bg-gray-500">
                  <span className="">No Image Available...</span>
                </div>
              )}
            </div>
            <div className="w-[100%] md:w-80% md:ml-5">
              <span className="text-4xl font-semibold">
                {result.result.original_title}
              </span>
              <p className="text-gray-500 text-lg">{result.result.tagline}</p>
              <div className="flex gap-2  mt-2">
                <span className="font-semibold">Genre: </span>
                <ul className="flex gap-2 items-center max-w-full flex-wrap">
                  {result.result?.genres?.map(genre => (
                    <li
                      onClick={() =>
                        router.push(`/?genre=${genre.id}&name=${genre.name}`)
                      }
                      className="text-xs p-2 bg-gray-700 text-white rounded-full cursor-pointer"
                      key={genre.id}
                    >
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="font-semibold">
                Popularity:{' '}
                <span className="font-normal">{result.result.popularity}</span>
              </span>
              <div className="flex items-center gap-10">
                <p className="font-semibold">
                  Average:{' '}
                  <span className="font-normal">
                    {result.result.vote_average}
                  </span>
                </p>
                <p className="font-semibold">
                  Vote Count:{' '}
                  <span className="font-normal">
                    {result.result.vote_count}
                  </span>
                </p>
              </div>
              <div>
                <span className="text-2xl">Overview</span>
                <p className="text-lg font-light mb-2 break-all text-gray-500">
                  {result.result.overview}
                </p>
              </div>
              <span className="font-semibold">
                Status:{' '}
                <span className="font-normal">{result.result.status}</span>
              </span>
              <p className="font-semibold">
                Release Date:{' '}
                <span className="font-normal">
                  {result.result.release_date}
                </span>
              </p>
            </div>
          </div>
          <MovieProvider provider={result.movie} />
          <div className="w-full ">
            <div className="mx-3 flex flex-col md:flex-row">
              <div className="w-full mt-10 ">
                <div className="p-2 w-full md:w-[600px] lg:w-[900px] shadow-2xl ">
                  <span className="text-2xl font-semibold">Companies</span>
                  <div>
                    {result.result.production_companies.length === 0 ? (
                      <span className="text-gray-500">
                        No companies found!..
                      </span>
                    ) : (
                      <Carousel breakPoints={breakPoints}>
                        {result.result.production_companies?.map(company => (
                          <div key={company.id} className="">
                            {company.logo_path ? (
                              <>
                                <Image
                                  priority
                                  src={`${base_url}${company.logo_path}`}
                                  height="200px"
                                  width="250px"
                                  objectFit="contain"
                                />
                                <p className=" break-words ">{company.name}</p>
                              </>
                            ) : (
                              <Image
                                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`}
                                objectFit="contain"
                                priority
                                width="200px"
                                height="250px"
                              />
                            )}
                          </div>
                        ))}
                      </Carousel>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-10 w-full border-gray-500 p-2 md:w-[20%] border-2">
                <span className="text-2xl font-semibold">Spoken Language</span>
                {result.result.spoken_languages === 0 ? (
                  <span className="text-gray-500">No language found.</span>
                ) : (
                  <ul>
                    {result.result.spoken_languages.map(language => (
                      <li className="text-gray-500" key={language.name}>
                        {language.name}
                      </li>
                    ))}
                  </ul>
                )}
                <span className="text-2xl font-semibold">Countries</span>
                <div className="">
                  {result.result.production_countries.length === 0 ? (
                    <span className="text-gray-500">No countries found.</span>
                  ) : (
                    <ul>
                      {result.result.production_countries.map(countries => (
                        <li className="text-gray-500" key={countries.name}>
                          {countries.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full ">
            <div className="mx-3 flex flex-col md:flex-row gap-2">
              <Cast cast={result.cast.cast} />
              <div className="border-2 border-gray-500 overflow-y-auto max-h-[55vh] mt-10 p-2 w-full md:w-[20%]">
                <span className="text-2xl font-semibold">Reviews</span>
                {result.reviews.results.length === 0 ? (
                  <p className="text-gray-500">No reviews found.</p>
                ) : (
                  <>
                    {result.reviews.results.map(review => (
                      <Reviews key={review.id} reviews={review} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
          {result.recommends.results.length === 0 ? (
            <></>
          ) : (
            <div className="w-full">
              <div className="mx-3">
                <RecommendMovies recommends={result.recommends.results} />
              </div>
            </div>
          )}
          <Footer />
          {openTrailer && (
            <div className="fixed top-0 w-full h-[100vh] bg-black z-[4999]">
              <Iframe
                className="z-50"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1`}
                frameborder="0"
                allow="fullscreen; autoplay; gyroscope; picture-in-picture; encrypted-media"
                allowFullScreen="allowFullScreen"
                styles={{ height: '25px' }}
              ></Iframe>
              <button
                onClick={() => setOpenTrailer(false)}
                className="z-999 absolute font-bold h-fit py-2 px-5 top-20 right-5 md:right-10 rounded bg-black border-2 border-gray-500 hover:border-red-800"
              >
                Closed
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieDetails;

export const getServerSideProps = async ({ params }) => {
  const API_KEY = process.env.API_KEY;
  const [
    requestRes,
    requestTrailerRes,
    requestMovieRes,
    requestCastRes,
    requestReviewRes,
    requestRecommendRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${API_KEY}`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/watch/providers?api_key=${API_KEY}`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${API_KEY}`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=${API_KEY}`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`
    ),
  ]);

  const [
    request,
    requestTrailer,
    requestMovie,
    requestCast,
    requestReview,
    requestRecommend,
  ] = await Promise.all([
    requestRes.json(),
    requestTrailerRes.json(),
    requestMovieRes.json(),
    requestCastRes.json(),
    requestReviewRes.json(),
    requestRecommendRes.json(),
  ]);

  return {
    props: {
      result: request,
      trailer: requestTrailer,
      movie: requestMovie,
      cast: requestCast,
      reviews: requestReview,
      recommends: requestRecommend,
    },
  };
};
