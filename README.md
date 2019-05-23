# gh-api

[![Build](https://img.shields.io/travis/com/gh-conf/gh-api.svg)](https://travis-ci.com/gh-conf/gh-api/)

Github api module, used by gh-conf repositories

## Install

```
npm install @gh-conf/gh-api
```

## Usage

```js
const GhApi = require('@gh-conf/gh-api');

const username = 'arshadkazmi42';
const repository = 'strmat';
const forkedRepo = 'taskcluster';

// Fetches list of contributors of the repository
const contributors = await GhApi.contributors(username, respository);

// Output
/**
 [
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
**/


// Fetches upstream url of the repository from parent repository
const upstream = await GhApi.parentRepo(username, forkedRepo);

// Output
// https://github.com/taskcluster/taskcluster

```

## API

#### `contributors`

- Fetches list of all contibutors of the repository
- Input: username, repository

#### `parentRepo`

- Fetches parent repository url
- Input: username, repository

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/gh-conf/gh-api/issues/new).

Read our contributing [guide](CONTRIBUTING.md) to get started with contributing to the codebase.

## Contributors

Thank you to all the contributors who have helped us in making this project better 🙌

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>