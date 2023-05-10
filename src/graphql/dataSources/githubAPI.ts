import { RESTDataSource } from '@apollo/datasource-rest';
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';
import type { GithubSearchUsersArgs } from '../resolvers';

const findUsersQuery = ({
  location,
  searchTerms,
  quantity,
  cursorAfter,
}: GithubSearchUsersArgs) => `query { 
    search(
      type: USER, 
      query: "location:${location || 'Paris, France'} ${searchTerms || ''}", 
      first: ${quantity || 10}, 
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
            socialAccounts(first: 5) {
              edges {
                node {
                  displayName
                  provider
                  url
                }
              }
            }
          }
        }
      }
    }
  }`;

const findUserQuery = (login: string) => `query {
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

  async findUsers(args: GithubSearchUsersArgs) {
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

  async findUserByLogin(login: string) {
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
