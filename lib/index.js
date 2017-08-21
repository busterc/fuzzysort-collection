'use strict';

var fuzzysort = require('fuzzysort');
var get = require('get-value');

module.exports = function (query, collection, key) {
  var results = [];
  collection.forEach(function (item) {
    var value = get(item, key);
    var meta = fuzzysort.single(query, value);
    if (meta) {
      results.push({
        meta: meta,
        data: item
      });
    }
  });
  results.sort(function (a, b) {
    return a.meta.score - b.meta.score;
  });
  return results;
};

module.exports.fuzzysort = fuzzysort;
