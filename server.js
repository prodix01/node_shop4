const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./db");

const port =  1234;

const routeUsers = require("./routes/api/users");
const routeProducts = require("./routes/api/products");
const routeOrders = require("./routes/api/orders");

app.listen(port, console.log(`http://localhost:${port}로 서버를 시작합니다.`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use("/users", routeUsers);
app.use("/products", routeProducts);
app.use("/orders", routeOrders);


app.use((req, res) => {
    res.json({
        msg : "홈페이지에 오신걸 환영합니다."
    })
});