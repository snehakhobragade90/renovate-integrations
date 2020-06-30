#!/usr/bin/env node

/**
 * Script that can be called to invoke Renovate
 * with our necessary integrations. This could
 * be possible from within config.js, but we decouple
 * the two.
 */

const chalk = require("chalk");

// Renovate requires a GitHub token, which `nwjs-app-config`
// will automatically decrypt.
// const config = require("@nerdwallet/app-config");

// const gitHubToken = config.RENOVATE.AUTH.GITHUB_ACCESS_TOKEN;
// console.log(gitHubToken);

const renovateConfig = require('./config');

console.log(renovateConfig);

console.log(`${chalk.bold('Starting')} Renovate...`)
// require('renovate');

