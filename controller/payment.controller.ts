import paymentSchema, { Payment } from "../schema/payment.schema";
import { Response, Request, NextFunction } from "express";

export const getPaidStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payment: Payment[] = await paymentSchema.find();
    res.json(payment);
  } catch (error) {
    next(error);
  }
};

export const addPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { student_id, amount }: { student_id: string; amount: number } =
      req.body;
    await paymentSchema.create({ student_id, amount });
    res.json({
      message: "added payment",
    });
  } catch (error) {
    next(error);
  }
};

// export const searchStudents = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<Response | void> => {
//   try {
//     const student_id = "idwcb";
//     const { id } = req.params;
//     const student = await paymentSchema.findOne({ student_id: id });

//     if (!student) {
//       res.json({
//         message: "This student is not found",
//       });
//     }
//     res.json(id);
//   } catch (error) {
//     next(error);
//   }
// };

