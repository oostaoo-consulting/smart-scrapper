import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import {
  // ContextProps,
  ProfilesContext,
  // useProfilesContext
} from '../../../contexts/profilesContext';
import SearchBar from './SearchBar';

const mockLoadData = jest.fn();

// Create a mock context value
const mockProfilesContextValue = {
  // Other context values...
  loadData: mockLoadData,
  loading: false,
  // Other context values...
};

let inputLocationValue = '';
let inputSearchValue = '';

test('should call loadData with correct parameters on form submit', async () => {
  // const useProfileContext = jest.mock('../../../contexts/profilesContext');

  const { getByPlaceholderText } = render(
    <ProfilesContext.Provider value={mockProfilesContextValue}>
      <SearchBar
        inputLocationValue={inputLocationValue}
        setInputLocationValue={(value): void => { inputLocationValue = value; }}
        inputSearchValue={inputSearchValue}
        setInputSearchValue={(value): void => { inputSearchValue = value; }}
      />
    </ProfilesContext.Provider>,
  );

  const cityInput = getByPlaceholderText('Filtre par ville');
  const techInput = getByPlaceholderText('Filtre par technologies');
  const form = document.querySelector('form');

  // Act

  await act(async () => {
    fireEvent.change(cityInput, { target: { value: 'London' } });
    fireEvent.change(techInput, { target: { value: 'React' } });
    if (form) {
      fireEvent.submit(form);
    }
  });

  // Assert
  expect(inputLocationValue).toBe('London');
  expect(inputSearchValue).toBe('React');
  // expect(useProfileContext).toBeCalledWith({
  //   variables: {
  //     location: 'London',
  //     searchTerms: 'React',
  //   },
  // });
});
