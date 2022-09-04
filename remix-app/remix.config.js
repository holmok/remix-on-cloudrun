/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  async routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/remix/*", "index.tsx");
    });
  }
};
