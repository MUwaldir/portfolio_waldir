import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Proyectos from "./Proyectos";
import Habilidades from "./Habilidades";
import Modal from "../components/Modal";
import Formulario from "../components/Formulario";

const URLAPI = "http://localhost:3000/api/projects";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [panel, setPanel] = useState(1);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(URLAPI);
      setProjects(response.data);
    } catch (error) {
      console.error("Error al obtener los proyectos:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreateProjectClick = () => {
    setShowCreateForm(true);
  };

  const handleCloseModal = () => {
    setShowCreateForm(false);
  };

  return (
    <div className=" mt-8 ">
      <Sidebar
       onCreateProjectClick={handleCreateProjectClick}
        onPanelClick={setPanel}
      />
      {panel === 1 && (
        <div className="bg-gray-100 flex-1 pl-64  p-6  ">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
            <h2 className="text-lg font-semibold mb-4">Resumen de Proyectos</h2>
            <p className="mb-2">Cantidad de Proyectos: {projects.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-4">Lista de Proyectos</h2>
            <ul>
              {projects.map((project) => (
                <li key={project.id} className="mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="">{project.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {panel === 2 && (
        <div className="bg-gray-100 flex-1 p-6 pl-64">
          <Proyectos />
        </div>
      )}
      {panel === 3 && (
        <div className="bg-gray-100 flex-1 p-6 ml-64">
          <Habilidades />
        </div>
      )}
       {showCreateForm && <Formulario  onClose={handleCloseModal} />}
        
    
    </div>
  );
};

export default Dashboard;
