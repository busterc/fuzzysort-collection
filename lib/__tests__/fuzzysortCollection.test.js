const assert = require('assert');
const fuzzysortCollection = require('../index.js');

// https://www.reddit.com/r/funny.json
const funny = require('./funny.json').data.children;
const boring = [{
  title: 'alphabet',
  enabled: true
}, {
  title: 'bet',
  enabled: true
}, {
  title: 'scalp',
  enabled: true
}, {
  title: 'apple',
  enabled: true
}, {
  title: 'better than apple',
  enabled: true
}, {
  title: 'because alphabet',
  enabled: true
}];
describe('fuzzysortCollection', function () {
  it('works with nested properties', function () {
    let wut = fuzzysortCollection('wait', funny, 'data.title');
    assert(wut.length === 7);
    assert(wut[0].data.data.title === 'Outside waiting for the eclipse all like');
  });
  it('works with top-level properties', function () {
    let wut = fuzzysortCollection('ap', boring, 'title');
    assert(wut.length === 5);
    assert(wut[0].data.title === 'apple');
  });
  it('allows custom fuzzysort config', function () {
    fuzzysortCollection.fuzzysort.highlightOpen = '<strong>';
    fuzzysortCollection.fuzzysort.highlightClose = '</strong>';
    let wut = fuzzysortCollection('ap', boring, 'title');
    assert(wut[0].meta.highlighted === '<strong>ap</strong>ple');
  });
});
