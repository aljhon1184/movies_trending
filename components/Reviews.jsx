import React from 'react';
import Image from 'next/image'

function Reviews({ reviews }) {
  const base_url = 'https://image.tmdb.org/t/p/original/';
  const str = reviews.author_details.avatar_path;
  const data = str?.replace(/\//, '');
  const ss = data?.split('/')[0];

  return (
    <>
      <a href={reviews.url}>
        <div className="mt-3 flex items-center gap-1">
          <Image
            className="h-10 w-10 object-cover cursor-pointer rounded-full"
            src={
              reviews.author_details.avatar_path
                ? ss === 'https:'
                  ? `${data}`
                  : `${base_url}${reviews.author_details.avatar_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`
            }
            priority
            height='32px'
            width='32px'
            alt="avatar"
          />
          <span className="font-semibold">{reviews.author}</span>
        </div>
        <div className="mx-2">
          <p className="break-words text-gray-500 text-sm truncate">
            {reviews.content}
          </p>
        </div>
      </a>
    </>
  );
}

export default Reviews;
