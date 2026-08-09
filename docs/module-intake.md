# Optional module intake

Use this checklist before adding, extracting, or removing a Foundry module.

1. Add a completed row to `docs/source-ledger.md` with source commit, rights, and security review.
2. Create or update one `@jasonmorganson/*` workspace package; keep application-specific code in an app or an explicit product-extension package.
3. Declare runtime, peer, and development dependencies directly. Add required environment variables to the package or consuming app’s `.env.example` and validate them in `keys.ts`.
4. Provide the smallest provider setup, schema migration, seed, webhook, or background-job instructions required to operate the module.
5. Add unit coverage plus an app smoke test for the enabled path. Verify the default path remains functional when optional provider variables are absent.
6. Document removal: dependencies, environment variables, routes, migrations, webhooks, and generated artifacts to delete or roll back.
7. Run `aubr check:foundry`, `aubr check`, `aubr test`, and `aubr build` before review.
