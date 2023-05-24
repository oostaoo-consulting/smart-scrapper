import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import MainButton from './MainButton';

describe('Testing MainButton Component', () => {
  afterEach(() => {
    cleanup();
  });

  const theRender = (): void => {
    render(<MainButton text="the beautiful button" />);
  };

  test('Button is displayed', () => {
    theRender();
    const element = screen.getByRole('button');

    expect(element).toBeDefined();
    expect(element).toBeTruthy();
  });

  test('Button display the text', () => {
    theRender();
    const element = screen.getByRole('button');

    expect(element.textContent).toContain('beautiful');
  });
});
