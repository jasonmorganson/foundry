# Foundry

Foundry is Jason Morganson’s public, full-stack Next.js platform starter. It starts from the complete [next-forge](https://github.com/vercel/next-forge) application and package topology, then consolidates reusable foundations through explicit source, security, and redistribution review.

## What is included

- Deployable apps for authenticated product, marketing, API, email, documentation, Storybook, and database studio workflows.
- Internal `@jasonmorganson/*` workspace packages for the complete next-forge platform catalog: authentication, database, design system, payments, email, CMS, analytics, observability, security, storage, SEO, feature flags, internationalization, notifications, collaboration, AI, rate limiting, and webhooks.
- Optional integrations that degrade safely when their environment variables are absent.

## Toolchain

Node 24 is the runtime contract. [mise](https://mise.jdx.dev/) pins the toolchain; Aube is the canonical installer and uses `pnpm-lock.yaml` as the committed lockfile. Nub is supported as a Node-compatible runner and installer. pnpm and Bun are secondary compatibility paths; they must not modify `pnpm-lock.yaml`.

```sh
mise install
aubr check:foundry
aubr check
aubr test
aubr build
```

Run an app with `aubr --filter app dev` or use Nub’s pnpm-compatible workspace filters, for example `nub --filter app run dev`.

## Adding a module

Read [the module intake checklist](docs/module-intake.md) before adding a package, provider, migration, webhook, or product extension. Every imported candidate must be entered in [the source ledger](docs/source-ledger.md) and pass the public-extraction gate.

## Upstream and future work

Foundry began at next-forge commit `f189de79ceef7c1ef69f61f12e272f99b4cdb699`. The separate [`jasonmorganson/next-forge`](https://github.com/jasonmorganson/next-forge) fork remains the upstream-contribution lane. Read [the relationship and sync process](docs/upstream.md) before pulling in an upstream change.

An independent implementation is deliberately deferred. Foundry first establishes durable module boundaries, integration contracts, and compatibility evidence.

## License

MIT. See [license.md](license.md).
