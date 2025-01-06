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
exports.deleteGroup = exports.updateGroup = exports.addGroup = exports.getOneGroup = exports.getGroups = void 0;
const groupSchema_1 = __importDefault(require("../schema/groupSchema"));
const getGroups = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const groups = yield groupSchema_1.default.find();
        res.json(groups);
    }
    catch (error) {
        next(error);
    }
});
exports.getGroups = getGroups;
const getOneGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const foundedGroup = yield groupSchema_1.default.findOne({ group_id: id });
        if (!foundedGroup) {
            return res.status(404).json({
                message: "Group not found",
            });
        }
        res.json(foundedGroup);
    }
    catch (err) {
        next(err);
    }
});
exports.getOneGroup = getOneGroup;
const addGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { group_id, group_name, group_major, lesson_time, teacher_name, teacher_phone_num, teacher_img, } = req.body;
        const foundGroupName = yield groupSchema_1.default.findOne({
            group_name: group_name,
        });
        if (foundGroupName) {
            return res.json({
                message: "group_id already exists!",
            });
        }
        else {
            yield groupSchema_1.default.create({
                group_id,
                group_name,
                group_major,
                lesson_time,
                teacher_name,
                teacher_phone_num,
                teacher_img,
            });
            res.json({
                message: "Group added successfully",
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.addGroup = addGroup;
const updateGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { group_name, group_major, lesson_time, teacher_name, teacher_phone_num, teacher_img, } = req.body;
        const foundGroup = yield groupSchema_1.default.findOne({ _id: id });
        if (!foundGroup) {
            return res.json({
                message: "Group not found!",
            });
        }
        const updatedGroup = yield groupSchema_1.default.findOneAndUpdate({ id }, {
            group_name,
            group_major,
            lesson_time,
            teacher_name,
            teacher_phone_num,
            teacher_img,
        }, { new: true });
        res.json({
            message: "Group updated successfully",
            updatedGroup,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateGroup = updateGroup;
const deleteGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const foundGroup = yield groupSchema_1.default.findOne({ _id: id });
        if (!foundGroup) {
            return res.json({
                message: "Group not found!",
            });
        }
        yield groupSchema_1.default.deleteOne({ _id: foundGroup.id });
        res.json({
            message: "Group deleted successfully",
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteGroup = deleteGroup;
