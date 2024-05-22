const express = require("express");
const cors = require("cors");
const app = express();
const articleRoutes = require("./routes/articleRoutes");

const port = 3000;
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use("/api", articleRoutes);

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
