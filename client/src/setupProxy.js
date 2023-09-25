const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth/login", // The base path for the proxy
    createProxyMiddleware({
      target: "https://social-sphere-xcjh.onrender.com", // The URL of the API server you want to proxy to
      changeOrigin: true,
    })
  );
};
