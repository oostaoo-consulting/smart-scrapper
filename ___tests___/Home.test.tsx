import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Home from '../src/pages';

test('home', () => {
  render(<Home />);
  const main = within(screen.getByRole('main'));

  expect(main).toBeDefined();
});
