import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../1atoms/Button/Button';

interface PaginationProps {
  paginate: any;
  totalPost: any;
  postPerPage: any;
}

function Pagination({ paginate, totalPost, postPerPage }: PaginationProps) {
  // const pageNumber: Array<number> = [];
  const pagesArray = Array.from(
    { length: Math.ceil(totalPost / postPerPage) },
    (_, i) => i + 1,
  );

  return (
    <div className="flex flex-row justify-center my-4">
      <div className="mx-4">
        <Button className="hover:text-black hover:" onClick={() => {}}>
          <p>Arrow A</p>
        </Button>
      </div>
      {pagesArray.map((page) => (
        <Button
          key={uuidv4()}
          onClick={() => paginate(page)}
          className="flex justify-center w-10 hover:text-black"
        >
          {page}
        </Button>
      ))}
      <div className="mx-4">
        <Button className="hover:text-black hover:" onClick={() => {}}>
          <p>Arrow B</p>
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
