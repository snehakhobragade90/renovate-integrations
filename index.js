// Renovate requires a GitHub token, which `nwjs-app-config`
// will automatically decrypt
const config = require("@nerdwallet/app-config");

// We then configure it to be available to use before
// invoking Renovate. For more details, see
// https://github.com/renovatebot/renovate/blob/master/docs/development/self-hosting.md#github-enterprise
const gitHubToken = config.RENOVATE.AUTH.GITHUB_ACCESS_TOKEN;

console.log(`${chalk.green("Starting Renovate...")}`);
execSync(`./node_modules/.bin/renovate --token=${gitHubToken}`);
