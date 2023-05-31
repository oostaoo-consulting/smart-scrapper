import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react';
import Home from '../pages';

describe('Home Page', () => {
  beforeEach(() => {
    cleanup();
    render(<Home />);
  });

  test('home', () => {
    const main = within(screen.getAllByRole('main')[0]);
    expect(main).toBeDefined();
  });

  it('should handle fav tabs correctly', () => {
    const favoriteButton = screen.getByText('FAVORIS');

    fireEvent.click(favoriteButton);
    expect(
      screen.getByTestId('toggle-section').className.includes('hidden'),
    ).toBe(false);

    fireEvent.click(favoriteButton);
    expect(
      screen.getByTestId('toggle-section').className.includes('hidden'),
    ).toBe(true);
  });

  it('should handle search tabs correctly', () => {
    const searchButton = screen.getByText('RECHERCHES');

    fireEvent.click(searchButton);
    expect(
      screen.getByTestId('toggle-section').className.includes('hidden'),
    ).toBe(false);

    fireEvent.click(searchButton);
    expect(
      screen.getByTestId('toggle-section').className.includes('hidden'),
    ).toBe(true);
  });
});
