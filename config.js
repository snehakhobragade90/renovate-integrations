module.exports = {
  // logLevel: "debug",
  logFile: "renovate.log",
  npmrc: "registry=https://artifactory.nerdwallet.io/artifactory/api/npm/npm",
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
    // "NerdWallet/nwpy-gunicorn",
    // "NerdWallet/features.nerdwallet",
    // "NerdWallet/user-data-platform",
    // "NerdWallet/identity.nerdwallet",
    // "NerdWallet/indy",
    // "NerdWallet/logger.nerdwallet",
    "NerdWallet/yak",
  ],
  schedule: ["after 9am and before 5pm on every weekday"],
  separateMultipleMajor: true,
  unicodeEmoji: true,
};
