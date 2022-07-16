import React from 'react';
import request from '../util/requestMovie';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  return (
    <div className="hidden md:grid md:grid-cols-8 lg:grid-cols-11 mt-3 mx-3 border-b-2 border-gray-700 z-50">
      {Object.entries(request).map(([key, { title }]) => (
        <span
          onClick={() => router.push(`/?genre=${key}`)}
          key={key}
          className=" text-base cursor-pointer whitespace-nowrap hover:text-[1.3rem] hover:text-red-600 active:text-blue-900 w-fit border-2    rounded-lg text-white p-2  z-30  mb-2"
        >
          {title}
        </span>
      ))}
    </div>
  );
}

export default Header;
