import { Router } from "express";

import {
  addPayment,
  getPaidStudents,
  // searchStudents,
} from "../controller/payment.controller";

const paymentRouter: Router = Router();

paymentRouter.get("/getPaidStudents", getPaidStudents);
paymentRouter.post("/addPayment", addPayment);
// paymentRouter.get("/searchPaidStudent/:id", searchStudents);

export default paymentRouter;
