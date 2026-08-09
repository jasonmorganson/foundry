# next-forge relationship

Foundry began from `vercel/next-forge` commit `f189de79ceef7c1ef69f61f12e272f99b4cdb699` (2026-08-09) under its MIT license.

## Two lanes

- `jasonmorganson/next-forge` remains the fork for changes intended for upstream contribution. Refresh it from `vercel/next-forge` and submit upstream changes there.
- `jasonmorganson/foundry` is an independent public starter. It evaluates upstream changes deliberately and does not merge upstream automatically.

## Sync review

Run `git fetch upstream main` followed by `git log --left-right --count HEAD...upstream/main`. Record the reviewed upstream commit, selected changes, conflicts with Foundry policy, and validation results in the pull request. The scheduled GitHub workflow reports divergence; it never changes Foundry automatically.

## Independent implementation later

The future independent implementation is out of scope for this repository’s first release. Its planning inputs are Foundry’s module boundaries, optional-integration contracts, and compatibility-test results; it must not inherit next-forge code or history by default.
