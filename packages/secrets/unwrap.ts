import type { ContainsSecretsValue } from "./types";

interface ReleasableSecretShape {
  release: () => string;
  toJSON: () => string;
}

const isSecret = (value: unknown): value is ReleasableSecretShape => {
  if (value === null || typeof value !== "object") {
    return false;
  }

  const potentiallySecret = value as Partial<ReleasableSecretShape>;
  return (
    typeof potentiallySecret.release === "function" &&
    typeof potentiallySecret.toJSON === "function"
  );
};

/**
 * Recursively reveals Secret values. The returned value may contain plaintext;
 * never pass it to logs, telemetry, or client-visible responses.
 */
export function unwrapSecrets(configValue: ContainsSecretsValue): unknown {
  if (configValue === null || configValue === undefined) {
    return configValue;
  }

  if (isSecret(configValue)) {
    try {
      return configValue.release();
    } catch {
      return configValue;
    }
  }

  if (Array.isArray(configValue)) {
    return configValue.map((item) =>
      unwrapSecrets(item as ContainsSecretsValue)
    );
  }

  if (typeof configValue === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(configValue)) {
      result[key] = unwrapSecrets(value as ContainsSecretsValue);
    }
    return result;
  }

  return configValue;
}
