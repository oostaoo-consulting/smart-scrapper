import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import SearchButton from './SearchButton';

describe('Testing Input Component', () => {
  afterEach(() => {
    cleanup();
  });

  const theRender = () => {
    render(<SearchButton />);
  };

  test('input is displayed', () => {
    theRender();
    const element = screen.getByRole('button');

    expect(element).toBeDefined();
    expect(element).toBeTruthy();
  });
});
