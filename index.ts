import express from "express";
import cors from "cors";
import connectDB from "./db/config";
import paymentRouter from "./router/payment.routes";
import attendanceRouter from "./router/attendance.routes";
import dotenv from "dotenv";
import { urlencoded } from "body-parser";

dotenv.config();

const app = express();

// app.use(urlencoded());
app.use(express.json());
app.use(cors());

//////////// routers
app.use(paymentRouter);
app.use(attendanceRouter);

//////////// connect to database

connectDB();

//////////// server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log("server is running on the http://localhost:" + PORT);
});
