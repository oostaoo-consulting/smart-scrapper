interface PersonSocialAccount extends GithubAPISocialAccount {}

interface Person extends GithubAPIProfile {
  cursor?: string;
  socialAccounts: PersonSocialAccount[] | []
}
