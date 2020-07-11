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
  logLevel: "info",
  logFile: "renovate.log",
  npmrc: "registry=https://artifactory.nerdwallet.io/artifactory/api/npm/npm",
  packageRules: [
    {
      updateTypes: ["minor", "patch", "pin", "digest"],
      automerge: true,
    },
    {
      groupName: "core NW Go libs",
      languages: ["golang"],
      packagePatterns: [
         "nwgo-api",
         "nwgo-app-config",
         "nwgo-deployable",
         "nwgo-echo",
         "nwgo-encrypt",
         "nwgo-http-api-client",
         "nwgo-identity-sdk",
         "nwgo-logging",
         "nwgo-metrics",
         "nwgo-resty",
         "nwgo-yakclient",
      ],
    },
    {
      groupName: "popular Go libs",
      languages: ["golang"],
      packagePatterns: [
         "^cloud.google.com/go",
         "^github.com/aws/aws-sdk-go",
         "^github.com/google",
         "^github.com/jinzhu/gorm",
         "^github.com/golang/protobuf",
         "^github.com/hashicorp/consul",
         "^github.com/jpillora/backoff",
         "^github.com/labstack/echo/v4",
         "^github.com/pkg",
         "^github.com/satori/go.uuid",
         "^github.com/sirupsen/logrus",
         "^github.com/stretchr",
         "^logur.dev/",
      ],
    },
    {
      groupName: "popular Python libs",
      languages: ["python"],
      packagePatterns: [
         "^aniso8601",
         "^billiard",
         "^bcrypt",
         "^blinker",
         "^boto",
         "^cachetools",
         "^certifi",
         "^cffi",
         "^chardet",
         "^click",
         "^colorlog",
         "^cryptography",
         "^datadog",
         "^decorator",
         "^docutils",
         "^flask",
         "^freezegun",
         "^future",
         "^fuzzysearch",
         "^fuzzywuzzy",
         "^gevent",
         "^google-api-python-client",
         "^gql",
         "^gunicorn",
         "^graphql-core",
         "^greenlet",
         "^httplib2",
         "^jinja2",
         "^jmespath",
         "^idna",
         "^ipaddress",
         "^itsdangerous",
         "^lz4",
         "^mako",
         "^meld3",
         "^mandrill",
         "^markupsafe",
         "^newrelic",
         "^numpy",
         "^oauth2client",
         "^pandas",
         "^promise",
         "^pyasn1",
         "^pycparser",
         "^pycryptodome",
         "^pyjwt",
         "^pyopenssl",
         "^python-crfsuite",
         "^python-dateutil",
         "^python-editor",
         "^python-jose",
         "^python-json-logger",
         "^python-levenshtein",
         "^pytz",
         "^pyyaml",
         "^raven",
         "^ratelimiter",
         "^rsa",
         "^rx",
         "^s3transfer",
         "^schematics",
         "^scipy",
         "^sklearn-crfsuite",
         "^setproctitle",
         "^setuptools",
         "^simplejson",
         "^six",
         "^typing",
         "^urllib",
         "^uuid",
         "^werkzeug",
         "^requests",
      ],
    },
    {
      groupName: "core NW Python libs",
      languages: ["python"],
      packagePatterns: [
        "identity-acls",
        "nw-api",
        "nwutils",
        "nwpy-app-config",
        "nwpy-awskms",
        "nwpy-cli",
        "nwpy-crypto",
        "nwpy-data-api",
        "nwpy-deployable",
        "nwpy-gunicorn",
        "nwpy-http-sdks",
        "nwpy-logging",
        "nwpy-logical-models",
        "nwpy-nwmonitor",
        "nwpy-service-discovery",
        "nwpy-validation",
        "nwpy-yakclient",
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
