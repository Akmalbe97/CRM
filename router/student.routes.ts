import { Router, Request, Response } from 'express';
import { addStudent } from '../controller/student.controller'; // Updated import path

const router = Router();

// Define the route for adding a new student
router.post('/students', (req: Request, res: Response) => {
    addStudent(req, res);
});

export default router;