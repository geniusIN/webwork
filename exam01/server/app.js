const express = require("express");
const cors = require("cors");


require("dotenv").config({ path: "./database/mysql.env" });

const app = express();
const port = 3000;

const corsOptions = {
    origin: "http://localhost:8081",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//라우트 설정
app.get("/", (req, res) => {
    res.send("hello");
});

app.use("/board", require("./router/board"));
app.use("/comments", require("./router/comment"));

app.listen(port, () => {
    console.log(`http://localhost:${port} 서버 실행됨`);
});
