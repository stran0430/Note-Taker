const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTES
require("./Routes/apiRoutes")(app);
require("./Routes/htmlRoutes")(app);

// Listener
app.listen(PORT, () => {
  console.log(`API server is ready on port ${PORT}!`);
});
