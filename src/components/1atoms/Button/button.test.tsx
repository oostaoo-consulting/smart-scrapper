import React from 'react';
import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import Button from './Button';

const mockOnClick = jest.fn();

describe('Testing Input Component', () => {
  afterEach(() => {
    cleanup();
  });

  const theRender = (
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
  ) => {
    render(
      type ? (
        <Button type={type} className="" onClick={mockOnClick}>
          <RxMagnifyingGlass />
        </Button>
      ) : (
        <Button className="" onClick={mockOnClick}>
          <RxMagnifyingGlass />
        </Button>
      ),
    );
  };

  test('input is displayed', () => {
    theRender();
    const element = screen.getByRole('button');

    expect(element).toBeDefined();
    expect(element).toBeTruthy();
    expect(element).toHaveAttribute('type', 'button');
  });

  test('input is with type = submit', () => {
    theRender('submit');
    const element = screen.getByRole('button');

    expect(element).toHaveAttribute('type', 'submit');
  });

  test('input is clicked', () => {
    theRender('submit');

    const element = screen.getByRole('button');
    fireEvent.click(element);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
