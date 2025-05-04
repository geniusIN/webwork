const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: "./mysql/.env" });

const app = express();
const port = 3000;

const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//라우터터 설정
app.get("/", (req, res) => {
    res.send("hello");
});

app.use("/customer", require("./routes/customer"));
app.use("/board", require("./routes/board"));
app.use("/comment", require("./routes/comment"));

app.listen(port, () => {
    console.log(`http://localhost:${port} 서버 실행됨`);
});
