import React, { Dispatch, SetStateAction } from 'react';
import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';

import Pagination from './Pagination';

const theRender = (
  currentPage: number,
  setCurrentPageMock: Dispatch<SetStateAction<number>>,
  paginateMock: (value: number) => void,
) => {
  const rtlResult = render(<Pagination
    tabs={1}
    paginate={paginateMock}
    totalPost={20}
    postPerPage={10}
    setCurrentPage={setCurrentPageMock}
    currentPage={currentPage}
  />);
  return rtlResult;
};

describe('Pagination', () => {
  afterEach(() => {
    cleanup();
  });

  it('should change on the previous page', () => {
    const setCurrentPageMock = jest.fn();
    const paginateMock = jest.fn();

    theRender(2, setCurrentPageMock, paginateMock);

    const buttons = screen.getAllByRole('button');

    const previousArrow = buttons[0];

    expect(previousArrow).toBeDefined();
    expect(previousArrow).not.toBeDisabled();

    fireEvent.click(previousArrow);
    expect(setCurrentPageMock).toBeCalledTimes(1);
  });

  it('should not change on the previous page', () => {
    const setCurrentPageMock = jest.fn();
    const paginateMock = jest.fn();

    theRender(1, setCurrentPageMock, paginateMock);
    const buttons = screen.getAllByRole('button');

    const previousArrow = buttons[0];

    expect(previousArrow).toBeDefined();
    expect(previousArrow).toBeDisabled();

    fireEvent.click(previousArrow);
    expect(setCurrentPageMock).toBeCalledTimes(0);
  });

  it('should change on the next page', () => {
    const setCurrentPageMock = jest.fn();
    const paginateMock = jest.fn();

    theRender(1, setCurrentPageMock, paginateMock);
    const buttons = screen.getAllByRole('button');

    const nextArrow = buttons[buttons.length - 1];

    expect(nextArrow).toBeDefined();
    expect(nextArrow).not.toBeDisabled();

    fireEvent.click(nextArrow);
    expect(setCurrentPageMock).toBeCalledTimes(1);
  });

  it('should not change on the next page', () => {
    const setCurrentPageMock = jest.fn();
    const paginateMock = jest.fn();

    theRender(2, setCurrentPageMock, paginateMock);
    const buttons = screen.getAllByRole('button');

    const nextArrow = buttons[buttons.length - 1];

    expect(nextArrow).toBeDefined();
    expect(nextArrow).toBeDisabled();

    fireEvent.click(nextArrow);
    expect(setCurrentPageMock).toBeCalledTimes(0);
  });

  it('should click on one page', () => {
    const setCurrentPageMock = jest.fn();
    const paginateMock = jest.fn();

    theRender(1, setCurrentPageMock, paginateMock);
    const buttons = screen.getAllByRole('button');

    for (let index = 1; index < buttons.length - 1; index += 1) {
      const pageButton = buttons[index];

      expect(pageButton).toBeDefined();
      expect(pageButton).not.toBeDisabled();

      fireEvent.click(pageButton);
      expect(paginateMock).toBeCalledTimes(index);
      expect(pageButton.textContent).toBe(index.toString());
    }
    expect(paginateMock).toBeCalledTimes(buttons.length - 2);
  });
});
