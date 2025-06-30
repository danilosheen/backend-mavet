const express = require("express");
const cors = require("cors");

// Implementação das rotas
// const pdfRoutes = require("./routes/routes");
// const clienteRoutes = require("./routes/clienteRoutes");


const app = express();
// app.use(cors({
//   origin: ['http://localhost:4200']
// }));

app.use(cors({
  origin: '*'
}));

app.use(express.json());

// use routes
// app.use("/api/pdf", pdfRoutes);
// app.use("/api", clienteRoutes);


module.exports = app;