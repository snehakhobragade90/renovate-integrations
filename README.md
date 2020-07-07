[app-config token]: https://github.com/NerdWallet/app-configs/blob/master/deployable/renovate-integrations/devops.yml#L9
[giftshop]: https://giftshop.nerdwallet.io/applications/renovate-integrations/
[Renovate]: https://github.com/renovatebot/renovate
[Renovate JS Docs]: (https://docs.renovatebot.com/javascript/)
[Renovate onboard PR]: (https://docs.renovatebot.com/configure-renovate/)
[Renovate PAT]: https://docs.renovatebot.com/install-gitlab-app/#generate-a-personal-access-token
[reconfigure Renovate]: https://sourcegraph.com/github.com/renovatebot/renovate@08922f4fba8cd8ba1ed655092bcbd1976df4675b/-/blob/docs/usage/reconfigure-renovate.md


# Renovate Integrations

This is the centralized configuration for automating dependency upgrades across the NerdWallet codebase with [Renovate].

This is the repository to onboard your project to profit from automatic dependency updates.

## Get Started

To onboard your project to Renovate, we take a similar approach
to onboarding new projects to the `app-configs` project:

```sh
indy get renovate-integrations
cd renovate-integrations
git checkout -b onboard/project-name
```

Now update the `repositories` field in `config.js`, e.g.

```js
// config.js
module.exports = {
  repositories: [
    // ... pre-existing projects
    "NerdWallet/project-name"
  ],
};
```

Push your change,

```sh
git add config.js && git commit -m "feat: onboard project-name to Renovate" && git push
```

and open your pull request for review!


## Usage

The `index.js` entry point is intended to run on a cadence in a [DevOps (ProdEng) cluster][giftshop], to periodically open pull requests against repositories that've opted in.

Renovate will support most languages we use at NerdWallet, including:
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


## Learn More

_To minimize duplication, this README focuses on NerdWallet-specific info and doesn't repeat Renovate's docs, e.g. [Renovate JS docs]._

### FAQ
<details><summary>How do I reconfigure my onboarding PR?</summary>

Renovate matches any PR (even closed) with the name "Configure Renovate". To reconfigure the onboarding, [rename that PR][reconfigure Renovate] and re-run Renovate.

</details>

### Related Links
- [Automated Dependency Bumps RFC](https://docs.google.com/document/d/13lON_1DHZKOuL839nNzQqKvI91Bd9Z1fazt9ZdiCwz4/edit)


