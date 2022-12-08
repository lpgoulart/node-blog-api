import express from "express";
import cors from "cors"
import db from "../config/dbConnect.js";
import routes from './routes/index.js'

db.on("error", console.log.bind(console, "Opa, parece que deu alguma merda xD"));
db.once("open", () => {
  console.log("conexão com banco foi um sucesso. Obaa!!")
});

const app = express();

app.use(cors());

routes(app)

export default app