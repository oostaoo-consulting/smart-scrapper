type QueryParams = {
  location?: string;
  searchTerms?: string;
  resultsQuantity: number;
  startCursor?: string;
};

// const graphQLQuery = ({
//   location, searchTerms, resultsQuantity, startCursor,
// }: QueryParams) => {
//   const queryLocation = location ? `location:${location}` : '';
//   const querySearchTerms = searchTerms || '';
//   const startCursorString = startCursor ? `"${startCursor}"` : 'null';
//   const queryResultsQuantity = resultsQuantity || 10;

//   return `query SearchUsers($type: "USER"!, $query: String!, $first: Int!, $after: String) {
//     search(query: "${queryLocation} ${querySearchTerms}", type: USER, first: ${queryResultsQuantity}, after: ${startCursorString}) {
//     userCount
//     pageInfo {
//       endCursor
//       startCursor
//     }
//     edges {
//       cursor
//       node {
//         ... on User {
//           id
//           name
//           login
//           location
//           email
//           url
//           websiteUrl
//           avatarUrl(size: 500)
//           bio
//           socialAccounts(first: 5) {
//             edges {
//               node {
//                 displayName
//                 provider
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   }`;
// };

export default class GithubAPI {
  baseURL = 'https://api.github.com/graphql';

  private token: string;

  constructor(options: { token: string }) {
    this.token = options.token;
  }

  async getUsers() {
    return fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        Authorization: `bearer: ${this.token}`,
      },
      body: JSON.stringify({
        query: `
          query SearchUsers($location: string! ,$query: String!, $first: Int!, $after: String) {
            search(query: "location:$location $query", type: USER, first: $first, after: $after) {
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
                  avatarUrl(size: 500)
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
        `,
        variables: {
          location: 'france',
          query: 'react',
          first: 3,
          after: null,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Here is the data: ', data);
      });
  }
}
