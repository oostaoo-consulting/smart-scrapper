import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchesSaved from './SearchesSaved';

describe('SearchSaved', () => {
  beforeEach(() => {
    render(<SearchesSaved
      handleTabs={(): void => { }}
      setInputLocationValue={(): void => { }}
      setInputSearchValue={(): void => { }}
    />);
  });

  // TODOO

  it('should call the good function', () => {
    expect(screen.getAllByTestId('buttonComponent')[0]).toBeInTheDocument();
  });
});
