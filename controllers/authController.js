const path = require("path");
const User = require("../models/userModel");

exports.showLogin = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "login.html"));
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findByEmailAndPassword(email, password);
  if (!user) return res.redirect("/login");

  // Agora salvamos na sessão o valor do campo adm
  req.session.user = {
    id: user.id,
    adm: user.adm === 1 ? true : false,
  };

  // Redireciona de acordo com o valor de adm
  if (req.session.user.adm) {
    return res.redirect("/admin");
  } else {
    return res.redirect("/user");
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => res.redirect("/"));
};
