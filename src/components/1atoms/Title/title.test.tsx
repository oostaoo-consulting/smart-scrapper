import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Title from './Title';

const renderComponent = (level: number) => {
  render(<Title level={level}>Hello title !</Title>);
};

describe('Title', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render a h1 title', () => {
    renderComponent(1);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should render a title with "Hello title!" content text', () => {
    renderComponent(1);
    expect(screen.getByRole('heading')).toHaveTextContent(/^Hello title !$/);
  });

  it('should render a h2 title', () => {
    renderComponent(2);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('should render a h3 title', () => {
    renderComponent(3);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('should render a h1 title with class "text-lg"', () => {
    renderComponent(1);
    expect(screen.getByRole('heading')).toHaveClass('text-lg');
  });

  it('should render a h2 title with class "text-xl"', () => {
    renderComponent(2);
    expect(screen.getByRole('heading')).toHaveClass('text-xl');
  });

  it('should render a h3 title with class "text-sm"', () => {
    renderComponent(3);
    expect(screen.getByRole('heading')).toHaveClass('text-sm');
  });

  it('should render a h4 title with no class', () => {
    renderComponent(4);
    expect(screen.getByRole('heading')).not.toHaveClass();
  });
});
