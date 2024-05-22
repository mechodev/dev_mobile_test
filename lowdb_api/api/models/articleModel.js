const db = require("../config/db");

exports.getAll = () => {
  return db.get("articles").value();
};
