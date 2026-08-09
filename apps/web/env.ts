import { keys as cms } from "@jasonmorganson/cms/keys";
import { keys as email } from "@jasonmorganson/email/keys";
import { keys as flags } from "@jasonmorganson/feature-flags/keys";
import { keys as core } from "@jasonmorganson/next-config/keys";
import { keys as observability } from "@jasonmorganson/observability/keys";
import { keys as rateLimit } from "@jasonmorganson/rate-limit/keys";
import { keys as security } from "@jasonmorganson/security/keys";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
  extends: [
    cms(),
    core(),
    email(),
    observability(),
    flags(),
    security(),
    rateLimit(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
