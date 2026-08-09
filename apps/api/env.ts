import { keys as analytics } from "@jasonmorganson/analytics/keys";
import { keys as auth } from "@jasonmorganson/auth/keys";
import { keys as database } from "@jasonmorganson/database/keys";
import { keys as email } from "@jasonmorganson/email/keys";
import { keys as core } from "@jasonmorganson/next-config/keys";
import { keys as observability } from "@jasonmorganson/observability/keys";
import { keys as payments } from "@jasonmorganson/payments/keys";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
  extends: [
    auth(),
    analytics(),
    core(),
    database(),
    email(),
    observability(),
    payments(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
