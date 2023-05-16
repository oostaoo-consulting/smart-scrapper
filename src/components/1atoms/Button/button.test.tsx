import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import Button from './Button';

describe('Testing Input Component', () => {
  afterEach(() => {
    cleanup();
  });

  const theRender = (): void => {
    render(
      <Button className="">
        <RxMagnifyingGlass />
      </Button>,
    );
  };

  test('input is displayed', () => {
    theRender();
    const element = screen.getByRole('button');

    expect(element).toBeDefined();
    expect(element).toBeTruthy();
  });
});
