"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_controller_1 = require("../controller/payment.controller");
const paymentRouter = (0, express_1.Router)();
paymentRouter.get("/getPaidStudents", payment_controller_1.getPaidStudents);
paymentRouter.post("/addPayment", payment_controller_1.addPayment);
// paymentRouter.get("/searchPaidStudent/:id", searchStudents);
exports.default = paymentRouter;
