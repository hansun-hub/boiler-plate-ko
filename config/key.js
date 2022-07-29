if (process.env.NODE_ENV === "production") {
  module.export = request("./prod");
} else {
  module.exports = require("./dev");
}
