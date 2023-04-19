import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Paragraph from './Paragraph';

describe('Testing Paragraph Component', () => {
  afterEach(() => {
    cleanup();
  });

  const theRender = () => {
    render(<Paragraph text="This is some text for the paragraph" />);
  };

  test('paragraph is displayed', () => {
    theRender();
    const element = screen.getByTestId('paragraphtest');
    const expectedText = 'This is some text for the paragraph';

    expect(element).toBeDefined();
    expect(element).toBeTruthy();
    expect(element.textContent).toBe(expectedText);
  });
});
