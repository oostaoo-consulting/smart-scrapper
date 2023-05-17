import React from 'react';
import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import Input from './Input';

let rerender: ReturnType<typeof render>['rerender'];
const mockOnChange = jest.fn();

describe('Testing Input Component', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    rerender = render(
      <Input
        name="input name"
        title="input title"
        value="input value"
        placeholder="input placeholder"
        onChange={mockOnChange}
      />,
    ).rerender;
  });

  test('should display in DOM', () => {
    const element = screen.getByRole('textbox');

    expect(element).toBeInTheDocument();
  });

  test('should display with its attributes', () => {
    const element = screen.getByRole('textbox');

    expect(element).toHaveAttribute('name', 'input name');
    expect(element).toHaveAttribute('title', 'input title');
    expect(element).toHaveAttribute('value', 'input value');
    expect(element).toHaveAttribute('placeholder', 'input placeholder');
  });

  test('should display with default placeholder and value attributes', () => {
    const element = screen.getByRole('textbox');
    rerender(
      <Input
        name="input name"
        title="input title"
        onChange={mockOnChange}
      />,
    );

    expect(element).toHaveAttribute('placeholder', 'Recherche');
    expect(element).toHaveAttribute('value', '');
  });

  test('should call mockOnChange when value change', () => {
    const element = screen.getByRole('textbox');

    fireEvent.change(element, { target: { value: 'new value' } });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
