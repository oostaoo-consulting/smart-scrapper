import React, { SetStateAction, Dispatch } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/Ai';
import Button from '../../1atoms/Button/Button';

interface PaginationProps {
  paginate: (value: number) => void;
  totalPost: number;
  postPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

function Pagination({
  paginate,
  totalPost,
  postPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) {
  const pagesArray = Array.from(
    { length: Math.ceil(totalPost / postPerPage) },
    (_, i) => i + 1,
  );

  return (
    <div className="flex flex-row justify-center my-4">
      <div className="flex items-center mx-4">
        <Button
          disabled={currentPage === 1}
          className={`hover:text-black ${
            currentPage === 1 ? 'text-neutral-300' : 'text-neutral-500'
          }`}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <AiOutlineArrowLeft />
        </Button>
      </div>
      {pagesArray.map((page: number) => (
        <Button
          disabled={false}
          key={uuidv4()}
          onClick={() => paginate(page)}
          className="flex justify-center w-10 hover:text-black"
        >
          {page}
        </Button>
      ))}
      <div className="flex items-center mx-4">
        <Button
          disabled={currentPage === pagesArray.length}
          className={`hover:text-black ${
            currentPage === pagesArray.length
              ? 'text-neutral-300'
              : 'text-neutral-500'
          }`}
          onClick={() => setCurrentPage((prev: number) => prev + 1)}
        >
          <AiOutlineArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
