import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Input from './Input';

describe('Testing Input Component', () => {
  afterEach(() => {
    cleanup();
  });

  const theRender = () => {
    render(<Input />);
  };

  test('input is displayed', () => {
    theRender();
    const element = screen.getByRole('textbox');

    expect(element).toBeDefined();
    expect(element).toBeTruthy();
  });

  test('input is displayed', () => {
    theRender();
    const element = screen.getByPlaceholderText('Recherche');

    expect(element).toBeDefined();
    expect(element).toBeTruthy();
  });
});
