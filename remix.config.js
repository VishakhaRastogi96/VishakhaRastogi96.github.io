const { createRoutesFromFolders } = require("@remix-run/v1-route-convention");

/** @type {import("@remix-run/dev").AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [],
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  serverModuleFormat: "cjs",
  future: {
    // makes the warning go away in v1.15+ and enable/disable v2 updations
    v2_routeConvention: true,
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
  },
  routes(defineRoutes) {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes, {
      ignoredFilePatterns: ["**/.*"],
    });
  },
};
