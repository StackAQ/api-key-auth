const express = require("express");
const dotenv = require("dotenv");
const apiKeyAuth = require("./middleware/apiKeyAuth");
const protectedRoute = require("./routes/protectedRoute");

dotenv.config();

const app = express();

app.use(express.static("public"));

app.use("/protected", apiKeyAuth, protectedRoute);

app.get("/", (req, res) => {
  res.send("Visit / to test the API Key UI.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
