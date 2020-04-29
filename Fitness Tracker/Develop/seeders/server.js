//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

//Directory
app.use(compression());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});