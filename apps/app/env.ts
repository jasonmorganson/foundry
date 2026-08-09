import { keys as analytics } from "@jasonmorganson/analytics/keys";
import { keys as auth } from "@jasonmorganson/auth/keys";
import { keys as collaboration } from "@jasonmorganson/collaboration/keys";
import { keys as database } from "@jasonmorganson/database/keys";
import { keys as email } from "@jasonmorganson/email/keys";
import { keys as flags } from "@jasonmorganson/feature-flags/keys";
import { keys as core } from "@jasonmorganson/next-config/keys";
import { keys as notifications } from "@jasonmorganson/notifications/keys";
import { keys as observability } from "@jasonmorganson/observability/keys";
import { keys as security } from "@jasonmorganson/security/keys";
import { keys as webhooks } from "@jasonmorganson/webhooks/keys";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
  extends: [
    auth(),
    analytics(),
    collaboration(),
    core(),
    database(),
    email(),
    flags(),
    notifications(),
    observability(),
    security(),
    webhooks(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
