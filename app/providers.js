// app/providers.js
"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init("phc_ouIv4tZkv03bBugFY3YE15eIilXxRF6FOkkB4Q1Ybbk", {
    api_host: "https://us.i.posthog.com",
    person_profiles: "always",
    // capture_pageview: false // Disable automatic pageview capture, as we capture manually
  });
}

export function CSPostHogProvider({ children }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
