const { Contributors, ParentRepo } = require('./lib');


const parentRepo = async (username, repositoryName) => {
  return await ParentRepo(username, repositoryName);
};


const contributors = async (username, repositoryName) => {
  return await Contributors(username, repositoryName);
};


module.exports = {
  parentRepo,
  contributors
};
