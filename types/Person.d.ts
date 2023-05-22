interface PersonSocialAccount extends GithubAPIProfileSocialAccount { }

interface Person extends GithubAPIProfile {
  cursor?: string;
  socialAccounts: PersonSocialAccount[] | []
}
