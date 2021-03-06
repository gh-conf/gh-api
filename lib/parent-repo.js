const fetch = require('node-fetch');
const _ = require('lodash');
const Strmat = require('strmat');
const { GH_API } = require('@gh-conf/gh-conf-constants');


const get = async (username, repository) => {

  const response = await fetch(Strmat.format(
    GH_API['REPO_DETAILS'], {
      username: username,
      repository: repository
    }
  ));

  const repositoryData = await response.json();
  if (!_.get(repositoryData, 'parent')) {
    return undefined;
  }

  const owner = _.get(repositoryData, 'parent.owner.login');
  const ownerRepo = _.get(repositoryData, 'parent.name');

  const upstream = Strmat.format(
    GH_API['GITHUB_REPO'], {
      'username': owner,
      'repository': ownerRepo
    }
  );

  return upstream;
};


module.exports = get;
