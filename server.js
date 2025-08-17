// app.js
const express = require("express");
const session = require("express-session");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // para CSS/JS estático

app.use(
  session({
    secret: "segredo_super_importante",
    resave: false,
    saveUninitialized: false,
  })
);

// Rotas
app.use("/", authRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

// Página home (pública)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
