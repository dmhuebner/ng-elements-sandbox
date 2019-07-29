#!/bin/sh

ng build ng-elements-sandbox --prod --output-hashing=none && cat dist/ng-elements-sandbox/runtime-es2015.js dist/ng-elements-sandbox/polyfills-es2015.js dist/ng-elements-sandbox/scripts.js dist/ng-elements-sandbox/main-es2015.js > demo/ng-elements-sandbox.js
