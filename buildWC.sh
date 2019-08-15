#!/bin/sh

ng build ng-elements-sandbox --prod --output-hashing=none --single-bundle --keep-polyfills --bundle-styles false
mv dist/ng-elements-sandbox/main-es2015.js demo/ngelements.js
mv dist/ng-elements-sandbox/polyfills-es2015.js demo
mv dist/ng-elements-sandbox/styles.css demo

