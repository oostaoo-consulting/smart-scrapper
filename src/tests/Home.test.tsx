import React from 'react';
import {
  fireEvent, render, screen, within,
} from '@testing-library/react';
import Home from '../pages';

describe('Home Page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('home', () => {
    const main = within(screen.getAllByRole('main')[0]);
    expect(main).toBeDefined();
  });

  it('should handle fav tabs correctly', () => {
    const favoriteButton = screen.getByText('FAVORIS');

    fireEvent.click(favoriteButton);
    expect(screen.getByTestId('toggle-section').className.includes('hidden')).toBe(false);
  });

  it('should handle search tabs correctly', () => {
    const searchButton = screen.getByText('RECHERCHES');

    fireEvent.click(searchButton);
    expect(screen.getByTestId('toggle-section').className.includes('hidden')).toBe(false);
  });

  // it('should handle close tabs correctly', () => {
  //   const noTabButton = screen.getByTestId('close-button');

  //   fireEvent.click(noTabButton);
  //   expect(screen.getByTestId('toggle-section').className.includes('hidden')).toBe(true);
  // });
});
