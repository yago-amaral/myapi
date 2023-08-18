import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import homeRoutes from "./src/routes/home.js";
import postsRoutes from "./src/routes/posts.js";

const app = express();
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mycluster.ezystoa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());

app.use("/", homeRoutes);
app.use("/posts", postsRoutes);

mongoose.connect(dbURI)
    .then(() => {
        console.log("Conexão ao banco de dados bem-sucedida");
        app.listen(8080, () => {
            console.log("Servidor rodando na porta 8080...");
        });
    })
    .catch(err => {
        console.error("Não foi possível se conectar ao banco de dados");
    });
