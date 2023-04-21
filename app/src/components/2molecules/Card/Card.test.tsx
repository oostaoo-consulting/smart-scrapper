import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  beforeEach(() => {
    render(<Card />);
  });

  it('should contain a level 2 title', () => {
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('should contain a level 3 title', () => {
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('should contain an image', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should contain a paragraph', () => {
    expect(screen.getByTestId('paragraphtest')).toBeInTheDocument();
  });
});
