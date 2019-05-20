const { Contributors, ParentRepo } = require('./lib');

(
  async () => {
    await ParentRepo('arshadkazmi42', 'taskcluster')
  }
)();