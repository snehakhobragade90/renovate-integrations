/**
 * This file contains specific configuration options
 * for Renovate. We can opt in to specific repos,
 * ignore packages, set the GitHub personal access token, etc here.
 */

 // Renovate requires a GitHub token, which `nwjs-app-config`
// will automatically decrypt from the devops.yml app-config.
const config = require("@nerdwallet/app-config");

module.exports = {
  ignoreDeps: [
    "babel-eslint",
    "babel-jest",
    "eslint",
    "eslint-config-airbnb",
    "eslint-config-prettier",
    "eslint-plugin-jest",
    "prettier",
  ],
  logLevel: "debug",
  logFile: "renovate.log",
  npmrc: "registry=https://artifactory.nerdwallet.io/artifactory/api/npm/npm",
  packageRules: [
    {
      updateTypes: ["minor", "patch", "pin", "digest"],
      automerge: true,
    },
  ],
  pipenv: {
    enabled: true,
  },
  postUpdateOptions: ["gomodTidy"],
  prConcurrentLimit: 1,
  python: {
    registryUrls: [
      "https://artifactory.nerdwallet.io/artifactory/api/pypi/pypi-public-test/simple/",
    ],
  },
  repositories: [
    // Go and Python
    "NerdWallet/yak",
    // "NerdWallet/features.nerdwallet",
    // "NerdWallet/identity.nerdwallet",
    // "NerdWallet/indy",
    // "NerdWallet/logger.nerdwallet",
    // "NerdWallet/nwpy-gunicorn",
    // "NerdWallet/user-data-platform",

    // JavaScript
    "NerdWallet/nwjs-deprecate",
    "NerdWallet/nwjs-yakclient"
  ],
  // TODO: ignoring for now; we should align this with
  // the scheduled cron after testing
  // schedule: ["after 9am and before 5pm on every weekday"],
  separateMultipleMajor: true,
  // We set the token directly in the config as opposed
  // to a command line arg, as we want to avoid
  // logging the token. For more details on the PAT, see
  // https://github.com/renovatebot/renovate/blob/master/docs/development/self-hosting.md#github-enterprise
  token: config.RENOVATE.AUTH.GITHUB_ACCESS_TOKEN,
  unicodeEmoji: true,
};
