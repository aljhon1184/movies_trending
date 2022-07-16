import React, { useState } from 'react';
import request from '../util/requestMovie';
import { useRouter } from 'next/router';

function Sidebar({ setShowSidebar, showSidebar }) {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleClick = key => {
    router.push({
      pathname: '/',
      query: { genre: key },
    });
    setShowSidebar(false);
  };

  const handleSearch = () => {
    router.push(`/?search=${search}`);
    setSearch('');
    setShowSidebar(false);
  };

  const handleHome = () => {
    router.push('/');
    setShowSidebar(false);
  };


  return (
    <div
      className={`fixed left-0  h-full w-full bg-black top-0 md:w-[350px] z-[9000] ${
        showSidebar ? 'translate-x-0' : '-translate-x-full' 
      } ease-in-out duration-300`}
    >
      <div className="absolute right-2 top-2">
        <svg
          onClick={() => setShowSidebar(false)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 cursor-pointer text-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="mx-3 md:hidden">
        <div className="flex items-center mt-10 gap-4">
          <svg
            onClick={handleHome}
            xmlns="http://www.w3.org/2000/svg"
            className=" h-10 w-10 cursor-pointer text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-10 w-10 cursor-pointer text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-10 w-10 cursor-pointer text-gray-200 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
      <div className="mt-5 md:mt-20 mx-3">
        <div className="">
          <span className="text-4xl font-semibold text-gray-200">
            Search Movie
          </span>
          <div className="w-full flex items-center justify-center py-2">
            <input
              onChange={e => setSearch(e.target.value)}
              className="w-full h-[40px] text-base border-2 text-black"
              type="text"
            />
            <svg
              onClick={handleSearch}
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 cursor-pointer border-2 border-gray-700 text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 mx-3">
        {Object.entries(request).map(([key, { title }]) => (
          <span
            onClick={() => handleClick(key)}
            key={key}
            className="text-gray-200 text-base cursor-pointer hover:animate-bounce hover:text-[1.3rem] hover:text-red-600 active:text-blue-900   z-30"
          >
            {title}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
