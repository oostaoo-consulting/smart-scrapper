import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
// import Input from '../../1atoms/Input/Input';
import SearchBar from './SearchBar';

jest.mock('../../1atoms/Input/Input');

describe('Testing Presence of all components in Search', () => {
  beforeEach(() => {
    render(<SearchBar
      inputLocationValue=""
      setInputLocationValue={(): void => { }}
      inputSearchValue=""
      setInputSearchValue={(): void => { }}
    />);
  });

  afterEach(() => {
    cleanup();
  });

  test('should display form in DOM', () => {
    const element = screen.getByRole('form');
    expect(element).toBeInTheDocument();
  });
  // TODOO

  // test('should call Location Input with props', () => {
  //   expect(Input).toHaveBeenCalledWith(
  //     {
  //       name: 'inputLocation',
  //       title: 'Filtrer les résultats de recherche par ville',
  //       value: 'Paris',
  //       onChange: expect.any(Function),
  //       placeholder: 'Filtre par ville',
  //     },
  //     {},
  //   );
  // });

  // test('should call Search Input with props', () => {
  //   expect(Input).toHaveBeenCalledWith(
  //     {
  //       name: 'inputSearch',
  //       title: 'Filtrer les résultats de recherche par technologies',
  //       value: '',
  //       onChange: expect.any(Function),
  //       placeholder: 'Filtre par technologies',
  //     },
  //     {},
  //   );
  // });
});
