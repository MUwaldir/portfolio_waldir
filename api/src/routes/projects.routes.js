import { Router } from "express";
import { createProject, deleteProject, getProjects, getProjectsId, updateProjectById } from "../controllers/project.controller.js";

const router =  Router();
router.get('/projects', getProjects)
router.get('/projects/:id', getProjectsId)
router.post('/projects', createProject)
router.post('/projects', createProject)

router.put('/projects/:id', updateProjectById)

export default router;