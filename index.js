/**
 * This is the entry point to the Renovate call,
 * relying on the Renovate config.js for options.
 */

const chalk = require('chalk');
const { execSync } = require("child_process");

console.log(`${chalk.green("Starting Renovate...")}`);
execSync(`./node_modules/.bin/renovate`);
