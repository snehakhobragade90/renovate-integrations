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
    {
      "groupName": "basic Python libs",
      "packagePatterns": [
         "^aniso8601",
         "^blinker",
         "^boto",
         "^certifi",
         "^click",
         "^decorator",
         "^docutils",
         "^flask",
         "^jmespath",
         "^idna",
         "^lz4",
         "^python-dateutil",
         "^pytz",
         "^six",
         "^urllib",
         "^werkzeug",
         "^requests",
      ],
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
    // Please keep this list alphabetized.
    // See https://nerdwallet.slack.com/archives/CU7H81PTP/p1594396900059600.
    "NerdWallet/eng-blog-client",
    "NerdWallet/fdp-source-qa",
    "NerdWallet/nw_api",
    "NerdWallet/nwgo-anti-fraud",
    "NerdWallet/nwgo-api",
    "NerdWallet/nwgo-app-config",
    "NerdWallet/nwgo-deployable",
    "NerdWallet/nwgo-echo",
    "NerdWallet/nwgo-encrypt",
    "NerdWallet/nwgo-fdp-sdk",
    "NerdWallet/nwgo-http-api-client",
    "NerdWallet/nwgo-identity-sdk",
    "NerdWallet/nwgo-logging",
    "NerdWallet/nwgo-marketplace-client",
    "NerdWallet/nwgo-metrics",
    "NerdWallet/nwgo-resty",
    "NerdWallet/nwjs-deprecate",
    "NerdWallet/nwjs-yakclient",
    "NerdWallet/nwpy-app-config",
    "NerdWallet/nwpy-data-api",
    "NerdWallet/nwpy-logical-models",
    "NerdWallet/nwpy-logging",
    "NerdWallet/nwpy-http-sdks",
    "NerdWallet/nwpy-nwmonitor",
    "NerdWallet/nwpy-yakclient",
    "NerdWallet/nwutils",
    "NerdWallet/renovate-integrations",
    "NerdWallet/snyk-integrations",
    "NerdWallet/yak",
    "NerdWallet/yak-herder",
    "NerdWallet/yak-tap",
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
