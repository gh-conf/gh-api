const fetch = require('node-fetch');
const _ = require('lodash');

const get = async (username, repostiory) => {

  const response = await fetch(`https://api.github.com/repos/${username}/${repostiory}`);
  const repositoryData = await response.json();
  const owner = _.get(repositoryData, 'parent.name');
  const ownerRepo = _.get(repositoryData, 'parent.owner.name');

  const upstream = `https://github.com/${owner}/${ownerRepo}`;

  return upstream
};


module.exports = get;
