"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./db/config"));
const payment_routes_1 = __importDefault(require("./router/payment.routes"));
const attendance_routes_1 = __importDefault(require("./router/attendance.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const group_routes_1 = __importDefault(require("./router/group.routes"));
const student_routes_1 = __importDefault(require("./router/student.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// app.use(urlencoded());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//////////// routers
app.use(payment_routes_1.default);
app.use(attendance_routes_1.default);
app.use(group_routes_1.default);
app.use(student_routes_1.default); // Add the student router
//////////// connect to database
(0, config_1.default)();
//////////// server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log("server is running on the http://localhost:" + PORT);
});
