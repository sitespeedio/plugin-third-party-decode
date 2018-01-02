'use strict';

const decode3P = require('third-party-decode');
const uniqBy = require('lodash.uniqby');

module.exports = {
  decode: function(assets) {
    const thirdParties = [];
    for (const asset of assets) {
      const thirdParty = decode3P(asset.url);
      if (thirdParty) {
        thirdParties.push(thirdParty);
      }
    }

    return uniqBy(thirdParties, function(e) {
      return e.name;
    });
  }
};
