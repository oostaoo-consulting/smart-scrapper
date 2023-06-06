import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Input from '../../1atoms/Input/Input';
import SearchBar from './SearchBar';

jest.mock('../../1atoms/Input/Input');

describe('Testing Presence of all components in Search', () => {
  beforeEach(() => {
    render(<SearchBar
      inputLocationValue="Paris"
      setInputLocationValue={(): void => { }}
      inputSearchValue=""
      setInputSearchValue={(): void => { }}
    />);
  });

  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  test('should display form in DOM', () => {
    const element = screen.getByRole('form');
    expect(element).toBeInTheDocument();
  });

  test('should call Location Input with props', () => {
    expect(Input).toHaveBeenCalledWith(
      expect.objectContaining({
        name: expect.stringContaining('inputLocation'),
        title: expect.stringContaining(
          'Filtrer les résultats de recherche par ville',
        ),
        value: expect.stringContaining('Paris'),
        onChange: expect.any(Function),
        placeholder: expect.stringContaining('Filtre par ville'),
      }),
      expect.objectContaining({}),
    );
  });

  test('should call Search Input with props', () => {
    expect(Input).toHaveBeenCalledWith(
      expect.objectContaining({
        name: expect.stringContaining('inputSearch'),
        title: expect.stringContaining(
          'Filtrer les résultats de recherche par technologies',
        ),
        value: expect.stringContaining(''),
        onChange: expect.any(Function),
        placeholder: expect.stringContaining('Filtre par technologies'),
      }),
      expect.objectContaining({}),
    );
  });
});
