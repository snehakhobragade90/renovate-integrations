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
  pipenv: {
    enabled: true,
  },
  postUpdateOptions: ["gomodTidy"],
  python: {
    registryUrls: [
      "https://artifactory.nerdwallet.io/artifactory/api/pypi/pypi-public-test/simple/",
    ],
  },
  repositories: [
    // Python
    // "NerdWallet/identity.nerdwallet",
    // "NerdWallet/indy",
    // "NerdWallet/logger.nerdwallet",
    // "NerdWallet/yak",
    // "NerdWallet/nwpy-gunicorn",
    // "NerdWallet/features.nerdwallet",
    // "NerdWallet/user-data-platform",

    // JavaScript
    "NerdWallet/nwjs-deprecate",
  ],
  separateMultipleMajor: true,
  unicodeEmoji: true,
};
