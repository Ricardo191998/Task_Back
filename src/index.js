const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

//Database
require("./database");

//Settings
app.set("port", env.process.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(helmet());

//Routes
app.use(require("./routes/index"));

app.listen(app.get("port", ()=>{
    console.log(`Server on port ${app.get("port")}`);
}));