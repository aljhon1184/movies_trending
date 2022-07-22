import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Navbar({setShowSidebar}) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

 

  useEffect(() => {
    const handleScroll = () =>{
      if(window.scrollY > 50){
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () =>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[])


  return (
    <header className={`w-full fixed top-0 z-[999] ${isScrolled && 'bg-black'}`}>
      <div className="mx-2 flex items-center h-16 justify-between md:mx-20 text-white">
        <div className="flex gap-4">
          <svg
            onClick={() => setShowSidebar(true)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 cursor-pointer hover:animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            onClick={() => router.push('/')}
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:flex h-8 w-8 cursor-pointer hover:animate-bounce"
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
            className="hidden md:flex h-8 w-8 cursor-pointer hover:animate-bounce"
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
            className=" hidden md:flex h-8 w-8 cursor-pointer hover:animate-bounce"
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
        <div className="flex items-center cursor-pointer">
          <span
            onClick={() => router.push('/')}
            className=" font-semibold text-3xl md:text-5xl hover:animate-pulse"
          >
            Trending <span className='text-red-900'>Movies</span>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
