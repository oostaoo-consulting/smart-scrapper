import React, { SetStateAction, Dispatch } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Button from '../../1atoms/Button/Button';

interface PaginationProps {
  paginate: (value: number) => void;
  totalPost: number;
  postPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  tabs: number;
}

function Pagination({
  paginate,
  totalPost,
  tabs,
  postPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps): JSX.Element {
  const pagesArray = Array.from(
    { length: Math.ceil(totalPost / postPerPage) },
    (_, i) => i + 1,
  );

  return (
    <div
      className={`${
        tabs !== 0 && 'hidden'
      } xl:flex flex flex-row justify-center h-14`}
    >
      <div className="flex items-center mx-4">
        <Button
          disabled={currentPage === 1}
          className={` ${
            currentPage === 1
              ? 'text-neutral-300'
              : 'text-neutral-500 hover:text-black'
          }`}
          onClick={(): void => setCurrentPage((prev) => prev - 1)}
        >
          <AiOutlineArrowLeft />
        </Button>
      </div>
      {pagesArray.map((page: number) => (
        <Button
          disabled={false}
          key={uuidv4()}
          onClick={(): void => paginate(page)}
          className="flex justify-center items-center w-10 hover:text-black"
        >
          {page}
        </Button>
      ))}
      <div className="flex items-center mx-4">
        <Button
          disabled={currentPage === pagesArray.length}
          className={` ${
            currentPage === pagesArray.length
              ? 'text-neutral-300'
              : 'text-neutral-500 hover:text-black'
          }`}
          onClick={(): void => setCurrentPage((prev: number) => prev + 1)}
        >
          <AiOutlineArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
