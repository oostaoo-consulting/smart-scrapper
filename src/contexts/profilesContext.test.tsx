import React from 'react';
import {
  Queries,
  RenderResult,
  render, renderHook, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import ProfilesProvider, {
  ProfilesContext,
  useProfilesContext, ContextProps,
} from './profilesContext';

jest.mock('@apollo/client', () => ({
  gql: (): void => { },
  useLazyQuery: (): [jest.Mock, { data: { profiles: [] }, loading: boolean, error?: Error }] => [
    jest.fn(),
    { data: { profiles: [] }, loading: false, error: undefined },
  ],
}));

const initialContextValue: ContextProps<undefined> = {
  profiles: undefined,
  loading: false,
  error: undefined,
  loadData: () => new Promise(() => { }),
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('ProfilesProvider', () => {
  test('should pass the initial context value into children', () => {
    render(
      <ProfilesProvider>
        <ProfilesContext.Consumer>
          {(value): JSX.Element => <div data-testid="value">{JSON.stringify(value)}</div>}
        </ProfilesContext.Consumer>
      </ProfilesProvider>,
    );

    expect(screen.getByTestId('value')).not.toBeNull();
    expect(screen.getByTestId('value')).toHaveTextContent(
      JSON.stringify(initialContextValue),
    );
  });
});

describe('ProfilesContext', () => {
  test('should pass a modified context value into children', () => {
    const modifiedContextValue = {
      ...initialContextValue,
      profiles: [],
    };

    const customRender = (
      ui: React.ReactNode,
      { providerProps, ...renderOptions }: { providerProps: any },
    ): RenderResult<Queries, HTMLElement, HTMLElement> => render(
      <ProfilesContext.Provider value={providerProps}>
        {ui}
      </ProfilesContext.Provider>,
      renderOptions,
    );

    customRender(
      <ProfilesContext.Consumer>
        {(value): JSX.Element => <div data-testid="child">{JSON.stringify(value)}</div>}
      </ProfilesContext.Consumer>,
      { providerProps: { value: modifiedContextValue } },
    );

    expect(screen.getByTestId('child')).toHaveTextContent(
      JSON.stringify(modifiedContextValue),
    );
  });
});

describe('useProfilesContext Hook', () => {
  test('should use Profiles Context', () => {
    const { result } = renderHook(() => useProfilesContext());
    expect(result.current.profiles).toEqual([]);
    expect(result.current.loading).toEqual(false);
    expect(result.current.error).toEqual(undefined);
    expect(result.current.loadData).toBeInstanceOf(Function);
    expect(result.current.loadData()).toBeInstanceOf(Promise);
  });

  test('should return an error if no enclosing context or null context value', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => null);
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn());

    const expectedErrorMessage =
      'You need to wrap this component with <ProfilesProvider>';
    let errorMessage = '';

    try {
      renderHook(() => useProfilesContext());
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      }
    }

    expect(errorMessage).toEqual(expectedErrorMessage);
  });
});
