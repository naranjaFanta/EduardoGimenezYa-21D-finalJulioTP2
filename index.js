import express from "express";
import route from "./src/routes/routes.js";
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", route);
app.listen(PORT, () => console.log(`Servidor listo en puerto ${PORT}`));
app.on("error", (error) => console.log(`Error !!!!!!!!: ${error}`));
