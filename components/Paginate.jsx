import React from 'react';
import { useRouter } from 'next/router'
import { Pagination } from '@material-ui/lab';

function Paginate({ page, totalPages, genre, search, name }) {
  const genreIsNumber = !isNaN(+ genre)
  const router = useRouter();

  const handleChange = (e, value) =>{
    router.push(search ? `/?search=${search}&page=${value}` : genreIsNumber ? `/?genre=${genre}&name=${name}&page=${value}`  : `/?genre=${genre}&page=${value}`)
  }

  return (
    <Pagination
      color={'secondary'}
      count={totalPages > 500 ? 500 : totalPages}
      page={Number(page) || 1}
      onChange={handleChange}
    />
  );
}

export default Paginate;
