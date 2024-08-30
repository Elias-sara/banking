import { withSentryConfig } from "@sentry/nextjs";

// Define your Next.js configuration here
const yourNextConfig = {
  // Example Next.js config options
  reactStrictMode: true,
  swcMinify: true,
  // Add other Next.js config options if needed
};

// Define Sentry configuration options
const sentryConfig = {
  org: "elias-bank",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors
  automaticVercelMonitors: true,
};

// Export the configuration wrapped with Sentry
export default withSentryConfig(yourNextConfig, sentryConfig);
