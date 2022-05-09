const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getThought } = require('./controller')
// const { getImg } = require('./controller')
// const { deleteImg } = require('./controller')
const { addThought } = require('./controller')
const { deleteThought } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/thought", getThought);
// app.post("/api/img", getImg);
// app.delete("/api/delete", deleteImg);
app.post("/api/thought", addThought);
app.delete("api/thought/:id", deleteThought)

app.listen(4000, () => console.log("Server running on 4000"));
