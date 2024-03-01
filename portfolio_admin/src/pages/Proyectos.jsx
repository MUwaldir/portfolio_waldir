// Proyectos.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListaProyectos from '../components/ListaProyectos';

const Proyectos = () => {
  // Estado para almacenar los proyectos
  const [proyectos, setProyectos] = useState([]);

  // Función para obtener los proyectos desde la API
  const fetchProyectos = async () => {
    const URLAPI = 'http://localhost:3000/api/projects'
    try {
      const response = await axios.get(URLAPI);
      setProyectos(response.data);
    } catch (error) {
      console.error('Error al obtener los proyectos:', error);
    }
  };

  // Llamamos a fetchProyectos una vez al cargar el componente
  useEffect(() => {
    fetchProyectos();
  }, []);

  console.log(proyectos);
  // Función para editar un proyecto
  const handleEditarProyecto = (id) => {
    // Aquí puedes implementar la lógica para editar el proyecto con el ID proporcionado
    console.log('Editar proyecto con ID:', id);
  };

  // Función para eliminar un proyecto
  const handleEliminarProyecto = (id) => {
    // Aquí puedes implementar la lógica para eliminar el proyecto con el ID proporcionado
    console.log('Eliminar proyecto con ID:', id);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Administrar Proyectos</h1>
      {/* Lista de proyectos */}
     <ListaProyectos proyectos={ proyectos} handleEditarProyecto={handleEditarProyecto} handleEliminarProyecto={handleEliminarProyecto} />
    </div>
  );
};

export default Proyectos;

