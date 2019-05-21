# gh-api

[![Build Status](https://api.travis-ci.com/gh-conf/gh-api?branch=master)](https://api.travis-ci.com/gh-conf/gh-api)

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

// Fetches list of contributors of the repository
const contributors = await GhApi.contributors(username, respository);

// Fetches upstream url of the repository from parent repository
const upstream = await GhApi.parentRepo(username, respository);
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