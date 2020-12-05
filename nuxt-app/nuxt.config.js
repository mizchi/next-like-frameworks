export default {
  buildModules: ["@nuxt/typescript-build"],
  serverMiddleware: [{ path: "/api", handler: "~/api/index.ts" }],
};
