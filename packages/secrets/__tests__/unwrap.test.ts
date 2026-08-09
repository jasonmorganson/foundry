import { describe, expect, it } from "vitest";
import { unwrapSecrets } from "../unwrap";

describe("unwrapSecrets", () => {
  it("recursively reveals structurally compatible secrets", () => {
    const secret = {
      release: () => "plaintext",
      toJSON: () => "[secret]",
    };

    expect(
      unwrapSecrets({
        array: [secret, { nested: secret }],
        primitive: true,
      } as never)
    ).toEqual({
      array: ["plaintext", { nested: "plaintext" }],
      primitive: true,
    });
  });

  it("leaves a secret-like value intact when release fails", () => {
    const secret = {
      release: () => {
        throw new Error("unavailable");
      },
      toJSON: () => "[secret]",
    };

    expect(unwrapSecrets(secret as never)).toBe(secret);
  });

  it("preserves non-secret objects and primitives", () => {
    expect(
      unwrapSecrets({ nullValue: null, number: 1, object: { value: "safe" } })
    ).toEqual({ nullValue: null, number: 1, object: { value: "safe" } });
  });
});
