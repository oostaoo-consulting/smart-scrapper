import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { ProfilesContext } from '../../../contexts/profilesContext';
import SearchBar from './SearchBar';

const mockLoadData = jest.fn();

// Create a mock context value
const mockProfilesContextValue = {
  // Other context values...
  loadData: mockLoadData,
  loading: false,
  // Other context values...
};

test('should call loadData with correct parameters on form submit', async () => {
  const { getByPlaceholderText } = render(
    <ProfilesContext.Provider value={mockProfilesContextValue}>
      <SearchBar />
    </ProfilesContext.Provider>,
  );

  const cityInput = getByPlaceholderText('Filtre par ville');
  const techInput = getByPlaceholderText('Filtre par technologies');
  const form = document.querySelector('form');

  // Act
  fireEvent.change(cityInput, { target: { value: 'London' } });
  fireEvent.change(techInput, { target: { value: 'React' } });

  if (form) {
    await act(async () => {
      fireEvent.submit(form);
    });
  }

  // Assert
  expect(mockLoadData).toBeCalledWith({
    variables: {
      location: 'London',
      searchTerms: 'React',
    },
  });
});
