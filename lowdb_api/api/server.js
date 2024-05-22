const express = require("express");
const cors = require("cors");
const app = express();
const articleRoutes = require("./routes/articleRoutes");

const port = 3000;

app.use(express.json());
app.use("/api", articleRoutes);

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
