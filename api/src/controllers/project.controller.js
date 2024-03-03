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

export const getProjectsId = async (req, res, next) => {
    const projectId = req.params.id
    const project = await Project.findById(projectId)
    res.json(project);
};

export const deleteProject = async (req, res, next) => {
    const projectId = req.params.id
    try {
        // Buscar el proyecto por su ID y eliminarlo
        const deletedProject = await Project.findByIdAndDelete(projectId);
        if (!deletedProject) {
          return res.status(404).json({ error: 'Proyecto no encontrado' });
        }
        res.status(200).json({ message: 'Proyecto eliminado exitosamente' });
      } catch (error) {
        console.error('Error al eliminar el proyecto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
}

export const updateProjectById = async (req, res) => {
    const { id } = req.params; // Obtener el ID del proyecto de los parámetros de la solicitud
    const { title, description, images, link, tech, type,destacado } = req.body; // Obtener los datos actualizados del cuerpo de la solicitud
  
    try {
      const updatedProject = await Project.findByIdAndUpdate(
        id, // ID del proyecto que se va a actualizar
        { title, description, images, link, tech, type, destacado }, // Datos actualizados del proyecto
        { new: true } // Opción { new: true } para devolver el documento actualizado
      );
  
      if (!updatedProject) {
        return res.status(404).json({ message: "Proyecto no encontrado" });
      }
  
      res.json(updatedProject); // Devolver el proyecto actualizado
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar el proyecto", error: error.message });
    }
  };