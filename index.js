const app = require("./app");
require("dotenv").config();

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Listening to HTTP server on port ${PORT}`);
});
