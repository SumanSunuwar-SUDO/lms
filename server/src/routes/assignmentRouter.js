import { Router } from 'express';
import { createAssignmentsController } from '../controller/assignmentsController.js';

export const assignmentRouter = Router();
assignmentRouter.route('/').post(createAssignmentsController);
