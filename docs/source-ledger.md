# Source ledger

Foundry is public. This ledger is the required record for every candidate considered for import from a local repository.

## Required review fields

| Field | Requirement |
| --- | --- |
| Source | Repository, commit, and file or package path. |
| Candidate | Concise capability description and dependency list. |
| Tier | Foundation, platform module, product extension, or exclusion. |
| Rights | License and owner/redistribution approval. |
| Security | Secret scan, tenant-data review, and deployment-identity review. |
| Disposition | Import, reimplement, upstream-only, defer, or exclude. |
| Destination | Foundry package or documentation path, when imported. |

## Candidate inventory

| Source | Candidate | Tier | Disposition | Destination |
| --- | --- | --- | --- |
| `vercel/next-forge@f189de7` | Full apps and platform-package baseline | Foundation and platform modules | Imported as Foundry baseline under MIT | Existing `apps/*`, `packages/*` |
| `jasonmorganson/the-model-channel` | Next config, TypeScript config, design system, probes, realtime, data sources | Foundation and platform modules | Compare and selectively reimplement after review | Pending intake |
| `pyleeai/pylee` | Historical next-forge package customizations | Foundation and platform modules | Compare with upstream; do not copy without rights review | Pending intake |
| `withAutograph/ag2` | App config, agent blocks, observability, SQL, matching, and app-generator libraries | Product extensions | Candidate extraction requires owner, license, security, and tenant review | Pending intake |
| `withAutograph/arrusted-development` | App runtime, auth, integrations, microfrontends, domain libraries, and Vite config | Product extensions | Candidate extraction requires owner, license, security, and tenant review | Pending intake |
| `mcpapp/eve`, `mcpapp/mcpapp`, `mcpapp/examples` | MCP application tooling | Platform modules | Discovery only until package boundary and rights are reviewed | Pending intake |
| `jasonmorganson/dotfiles`, `etc`, `symphony-k8s`, `the-model-channel` support repos | Developer environment and deployment patterns | Foundation | Reimplement configuration patterns only; never import credentials or deployment identities | Pending intake |
| Other local checkouts | Product, fork, legacy, or non-JavaScript repositories | Exclusion | No extraction unless a concrete candidate passes this ledger | None |

## Extraction gate

No source is copied until this row is complete. Public release requires recorded license/owner approval, a clean secret scan, no tenant or customer data, no production/deployment identity, declared runtime dependencies, and a test proving the candidate works outside its source product.

Use `docs/module-intake.md` for module-level intake and `docs/upstream.md` for next-forge-derived changes.
