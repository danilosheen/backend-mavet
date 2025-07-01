const express = require("express");
const cors = require("cors");

// Implementação das rotas
const doencasRoutes = require("./routes/doencasRoutes");
const remediosRoutes = require("./routes/remediosRoutes");


const app = express();
// app.use(cors({
//   origin: ['http://localhost:4200']
// }));

app.use(cors({
  origin: '*'
}));

app.use(express.json());

// use routes
app.use("/api", doencasRoutes);
app.use("/api", remediosRoutes);


module.exports = app;