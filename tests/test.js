const expect = require('chai').expect;

const { Contributors, ParentRepo } = require('../index');

const CONTRIBUTORS_LIST = [
  {
    'avatar_url': 'https://avatars3.githubusercontent.com/u/4654382?v=4',
    'contributions': 9,
    'events_url': 'https://api.github.com/users/arshadkazmi42/events{/privacy}',
    'followers_url': 'https://api.github.com/users/arshadkazmi42/followers',
    'following_url': 'https://api.github.com/users/arshadkazmi42/following{/other_user}',
    'gists_url': 'https://api.github.com/users/arshadkazmi42/gists{/gist_id}',
    'gravatar_id': '',
    'html_url': 'https://github.com/arshadkazmi42',
    'id': 4654382,
    'login': 'arshadkazmi42',
    'node_id': 'MDQ6VXNlcjQ2NTQzODI=',
    'organizations_url': 'https://api.github.com/users/arshadkazmi42/orgs',
    'received_events_url': 'https://api.github.com/users/arshadkazmi42/received_events',
    'repos_url': 'https://api.github.com/users/arshadkazmi42/repos',
    'site_admin': false,
    'starred_url': 'https://api.github.com/users/arshadkazmi42/starred{/owner}{/repo}',
    'subscriptions_url': 'https://api.github.com/users/arshadkazmi42/subscriptions',
    'type': 'User',
    'url': 'https://api.github.com/users/arshadkazmi42',
  }
];

const PARENT_REPO_URL = 'https://github.com/taskcluster/taskcluster';


describe('validates gh api response', () => {
  it('should return list of contributors', async () => {
    const contributors = await Contributors('gh-conf', 'credits');
    expect(contributors).to.deep.equal(CONTRIBUTORS_LIST);
  }).timeout(30000);
  it('should return parent repo url', async () => {
    const contributors = await ParentRepo('arshadkazmi42', 'taskcluster');
    expect(contributors).to.equal(PARENT_REPO_URL);
  }).timeout(30000);
});
