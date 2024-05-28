const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@styles": "src/styles",
    "@assets": "src/assets",
    "@pages": "src/pages",
    "@helpers": "src/helpers",
    "@store": "src/store",
    "@api": "src/api"
  })(config);
  return config;
};
