import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchSaved from './SearchSaved';

describe('SearchSaved', () => {
  // const handleClickMock = jest.fn();
  beforeEach(() => {
    render(<SearchSaved
      localStorage={{}}
      handleTabs={(): void => { }}
      setInputLocationValue={(): void => { }}
      setInputSearchValue={(): void => { }}
    />);
  });
  // TODOO

  it('should call the good function', () => {
    const buttons = screen.getAllByTestId('buttonComponent');
    expect(buttons).toHaveLength(0);

    // fireEvent.click(buttons[0]);
    // expect(handleClickMock).toHaveBeenCalled();
  });
});
