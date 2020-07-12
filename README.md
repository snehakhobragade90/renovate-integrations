[app-config token]: https://github.com/NerdWallet/app-configs/blob/master/deployable/renovate-integrations/devops.yml#L9
[giftshop]: https://giftshop.nerdwallet.io/applications/renovate-integrations/
[ops-apps]: https://console.aws.amazon.com/ecs/home?region=us-east-1#/clusters/ops-apps/scheduledTasks
[reconfigure Renovate]: https://sourcegraph.com/github.com/renovatebot/renovate@08922f4fba8cd8ba1ed655092bcbd1976df4675b/-/blob/docs/usage/reconfigure-renovate.md
[Renovate JS Docs]: (https://docs.renovatebot.com/javascript/)
[Renovate onboard PR]: (https://docs.renovatebot.com/configure-renovate/)
[Renovate PAT]: https://docs.renovatebot.com/install-gitlab-app/#generate-a-personal-access-token
[Renovate]: https://github.com/renovatebot/renovate
[semantic-commits]: https://github.com/conventional-changelog/standard-version


# Renovate Integrations

This is the centralized configuration for automating dependency upgrades across the NerdWallet codebase with [Renovate].

This is the repository to onboard your project to profit from automatic dependency updates.

## Onboarding

If you just want to onboard your project, [edit `config.js` right here](https://github.com/NerdWallet/renovate-integrations/edit/master/config.js) and add your repo, e.g:

```js
// config.js
module.exports = {
  repositories: [
    // ... pre-existing projects
    "NerdWallet/your-project-here"
    // ...
  ],
};
```

BuildNerd will send an onboarding PR there the next time it runs (currently every two hours). 

### Auto Changelog

In your repo's `Jenkinsfile`, be sure you have Indy set to automatically manage the `CHANGELOG.md` and `VERSION` files:

```groovy
indy {
    base = 'ubuntu-2018.12.18'
    install = true  // Everyone should have this so that when a new version of Indy causes an issue with your repo, you have the ability to set this false and and use the stable version while the problem gets fixed.
    env = [
        "INDY_STANDARD_CHANGELOG=yes",
        "INDY_STANDARD_VERSION=yes",
    ]
}

```

### Auto Merge

In your repo's `CODEOWNERS` file, add this line:
```
* @NerdWallet/source-code-bots
```

That will make it so that if BuildNerd gets an LGTM on an update PR and the PR passes tests, BuildNerd will merge the PR automatically.  See [this example PR](https://github.com/NerdWallet/yak/pull/587).

Without this, BuildNerd will not automatically merge PRs even if they are approved and pass tests.

## Usage

This project is deployed with [Gift Shop][giftshop] and the `index.js` entry point is invoked on a scheduled cadence in a [ProdEng cluster][ops-apps]. It periodically opens pull requests against repositories that've opted in.

Renovate supports most languages we use at NerdWallet, including:
- Go
- JavaScript
- Python


### Development

<details><summary>How do I test Renovate locally?</summary>

#### Local Testing

Until we've widespread adoption, repos will opt in to automated dependency goodness.

For local testing, you can isolate specific repos in

```js
// config.js
module.exports = {
  // ...
  repositories: [
    // Any github repo e.g. NerdWallet/yak; case sensitive.
  ],
};
```

 and then invoke Renovate with a [GitHub personal access token][Renovate PAT],

```sh
./node_modules/.bin/renovate --token=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN
```

This should open a PR against that repo in question. See the [Renovate onboard PR] for more details.

We rely on a GitHub token that's encrypted in a [`devops.yml` app-config][app-config token]. If you'd like to experiment with decrypting tokens locally, modify `builds/config.json` and prepend the script with

```sh
AWS_PROFILE=nwdev npm start
```

</details>

<details><summary>How do I monitor Renovate once it's deployed?</summary>

#### Observability

We run Renovate as a scheduled task within ECS. Here are some useful links:
- [Logs](https://elk.nerdwallet.io/goto/2092febf617740546171995d530f7413)

</details>


## Learn More

_To minimize duplication, this README focuses on NerdWallet-specific info and doesn't repeat Renovate's docs, e.g. [Renovate JS docs]._

### FAQ
<details><summary>How do I reconfigure my onboarding PR?</summary>

Renovate matches any PR (even closed) with the name "Configure Renovate". To reconfigure the onboarding, [rename that PR][reconfigure Renovate] and re-run Renovate.

</details>

### Related Links
- [Automated Dependency Bumps RFC](https://docs.google.com/document/d/13lON_1DHZKOuL839nNzQqKvI91Bd9Z1fazt9ZdiCwz4/edit)
