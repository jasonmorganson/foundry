import { describe, expect, it } from "vitest";
import { searchParamsCacheGet } from "../lib/cache";
import { loadSearchParams } from "../lib/loader";
import { options } from "../lib/options";

describe("Foundry Nuqs defaults", () => {
  it("loads Pylee-compatible defaults", () => {
    expect(loadSearchParams({})).toEqual({
      edit: false,
      limit: 10,
      order: "asc",
      page: 1,
      query: "",
      sort: "name",
    });
  });

  it("loads supplied values", () => {
    expect(
      loadSearchParams({
        edit: "true",
        limit: "25",
        order: "desc",
        page: "3",
        query: "foundry",
        sort: "updatedAt",
      })
    ).toEqual({
      edit: true,
      limit: 25,
      order: "desc",
      page: 3,
      query: "foundry",
      sort: "updatedAt",
    });
  });

  it("uses non-shallow navigation", () => {
    expect(options).toEqual({ shallow: false });
  });

  it("returns the caller fallback before the cache has parsed search params", () => {
    expect(searchParamsCacheGet("page", 42)).toBe(42);
  });
});
