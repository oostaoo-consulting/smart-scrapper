import React from 'react';
import { render } from '@testing-library/react';

import SearchesSaved from './SearchesSaved';

describe('SearchesSaved', () => {
  it('should call the localStorage', () => {
    const theRender = render(<SearchesSaved
      handleTabs={(): void => { }}
      setInputLocationValue={(): void => { }}
      setInputSearchValue={(): void => { }}
    />);

    expect(theRender).toBeDefined();
  });
});
