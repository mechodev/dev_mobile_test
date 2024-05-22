const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

// Initialise la base de données avec des données par défaut si elles n'existent pas
db.defaults({ items: [] }).write();

module.exports = db;
