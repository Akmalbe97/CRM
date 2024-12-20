const { Router } = require("express");
const {
  getPaidStudents,
  addPayment,
  searchStudents,
} = require("../controller/payment.controller");

const paymentRouter = Router();

paymentRouter.get("/getPaidStudents", getPaidStudents);
paymentRouter.post("/addPayment", addPayment);
paymentRouter.get("/searchPaidStudent/:id", searchStudents);

module.exports = paymentRouter;
