# The graphQL request to get github users by location and search query

```graphql
{
  search(query: "location:france react", type: USER, first: 2, after: null) {
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
}
```