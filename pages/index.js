import Head from 'next/head';
import { useEffect, useState } from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import 'styled-components';
import { useRouter } from 'next/router';
import requestMovie from '../util/requestMovie';
import Footer from '../components/Footer';
import Paginate from '../components/Paginate';
export default function Home({ result }) {
  const [movieCount, setMovieCount] = useState(0);
  const getMovieIndex = 0;
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  const { page } = router.query;
  const [hero, setHero] = useState(
    page > 500 ? null : result?.results[movieCount]
  );
  const { genre } = router.query;
  const { search } = router.query;
  const { name } = router.query;

  useEffect(() => {
    if (page > 500) {
      router.push(`/?genre=${genre}&page=${500}`);
    }
  }, [page]);

  useEffect(() => {
    if (result.results?.length) {
      setHero(
        result.results?.length === 0 ? null : result?.results[movieCount]
      );
    }
  }, [movieCount, result.results]);


  const selectedMovies = heroMovie => {
    setHero(heroMovie);
  };
  return (
    <div className="relative">
      <Head>
        <title> {hero?.title || hero?.original_title || hero?.name || 'Movie-App'}</title>
        <meta
          name="description"
          content={`${hero?.overview || 'Free Movie-App, free movies, free movies app, Action, Drama, Comedy, Romance, Adventure, Top Rated, Trending, Crime, Thriller, Science Fiction, War '}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <Navbar setShowSidebar={setShowSidebar} />
      {result.results?.length === 0 ? (
        <></>
      ) : (
        <Hero hero={hero} setMovieCount={setMovieCount} />
      )}
      <Content
        genre={genre}
        name={name}
        search={search}
        content={result.results}
        setMovieCount={setMovieCount}
        getMovieIndex={getMovieIndex}
        selectedMovies={selectedMovies}
      />
      {result.results?.length === 0 ? (
        <></>
      ) : (
        <div className="w-full flex items-center justify-center mb-5">
          <Paginate
            page={result.page}
            totalPages={result.total_pages}
            search={search}
            name={name}
            genre={genre ? genre : Object.entries(requestMovie)[0][0]}
          />
        </div>
      )}
      <Footer />
    </div>
  );
}

export const getServerSideProps = async context => {
  const genre = context.query.genre;
  const search = context.query.search;
  const { page } = context.query;
  const API_KEY = process.env.API_KEY;
  const { name } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      search
        ? `/search/movie?api_key=${API_KEY}&query=${search}&page=${
            page ? page : 1
          }`
        : `${
            name
              ? `/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${
                  page ? page : 1
                }`
              : `${
                  genre
                    ? `${requestMovie[genre]?.url}&page=${page ? page : 1}`
                    : `${requestMovie.fetchTrend.url}&page=${page ? page : 1}`
                }`
          }`
    }`
  ).then(res => res.json());
  return {
    props: {
      result: request,
    },
  };
};
