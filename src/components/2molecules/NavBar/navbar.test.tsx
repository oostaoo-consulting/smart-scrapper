import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import NavBar from './NavBar';

describe('NavBar', () => {
  const handleTabsMock = jest.fn();
  beforeEach(() => {
    render(<NavBar className="classnameTest" handleTabs={handleTabsMock} />);
  });

  it('should contain the good class', () => {
    expect(screen.getByRole('navigation')).toHaveClass('classnameTest');
  });

  it('should call the good function', () => {
    const buttons = screen.getAllByTestId('buttonComponent');
    expect(buttons).toHaveLength(2);

    fireEvent.click(buttons[0]);
    expect(handleTabsMock).toHaveBeenCalledWith('favorite');

    fireEvent.click(buttons[1]);
    expect(handleTabsMock).toHaveBeenCalledWith('search');
  });
});
