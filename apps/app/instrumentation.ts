import { initializeSentry } from "@jasonmorganson/observability/instrumentation";

export const register = initializeSentry;
export { onRequestError } from "@jasonmorganson/observability/instrumentation";
