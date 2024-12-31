import { Router, RequestHandler } from 'express';
import { getGroups, getOneGroup, addGroup, updateGroup, deleteGroup } from '../controller/group.controller';

const GroupRouter: Router = Router();

GroupRouter.get('/get_groups', getGroups as RequestHandler);
GroupRouter.get('/get_one_group/:id', getOneGroup as RequestHandler);
GroupRouter.post('/add_group', addGroup as RequestHandler);
GroupRouter.put('/update_group/:id', updateGroup as RequestHandler);
GroupRouter.delete('/delete_group/:id', deleteGroup as RequestHandler);

export default GroupRouter;
