import Project from "../models/projects.model.js";

export const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

export const createProject = async (req, res) => {
  const { title, description, images, link, tech, type } = req.body;
  const newProject = new Project({title, description, images, link, tech, type});

  const saveProject = await newProject.save();
  res.json(saveProject);
};
