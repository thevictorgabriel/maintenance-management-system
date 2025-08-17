const path = require("path");

exports.showAdminDashboard = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "adminHome.html"));
};
