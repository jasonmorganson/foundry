import { readFile } from "node:fs/promises";

const ledger = await readFile(
  new URL("../docs/source-ledger.md", import.meta.url),
  "utf8"
);
const requiredHeadings = [
  "## Required review fields",
  "## Candidate inventory",
  "## Extraction gate",
];

const missing = requiredHeadings.filter((heading) => !ledger.includes(heading));

if (missing.length > 0) {
  throw new Error(`Source ledger is missing: ${missing.join(", ")}`);
}

if (!ledger.includes("No source is copied until this row is complete.")) {
  throw new Error("Source ledger must retain the public-extraction gate.");
}
