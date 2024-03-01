// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Proyectos from './Proyectos';
import Habilidades from './Habilidades';

const URLAPI = "http://localhost:3000/api/projects"

const Dashboard = () => {
  // Estado para almacenar la lista de proyectos
  const [projects, setProjects] = useState([]);
  const[panel,setPanel] = useState(1)

  // Función para obtener los proyectos desde la API
  const fetchProjects = async () => {
    try {
      const response = await axios.get(URLAPI);
      setProjects(response.data);
    } catch (error) {
      console.error('Error al obtener los proyectos:', error);
    }
  };

  // Llamamos a fetchProjects una vez al cargar el componente
  useEffect(() => {
    fetchProjects();
  }, []);

  // Función para manejar el clic en "Proyectos"
  const handleProjectsClick = () => {
    // Aquí puedes realizar la lógica para mostrar todos los proyectos en una lista
    console.log("Mostrar todos los proyectos");
  };

  // Función para manejar el clic en "Crear Proyecto"
  const handleCreateProjectClick = () => {
    // Aquí puedes realizar la lógica para crear un nuevo proyecto
    console.log("Crear un nuevo proyecto");
  };
  const handlePanelClick = (p) => {
    console.log(typeof(p));
    if(p===1) {
        setPanel(1)
    }else if(p===2) {
        setPanel(2)
    }else if(p===3) {
        setPanel(3)
    }else if(p===4){
        setPanel(4)
    }
    
  };

  return (
    <div className="flex mt-8">
    {/* Sidebar */}
    <Sidebar onProjectsClick={handleProjectsClick} onCreateProjectClick={handleCreateProjectClick} onPanelClick={handlePanelClick} />
    {/* Contenido del dashboard */}
    {panel === 1 && (<div className="bg-gray-100 flex-1 p-6 ml-64">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      {/* Resumen de Proyectos */}
      <div className="bg-white rounded-lg p-6 shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Resumen de Proyectos</h2>
        <p className="mb-2">Cantidad de Proyectos: {projects.length}</p>
        {/* Otros datos relevantes del dashboard */}
      </div>
      {/* Lista de Proyectos */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-lg font-semibold mb-4">Lista de Proyectos</h2>
        <ul>
          {projects.map(project => (
            <li key={project.id} className="mb-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p>{project.description}</p>
              {/* Otros detalles del proyecto, como imágenes, enlaces, tecnologías, etc. */}
            </li>
          ))}
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsam minima ipsum, repellat quis nesciunt totam culpa tempore natus omnis quidem illum consequuntur at, magnam consectetur atque earum odit? Perferendis!
      Perferendis nam quia officiis quod tempore numquam quibusdam. Amet ullam itaque illo ipsum nesciunt atque tempore facere, ea natus! Sunt, dolorum. Officiis odit quae omnis dolore quisquam, facilis labore fugiat?
      Cum perferendis necessitatibus est, provident vitae dignissimos quis possimus! A, laborum. Hic quos facilis et adipisci culpa inventore, fugit sint sapiente esse blanditiis in nesciunt veniam illo impedit, cum eveniet?
      Ut vitae quam earum. Deserunt labore ipsa amet maiores quos possimus quaerat magnam, quisquam ad eveniet quod omnis animi ut, accusamus illum tempore perferendis rerum quis dolores magni, at exercitationem.
      Ex placeat saepe magni maxime molestias suscipit expedita earum aperiam qui illum quia optio distinctio perspiciatis asperiores nihil nesciunt fugiat itaque, aspernatur eaque! Voluptatem enim dolores odit deleniti assumenda laborum!</p>
    </div>)}
    {panel===2 && (
        <div className="bg-gray-100 flex-1 p-6 ml-64" >
        <Proyectos/>
        </div>
    ) }
    {panel===3 &&( <div className="bg-gray-100 flex-1 p-6 ml-64" > <Habilidades/></div>)}

    {/* {panel===4 && <Proyectos/>} */}

    
  </div>
  );
};

export default Dashboard;
