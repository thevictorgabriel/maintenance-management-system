exports.ensureAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  return res.redirect("/login");
};

// Só permite caso seja administrador (adm === true)
exports.ensureAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.adm === true) {
    return next();
  }
  return res.redirect("/login");
};
