interface GithubSearchProfilesArgs {
  location: string;
  searchTerms: string;
  usersToExclude?: string[];
  quantity?: number;
  cursorAfter?: string;
}

interface GithubAPIProfileSocialAccount {
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
          node: GithubAPIProfileSocialAccount;
        }[] | [];
      };
    };
  };
}

interface GithubAPIReturnedSearchProfiles {
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
              node: GithubAPIProfileSocialAccount;
            }[] | [];
          };
        };
      }[] | [];
    };
  };
}
