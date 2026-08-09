import { initializeAnalytics } from "@jasonmorganson/analytics/instrumentation-client";
import { initializeSentry } from "@jasonmorganson/observability/client";

initializeSentry();
initializeAnalytics();

export { onRouterTransitionStart } from "@jasonmorganson/observability/client";
