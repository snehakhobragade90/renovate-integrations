#!/usr/bin/env node

/**
 * Script that can be called to invoke Renovate
 * with our necessary integrations. This could
 * be possible from within config.js, but we decouple
 * the two.
 */

const chalk = require("chalk");

if (process.env.NODE_ENV === "test") {
  console.log(`${chalk.bold("Testing...")}`);
  process.exit(0);
}

// Renovate requires a GitHub token, which `nwjs-app-config`
// will automatically decrypt.
const config = require("@nerdwallet/app-config");

// We then configure it to be available to use before
// invoking Renovate. For more details, see
// https://github.com/renovatebot/renovate/blob/master/docs/development/self-hosting.md#github-enterprise
const renovateConfig = require("./config");
renovateConfig.token = config.RENOVATE.AUTH.GITHUB_ACCESS_TOKEN;

console.log(`${chalk.green("Starting Renovate...")}`);
require("renovate");
