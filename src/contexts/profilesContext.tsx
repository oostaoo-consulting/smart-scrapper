import {
  gql,
  useLazyQuery,
  ApolloQueryResult,
  LazyQueryExecFunction,
  OperationVariables,
} from '@apollo/client';
import React from 'react';

interface Profiles {
  githubProfiles: Person[];
}

export interface ContextProps<TData> {
  profiles?: TData;
  loading: boolean;
  error?: ApolloQueryResult<TData>['error'];
  loadData: LazyQueryExecFunction<Profiles, OperationVariables>;
}

interface ProviderProps {
  children: React.ReactNode;
}

const query = gql`
  query GithubProfiles(
    $location: String
    $searchTerms: String
    $quantity: Int
    $page: Int
  ) {
    githubProfiles(
      location: $location
      searchTerms: $searchTerms
      quantity: $quantity
      page: $page
    ) {
      id
      login
      location
      avatarUrl
      name
      email
      url
      websiteUrl
      socialAccounts {
        provider
        displayName
        url
      }
      bio
    }
  }
`;

export const ProfilesContext = React.createContext<ContextProps<Person[]>>({
  profiles: [],
  loading: false,
  error: undefined,
  loadData: () => new Promise(() => { }),
});

export const useProfilesContext = (): ContextProps<Person[]> => {
  const value = React.useContext(ProfilesContext);

  if (value === null) {
    throw new Error('You need to wrap this component with <ProfilesProvider>');
  }

  return { ...value };
};

function ProfilesProvider({ children }: ProviderProps): JSX.Element {
  const [loadData, { data, loading, error }] = useLazyQuery<Profiles>(query);

  const value = React.useMemo(
    () => ({
      profiles: data?.githubProfiles,
      loading,
      error,
      loadData,
    }),
    [data, loading, error, loadData],
  );

  return (
    <ProfilesContext.Provider value={value}>
      {children}
    </ProfilesContext.Provider>
  );
}

export default ProfilesProvider;
