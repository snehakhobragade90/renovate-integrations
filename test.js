#!/usr/bin/env node

/**
 * Simple test harness to use a personal
 * access token from GitHub for local testing.
 *
 * This script will look for a local,
 *
 * .github_token
 *
 * file, but you can always just pass it in directly.
 */

const chalk = require("chalk");
const { execSync } = require("child_process");
const fs = require("fs");

if (process.env.NODE_ENV === "test") {
  console.log("Testing...");

  const personalAccessToken = fs.readFileSync(".github_token");
  if (!personalAccessToken) {
    console.error("Couldn't find a local GitHub token.");
    process.exit(1);
  }

  execSync(`./node_modules/.bin/renovate --token=${personalAccessToken}`, {
    stdio: "inherit",
  });
}
