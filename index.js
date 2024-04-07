import express from "express";
import bodyParser from "body-parser";
import * as url from "url";

const app = express();
const port = 3000;

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "public/home/home.html");
});

app.get("/features", (req, res) => {
    res.sendFile(__dirname + "public/features/features.html");
})

app.get("/advantages", (req, res) => {
    res.sendFile(__dirname + "public/advantages/advantages.html");
})

app.get("/disadvantages", (req, res) => {
    res.sendFile(__dirname + "public/disadvantages/disadvantages.html");
})

app.get("/imc", (req, res) => {
    res.sendFile(__dirname + "public/IMC/imc.html");
})

app.post("/calculate-IMC", (req, res) => {
    let body = req.body;

    let weight = body.weight;
    let height = body.height;

    const result = (weight / ((height * height) / 100)) * 100;

    res.json(result.toFixed(2));
})


app.listen(port, () => console.log(`Server started on port ${port}`));