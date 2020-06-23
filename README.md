# Renovate Integrations

This is a collection of configurations for automating dependency upgrades with [Renovate](https://github.com/renovatebot/renovate).

## Get Started

Renovate will support most languages we use at NerdWallet, including:
- Python
- Go
- JavaScript

### JavaScript

_In an effort to minimize duplication, we won't repeat what the [Renovate JS docs](https://docs.renovatebot.com/javascript/) already note. Other
information will be NerdWallet-specific._

Until we've widespread adoption, we'll be opting in to repos. There are a couple steps to onboard your repo

1. [Onboard PR](https://docs.renovatebot.com/configure-renovate/)

For testing renovate locally, you can run something like,

```sh
./node_modules/.bin/renovate --token=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN
```

## FAQ


<details><summary>How do I reconfigure my onboarding PR?</summary>

Renovate matches any PR (even closed) with the name "Configure Renovate". To reconfigure the onboarding, [rename that PR][reconfigure Renovate] and re-run Renovate.

</details>

## Related
- [Automated Dependency Bumps RFC](https://docs.google.com/document/d/13lON_1DHZKOuL839nNzQqKvI91Bd9Z1fazt9ZdiCwz4/edit)

[reconfigure Renovate]: https://sourcegraph.com/github.com/renovatebot/renovate@08922f4fba8cd8ba1ed655092bcbd1976df4675b/-/blob/docs/usage/reconfigure-renovate.md


