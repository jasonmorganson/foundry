import type { Secret } from "@transcend-io/secret-value";

export type SecretOrPrimitive =
  | string
  | number
  | boolean
  | null
  | Secret<string>;

export interface ContainsSecretsObject
  extends Record<string, ContainsSecretsValue> {}

export interface ContainsSecretsArray extends Array<ContainsSecretsValue> {}

export type ContainsSecretsValue =
  | SecretOrPrimitive
  | ContainsSecretsObject
  | ContainsSecretsArray;
