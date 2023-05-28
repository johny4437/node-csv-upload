const express = require("express");
const sequelize = require("./utils/db");
const fileRoute = require("./routes/uploadFileRouter");
const app = express();
const path = require("path");
app.use(express.json());
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => console.error("Unable to connect to the database:", error));

app.use(fileRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
