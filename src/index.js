const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

//Database
require("./database");

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


//Routes
app.use(require("./routes/index"));
app.use("/user",require("./routes/auth") )

app.listen(app.get("port"), ()=>{
    console.log(`Server on port ${app.get("port")}`);
});