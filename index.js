const { Contributors, ParentRepo } = require('./lib');


const parentRepo = (username, repositoryName) => {
  return await ParentRepo(username, repositoryName);
};


const contributors = (username, repositoryName) => {
  return await Contributors(username, repositoryName);
};


module.exports = {
  parentRepo,
  contributors
};
