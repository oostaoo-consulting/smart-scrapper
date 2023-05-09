import React from 'react';
import { render, screen } from '@testing-library/react';

import Favorites from './Favorites';

describe('Favorites', () => {
  beforeEach(() => {
    render(<Favorites />);
  });

  it('renders without crashing', () => {
    render(<Favorites />);
    expect(screen.getAllByTestId('card')[0]).toBeInTheDocument();
  });
});
