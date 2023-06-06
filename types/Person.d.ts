type PersonSocialAccount = GithubAPIProfileSocialAccount;

interface Person extends GithubAPIProfile {
  cursor?: string;
  socialAccounts: PersonSocialAccount[] | [];
}
