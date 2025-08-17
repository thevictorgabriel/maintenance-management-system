const path = require("path");

exports.showHome = (req, res) => {
  // Página HTML do usuário comum
  res.sendFile(path.join(__dirname, "..", "views", "userHome.html"));
};
