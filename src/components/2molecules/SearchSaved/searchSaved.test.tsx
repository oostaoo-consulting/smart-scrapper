import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import SearchSaved from './SearchSaved';

describe('SearchSaved', () => {
  const handleTabMock = jest.fn();
  const handleSetLocationMock = jest.fn();
  const handleSetSearchMock = jest.fn();
  beforeEach(() => {
    render(<SearchSaved
      localStorage={[
        '01/062023 : Nantes "Next"', {
          location: 'Nantes',
          search: 'next',
        },
      ]}
      handleTabs={handleTabMock}
      setInputLocationValue={handleSetLocationMock}
      setInputSearchValue={handleSetSearchMock}
    />);
  });

  it('should call the good function', () => {
    const buttons = screen.getAllByTestId('buttonComponent');
    expect(buttons).toHaveLength(1);

    fireEvent.click(buttons[0]);
    expect(handleTabMock).toHaveBeenCalledTimes(1);
    expect(handleSetLocationMock).toHaveBeenCalledTimes(1);
    expect(handleSetSearchMock).toHaveBeenCalledTimes(1);
  });
});
