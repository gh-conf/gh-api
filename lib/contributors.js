const contributors = async (username, repository) => { // eslint-disable-line no-unused-vars

  const response = await fetch(eval('`' + CONSTANTS.GITHUB_CONTRIBUTORS_URL + '`'));
  return await response.json();
};


module.exports = contributors;
