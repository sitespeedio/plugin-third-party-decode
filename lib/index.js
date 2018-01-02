'use strict';

const fs = require('fs');
const path = require('path');
const decode = require('./decode').decode;

module.exports = {
  name() {
    return 'third-party-decode';
  },
  open(context) {
    this.make = context.messageMaker('thirdPartyDecode').make;

    // Register a logger for this plugin, a unique name so we can filter the log
    this.log = context.intel.getLogger('sitespeedio.plugin.thirdPartyDecode');

    this.pug = fs.readFileSync(
      path.resolve(__dirname, 'pug', 'index.pug'),
      'utf8'
    );
  },
  processMessage(message, queue) {
    const make = this.make;
    switch (message.type) {
      case 'sitespeedio.setup': {
        // Tell the HTML plugin that this plugin got a pug of the type
        // pageSummary = it will be shown on the page summary page
        // If you got data that differs per run, the the type will be
        // run.
        queue.postMessage(
          make('html.pug', {
            id: 'thirdPartyDecode',
            name: 'Third Party Decode',
            pug: this.pug,
            type: 'pageSummary'
          })
        );

        break;
      }

      case 'pagexray.run': {
        const thirdParties = decode(message.data.assets);
        queue.postMessage(
          // The HTML plugin will pickup every message names *.pageSummary
          // and publish the data under pageInfo.data.*.pageSummary
          // in this case pageInfo.data.thirdPartyDecode.pageSummary
          make('thirdPartyDecode.pageSummary', thirdParties, {
            group: message.group,
            url: message.url
          })
        );
        break;
      }
    }
  }
};
