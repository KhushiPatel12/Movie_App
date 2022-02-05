require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");

const actorRoute = require("./routes/actorRoute");
const directorRoute = require("./routes/directorRoute");
const movieRoute = require("./routes/movieRoute");

mongoose
.connect(process.env.MONGOURL)
.then( ()=> console.log("MongoDB Connected"));

app.get("/",(req,res)=>res.send("Welcome To Movies World"));
app.use("/actor",actorRoute);
app.use("/director",directorRoute);
app.use("/movie",movieRoute);

app.listen(port, ()=>console.log(`App listening on port 5000`));