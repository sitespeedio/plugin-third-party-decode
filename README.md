# sitespeed.io plugin for decoding third party requests
[![Build Status](https://travis-ci.org/sitespeedio/plugin-third-party-decode.svg?branch=master)](https://travis-ci.org/sitespeedio/plugin-third-party-decode)

Run Paul Irish [third-party-decode](https://github.com/paulirish/third-party-decode) as a plugin for sitespeed.io. It will decode third parties the same way as Chrome do. It's not 100% solution that works for everything (for example it doesn't categorise Facebook as third party, but that will be fixed in the next version of the Coach).

You can read more about sitespeed.io plugins [here](https://www.sitespeed.io/documentation/sitespeed.io/plugins/).

## Test with current master

If you have checked out as the same level as sitespeed.io you run it like this (else just change the path).

```bash
git clone https://github.com/sitespeedio/sitespeed.io.git
cd sitespeed.io
npm install
bin/sitespeed.js --plugins.add ../plugin-third-party-decode/lib/ https://www.sitespeed.io/ -n 1
```
## What you will get
<img src="https://raw.githubusercontent.com/sitespeedio/plugin-third-party-decode/master/example.png">

## Run in production
If you want to run Third Party Decoder with your other sitespeed.io test, follow the instructions in the [add a plugin docs](https://www.sitespeed.io/documentation/sitespeed.io/plugins/#add-a-plugin).

## sitespeed.io version
You need sitespeed.io 6.0 or later to run the plugin.
