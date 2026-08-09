import { describe, expect, it } from "vitest";

import { NuqsAdapter } from "../adapter";
import { parseAsString } from "../index";
import { createLoader } from "../server";

describe("public entry points", () => {
  it("makes the root, adapter, and server APIs importable", () => {
    expect(parseAsString).toBeDefined();
    expect(NuqsAdapter).toBeDefined();
    expect(createLoader).toBeTypeOf("function");
  });
});
