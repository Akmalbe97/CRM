"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = exports.getPaidStudents = void 0;
const payment_schema_1 = __importDefault(require("../schema/payment.schema"));
const getPaidStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield payment_schema_1.default.find();
        res.json(payment);
    }
    catch (error) {
        next(error);
    }
});
exports.getPaidStudents = getPaidStudents;
const addPayment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { student_id, amount } = req.body;
        yield payment_schema_1.default.create({ student_id, amount });
        res.json({
            message: "added payment",
        });
    }
    catch (error) {
        next(error);
    }
});
exports.addPayment = addPayment;
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
