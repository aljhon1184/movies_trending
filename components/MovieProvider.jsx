import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function MovieProvider({ provider }) {
  const [country, setCountry] = useState(Object.keys(provider.results)[0]);
  const base_url = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className=" w-full mt-10">
      <div className="flex flex-col mx-3 md:w-[50%]">
        <span className="text-2xl font-semibold">SDK provider</span>
        <div className="flex flex-col  gap-3">
          <div className="flex w-full">
            <span>Select Country</span>
            <select
              onChange={e => setCountry(e.target.value)}
              className="text-gray-700 text-sm w-[100px] ml-5"
            >
              {Object.entries(provider.results).map(([key, provider]) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div>
            {Object.entries(provider.results).map(
              ([key, provider]) =>
                country === key &&
                provider.flatrate && (
                  <div key={key} className="w-fit flex flex-col items-center">
                    {provider.flatrate ? (
                      <a href={provider.link}>
                        <div className='flex flex-col'>
                          <Image
                            src={`${base_url}${provider.flatrate[0].logo_path}`}
                            alt=""
                            width="100px"
                            height="100px"
                          />
                          <span>{provider.flatrate[0].provider_name}</span>
                        </div>
                      </a>
                    ) : (
                      <span>33231</span>
                    )}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieProvider;
