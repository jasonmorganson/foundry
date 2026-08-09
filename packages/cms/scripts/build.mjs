import { spawnSync } from "node:child_process";

if (!process.env.BASEHUB_TOKEN) {
  console.log(
    "Skipping BaseHub generation because BASEHUB_TOKEN is not configured."
  );
  process.exit(0);
}

const result = spawnSync("basehub", ["build"], {
  stdio: "inherit",
  shell: true,
});
process.exit(result.status ?? 1);
