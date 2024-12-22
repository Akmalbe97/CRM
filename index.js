const express = require("express");
const cors = require("cors");
const connectDB = require("./db/config");
const paymentRouter = require("./router/payment.routes");
const attendanceRouter = require("./router/attendance.routes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

//////////// routers
app.use(paymentRouter);
app.use(attendanceRouter)

//////////// connect to database
connectDB();

//////////// server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log("server is running on the http://localhost:" + PORT);
});
