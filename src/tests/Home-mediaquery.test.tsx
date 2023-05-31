import React from 'react';
import {
  render, fireEvent, screen, within,
} from '@testing-library/react';
import Home from '../pages/index';

describe('Home Page', () => {
  it('updates tabs state on button click', () => {
    render(<Home />);
    const favoriteSection = within(screen.getByTestId('favoriteAndSearchSection'));

    const favoriteButton = screen.getByText('FAVORIS');
    const buttons = favoriteSection.getAllByRole('button');

    expect(buttons[2]).toHaveClass('xl:hidden hidden');

    fireEvent.click(favoriteButton);
    expect(buttons[2]).toHaveClass('xl:hidden');

    fireEvent.click(buttons[2]);
    expect(screen.getByTestId('toggle-section')).toHaveClass('hidden');
  });

  // it('updates openCard state when CardsSide is clicked', () => {
  //   render(<Home />);

  //   fireEvent.click(screen.getByText('CardsSide Text'));
  // });

  // it('updates tabs state when close button is clicked', () => {
  //   render(<Home />);
  //   fireEvent.click(screen.getByLabelText('close button'));
  // });
});
