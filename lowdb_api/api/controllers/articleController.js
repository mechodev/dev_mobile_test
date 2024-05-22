const db = require("../config/db");

exports.getItems = (req, res) => {
  const items = db.get("articles").value();
  res.json(items);
};
