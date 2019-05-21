const fetch = require('node-fetch');
const Strmat = require('strmat');
const { GH_API } = require('@gh-conf/gh-conf-constants');


const contributors = async (username, repository) => {
  const response = await fetch(Strmat.format(
    GH_API['GITHUB_CONTRIBUTORS'], {
      'username': username,
      'repository': repository
    }
  ));
  return await response.json();
};


module.exports = contributors;
