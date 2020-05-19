module.exports = {
  // logLevel: "debug",
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
    // "NerdWallet/nwpy-gunicorn",
    // "NerdWallet/features.nerdwallet",
    // "NerdWallet/user-data-platform",
    // "NerdWallet/identity.nerdwallet",
    // "NerdWallet/indy",
    // "NerdWallet/logger.nerdwallet",
    "NerdWallet/yak",
  ],
  separateMultipleMajor: true,
  unicodeEmoji: true,
};
