import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  const id = 0;
  return (
    <div className="w-full bg-black mt-5  text-white p-4">
      <div className="mx-3 flex items-center justify-center flex-col mb-5">
        <Link href={'https://www.themoviedb.org'}>
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              priority
              src={
                'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
              }
              height="50px"
              width="50px"
            />
            <p className="text-gray-600 font-light text-sm md:text-base">
              Trending Movies uses the TMDB API but is not endorsed or certified
              by TMDB
            </p>
          </div>
        </Link>
        <Link href={'https://www.justwatch.com'}>
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              priority
              src={
                'https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.webp'
              }
              objectFit="contain"
              height="50px"
              width="50px"
            />
            <p className="text-gray-600 font-light text-sm md:text-base">
              Trending Movies gets provider data from JustWatch but is not
              endorsed or certified by JustWatch
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
