const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes

app.use("/banks", require("./routes/banks"));
app.use("/location", require("./routes/location"));
app.use("/supplier", require("./routes/supplier"));
app.use("/subContract", require("./routes/subContractor"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
