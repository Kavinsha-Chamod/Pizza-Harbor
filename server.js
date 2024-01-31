const express = require("express");
const db = require("./db.js");
const app = express();

const pizzasRoute = require("./routes/pizzasRoute")
const userRoute = require("./routes/userRoute")
const orderRoute = require("./routes/orderRoutes.js")

app.use(express.json());
app.use("/api/pizzas/",pizzasRoute)
app.use("/api/users/",userRoute)
app.use("/api/orders/", orderRoute)


app.get("/", (req, res) => {
  res.send("Server working");
});

const port = process.env.PORT || 5000;
app.listen(port, () => `Server running`);
