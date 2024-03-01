import React, { useState } from 'react';

function ListaProyectos({ proyectos, handleEditarProyecto, handleEliminarProyecto }) {
  // Estado para almacenar el estado de expansión de cada proyecto
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  // Función para cambiar el estado de expansión de un proyecto
  const toggleDescription = (id) => {
    setExpandedDescriptions(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div>
      <ul>
        {proyectos.map((proyecto) => (
          <li key={proyecto._id} className="mb-6 grid grid-cols-6 text-center">
            <h2 className="text-xl font-semibold mb-2">{proyecto.title}</h2>
            <p className="text-gray-600 mb-2 col-span-2 text-justify">
              {expandedDescriptions[proyecto._id]
                ? proyecto.description
                : proyecto.description.slice(0, 50)}
              {proyecto.description.length > 50 && (
                <button
                  className="text-blue-500 hover:text-blue-700 font-semibold text-xs "
                  onClick={() => toggleDescription(proyecto._id)}
                >
                  {expandedDescriptions[proyecto._id] ? ' Mostrar menos' : ' ...Mostrar más'}
                </button>
              )}
            </p>
            {/* Otros atributos del proyecto */}
            <p className="text-sm text-gray-500 mb-2">Link: {proyecto.link}</p>
            <p className="text-sm text-gray-500 mb-2">Tipo: {proyecto.type}</p>
            {/* Botones de editar y eliminar */}
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
                onClick={() => handleEditarProyecto(proyecto._id)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4"
                onClick={() => handleEliminarProyecto(proyecto._id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProyectos;
