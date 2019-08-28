const expect = require('chai').expect;

const { Contributors, ParentRepo } = require('../index');

const PARENT_REPO_URL = 'https://github.com/mozilla-frontend-infra/react-lazylog';


describe('validates gh contributors api response', () => {
  it('should return list of contributors', async () => {
    const contributors = await Contributors('gh-conf', 'credits');
    console.log(contributors);
    expect(contributors[0].login).to.deep.equal('arshadkazmi42');
  });
});

describe('validates gh parent repo api response', () => {
  it('should return parent repo url', async () => {
    const parentRepo = await ParentRepo('arshadkazmi42', 'react-lazylog');
    expect(parentRepo).to.equal(PARENT_REPO_URL);
  });
});
