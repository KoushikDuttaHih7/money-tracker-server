const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/database");
connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));

const transactionRoutes = require("./routes/trackerRoutes");

app.use("/api", transactionRoutes);

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}!`));
