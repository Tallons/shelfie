require("dotenv").config()
const express = require("express"),
      massive = require("massive"),
      app = express(),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      ctrl = require("./controller")

app.use(express.json());

app.listen(SERVER_PORT, console.log("Running on " + SERVER_PORT));
massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set("db", db)
  console.log("DB is READY!")
}).catch (err => console.log(err));

app.get("/api/inventory", ctrl.getInventory)
app.get("/api/inventory/:id", ctrl.getProduct)
app.post("/api/inventory", ctrl.addProduct)
app.put("/api/inventory/:id", ctrl.updateProduct)
app.delete("/api/inventory/:id", ctrl.deleteProduct)


