"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const group_controller_1 = require("../controller/group.controller");
const GroupRouter = (0, express_1.Router)();
GroupRouter.get('/get_groups', group_controller_1.getGroups);
GroupRouter.get('/get_one_group/:id', group_controller_1.getOneGroup);
GroupRouter.post('/add_group', group_controller_1.addGroup);
GroupRouter.put('/update_group/:id', group_controller_1.updateGroup);
GroupRouter.delete('/delete_group/:id', group_controller_1.deleteGroup);
exports.default = GroupRouter;
