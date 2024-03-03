// Proyectos.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ListaProyectos from "../components/ListaProyectos";
import Formulario from "../components/Formulario";
import FormularioEditar from "../components/FormularioEditar";
import Modal from "../components/Modal";

const Proyectos = () => {
  // Estado para almacenar los proyectos
  const [proyectos, setProyectos] = useState([]);
  const [projectSelected, setProjectSelected] = useState(null);
  const [projectElimnado, setProjectEliminado]  = useState(false)

  // Función para obtener los proyectos desde la API
  const fetchProyectos = async () => {
    const URLAPI = "http://localhost:3000/api/projects";
    try {
      const response = await axios.get(URLAPI);
      setProyectos(response.data);
    } catch (error) {
      console.error("Error al obtener los proyectos:", error);
    }
  };
  const fetchProyectosById = async (id) => {
    const URLAPI = "http://localhost:3000/api/projects";
    try {
      const response = await axios.get(URLAPI + `/${id}`);
      setProjectSelected(response.data);
    } catch (error) {
      console.error("Error al obtener los proyectos:", error);
    }
  };

  // Llamamos a fetchProyectos una vez al cargar el componente
  useEffect(() => {
    fetchProyectos();
  }, []);

  console.log(proyectos);
  // Función para editar un proyecto
  const handleEditarProyecto = async (id) => {
    // Aquí puedes implementar la lógica para editar el proyecto con el ID proporcionado
    console.log("Editar proyecto con ID:", id);
    fetchProyectosById(id);
  };

  // Función para eliminar un proyecto
  const handleEliminarProyecto = async (id) => {
    // Aquí puedes implementar la lógica para eliminar el proyecto con el ID proporcionado
    const URLAPI = "http://localhost:3000/api/projects";
    try {
      const response = await axios.delete(URLAPI + `/${id}`);
      setProjectEliminado(true);
    } catch (error) {
      console.error("Error al obtener los proyectos:", error);
    }

    console.log("Eliminar proyecto con ID:", id);
  };

  const handleRegresar = () => {
    setProjectSelected(null);
  }
 

  return (
    
    <div className="">
        {projectSelected ? (
            

                <FormularioEditar proyecto = {projectSelected} regresar={handleRegresar}/>

               
            
        ): (
            <div className="pl-1">

                <h1 className="text-2xl font-semibold mb-4">Administrar Proyectos</h1>
              
                <ListaProyectos
                  proyectos={proyectos}
                  handleEditarProyecto={handleEditarProyecto}
                  handleEliminarProyecto={handleEliminarProyecto}
                />
                {
                    projectElimnado &&  <Modal > elimnado projecto </Modal>
                }
               
            </div>

        )}
       
    </div>
  );
};

export default Proyectos;
