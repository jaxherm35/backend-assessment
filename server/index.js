const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getThought } = require('./controller')
const { getImg } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/thought", getThought);
app.post("/api/newPic", getImg);

app.listen(4000, () => console.log("Server running on 4000"));
