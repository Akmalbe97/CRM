const paymentSchema = require("../schema/payment.schema");

const getPaidStudents = async (req, res, next) => {
  try {
    const payment = await paymentSchema.find();
    res.json(payment);
  } catch (error) {
    next(error);
  }
};

const addPayment = async (req, res, next) => {
  try {
    const { student_id, amount } = req.body;
    await paymentSchema.create({ student_id, amount });
    res.json({
      message: "added payment",
    });
  } catch (error) {
    next(error);
  }
};

const searchStudents = async (req, res, next) => {
  try {
    const { student_id } = req.params;
    const id = await paymentSchema.find(student_id);

    if (!id) {
      return res.json({
        message: "This student is not found",
      });
    }
    res.json(id);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPaidStudents,
  addPayment,
  searchStudents,
};
