# The graphQL request to get github users by location and search query

token to test : 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

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