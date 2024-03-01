import { Router } from "express";
import { createProject, getProjects } from "../controllers/project.controller.js";

const router =  Router();
router.get('/projects', getProjects)
router.post('/projects', createProject)

export default router;