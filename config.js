/**
 * This file contains specific configuration options
 * for Renovate. We can opt in to specific repos,
 * ignore packages, etc here.
 */

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
  ],
  schedule: ["after 9am and before 5pm on every weekday"],
  separateMultipleMajor: true,
  unicodeEmoji: true,
};
