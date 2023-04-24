import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Title from '.';

const renderComponent = (level: number, text: string) => {
  render(<Title level={level} text={text} />);
};

describe('Title', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render a h1 title', () => {
    renderComponent(1, 'Hello World!');
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should render a title with "Hello World!" content text', () => {
    renderComponent(1, 'Hello World!');
    expect(screen.getByRole('heading')).toHaveTextContent(/^Hello World!$/);
  });

  it('should render a h2 title', () => {
    renderComponent(2, 'Hello World!');
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('should render a title with empty content', () => {
    renderComponent(1, '');
    expect(screen.getByRole('heading')).toHaveTextContent(/^$/);
  });
});
