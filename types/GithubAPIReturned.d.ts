interface GithubAPISocialAccount {
  provider: string;
  displayName: string;
  url: string;
}

interface GithubAPIProfile {
  id: string;
  name: string | null;
  login: string;
  location: string;
  email: string;
  url: string;
  websiteUrl: string | null;
  avatarUrl: string;
  bio: string;
}

interface GithubAPIReturnedProfile {
  data: {
    user: GithubAPIProfile & {
      socialAccounts: {
        edges: {
          node: GithubAPISocialAccount;
        }[] | [];
      };
    };
  };
}

interface GithubAPIReturnedSearch {
  data: {
    search: {
      userCount: number;
      pageInfo: {
        endCursor: string;
        startCursor: string;
      };
      edges: {
        cursor: string;
        node: GithubAPIProfile & {
          socialAccounts: {
            edges: {
              node: GithubAPISocialAccount;
            }[] | [];
          };
        };
      }[] | [];
    };
  };
}
