import { RESTDataSource } from '@apollo/datasource-rest';
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';

const getStringOfUsersToExclude = (users: string[] | undefined): string => {
  if (!users || users.length === 0) return '';
  return users.map((user) => `-user:${user}`).join(' ');
};

const findUsersQuery = ({
  location,
  searchTerms,
  usersToExclude,
  quantity,
  cursorAfter,
}: GithubSearchProfilesArgs): string => `query { 
    search(
      type: USER, 
      query: "location:${location || 'Paris'} ${searchTerms || ''} ${getStringOfUsersToExclude(usersToExclude)}", 
      first: ${quantity || 100}, 
      after: ${cursorAfter || null}
    ) {
      userCount
      pageInfo {
        endCursor
        startCursor
      }
      edges {
        cursor
        node {
          ... on User {
            id
            name
            login
            location
            email
            url
            websiteUrl
            avatarUrl(size: 512)
            bio
            socialAccounts(first: 4) {
              edges {
                node {
                  provider
                  displayName
                  url
                }
              }
            }
          }
        }
      }
    }
  }`;

const findUserQuery = (login: string): string => `query {
 user(login: "${login}") {
    id
    name
    login
    location
    email
    url
    websiteUrl
    avatarUrl(size: 512)
    bio
    socialAccounts(first: 3) {
      edges {
        node {
          displayName
          provider
          url
        }
      }
    }
  }
}`;

export default class GithubAPI extends RESTDataSource {
  override baseURL = 'https://api.github.com';

  private token: string;

  constructor(options: { token: string, cache: KeyValueCache }) {
    super(options);
    this.token = options.token;
  }

  async findProfiles(args: GithubSearchProfilesArgs): Promise<GithubAPIReturnedSearchProfiles> {
    return this.post('graphql', {
      headers: {
        Authorization: `bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: findUsersQuery(args),
      }),
    });
  }

  async findProfileByLogin(login: string): Promise<GithubAPIReturnedProfile> {
    return this.post('graphql', {
      headers: {
        Authorization: `bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: findUserQuery(login),
      }),
    });
  }
}
