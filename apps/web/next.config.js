const withTM = require("next-transpile-modules")(["store", "graphql-api"]);

module.exports = withTM({
  reactStrictMode: true,
});
