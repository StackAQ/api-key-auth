const express = require("express");
const dotenv = require("dotenv");
const apiKeyAuth = require("./middleware/apiKeyAuth");
const protectedRoute = require("./routes/protectedRoute");

dotenv.config();

const app = express();

app.use("/protected", apiKeyAuth, protectedRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the API KEY AUTH, Use /protected with the API Key.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
