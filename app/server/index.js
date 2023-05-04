const app = require("./app.js");
const dev = require("./config/config.js");
require("./config/database");

app.listen(dev.PORT, () => {
  console.log(`Server is running at http://localhost:${dev.PORT}`);
});
