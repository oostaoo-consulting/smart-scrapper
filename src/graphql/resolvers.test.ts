import { ContextValue } from '../pages/api/graphql';
import resolvers from './resolvers';

const returnedFakeGithubProfiles: GithubAPIReturnedSearchProfiles = {
  data: {
    search: {
      userCount: 2,
      pageInfo: {
        endCursor: 'Y3Vyc29yOnYyOpHOAAABdA==',
        startCursor: 'Y3Vyc29yOnYyOpHOAAABdB==',
      },
      edges: [
        {
          cursor: 'Y3Vyc29yOnYyOpHOAAABdA==',
          node: {
            id: 'MDQ6VXNlcjE=',
            name: 'John Doe',
            login: 'johndoe',
            location: 'Paris',
            email: '  ',
            url: '  ',
            websiteUrl: '  ',
            avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
            bio: '  ',
            socialAccounts: {
              edges: [{
                node: {
                  provider: 'TWITTER',
                  displayName: 'John Doe',
                  url: 'https://twitter.com/johndoe',
                },
              }],
            },
          },
        },
        {
          cursor: 'Y3Vyc29yOnYyOpHOAAABdB==',
          node: {
            id: 'MDQ6VXNlcjE=',
            name: 'Jane Doe',
            login: 'janedoe',
            location: 'Paris',
            email: '  ',
            url: '  ',
            websiteUrl: '  ',
            avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
            bio: '  ',
            socialAccounts: {
              edges: [],
            },
          },
        },
      ],
    },
  },
};

const returnedFakeGithubProfile: GithubAPIReturnedProfile = {
  data: {
    user: {
      id: 'MDQ6VXNlcjE=',
      name: 'John Doe',
      login: 'johndoe',
      location: 'Paris',
      email: '  ',
      url: '  ',
      websiteUrl: '  ',
      avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
      bio: '  ',
      socialAccounts: {
        edges: [{
          node: {
            provider: 'TWITTER',
            displayName: 'John Doe',
            url: 'https://twitter.com/johndoe',
          },
        }],
      },
    },
  },
};

const returnedFakeFormattedProfiles: Person[] = [
  {
    cursor: 'Y3Vyc29yOnYyOpHOAAABdA==',
    id: 'MDQ6VXNlcjE=',
    name: 'John Doe',
    login: 'johndoe',
    location: 'Paris',
    email: '  ',
    url: '  ',
    websiteUrl: '  ',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
    bio: '  ',
    socialAccounts: [
      {
        provider: 'TWITTER',
        displayName: 'John Doe',
        url: 'https://twitter.com/johndoe',
      },
    ],
  },
  {
    cursor: 'Y3Vyc29yOnYyOpHOAAABdB==',
    id: 'MDQ6VXNlcjE=',
    name: 'Jane Doe',
    login: 'janedoe',
    location: 'Paris',
    email: '  ',
    url: '  ',
    websiteUrl: '  ',
    avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
    bio: '  ',
    socialAccounts: [],
  },
];

const MockGithubAPI = jest.fn().mockImplementation(() => ({
  findProfiles: async () => returnedFakeGithubProfiles,
  findProfileByLogin: async () => returnedFakeGithubProfile,
}));

describe('githubProfiles resolver', () => {
  let mockContext: ContextValue;
  beforeEach(() => {
    MockGithubAPI.mockClear();
    jest.clearAllMocks();

    mockContext = {
      dataSources: {
        githubAPI: new MockGithubAPI(),
      },
    };
  });

  it('should called the githubAPI class constructor', async () => {
    expect(MockGithubAPI).toHaveBeenCalledTimes(1);
  });

  it('should return the array of fake Github profiles', async () => {
    const results = await resolvers.Query.githubProfiles(
      null,
      { location: '', searchTerms: '' },
      mockContext,
    );

    expect(JSON.stringify(results)).toEqual(JSON.stringify(returnedFakeFormattedProfiles));
  });

  it('should return the fake Github profile of John Doe', async () => {
    const results = await resolvers.Query.githubProfile(
      null,
      { login: 'johndoe' },
      mockContext,
    );
    const { cursor, ...rest } = returnedFakeFormattedProfiles[0];

    expect(JSON.stringify(results)).toEqual(JSON.stringify({ ...rest }));
  });
});
