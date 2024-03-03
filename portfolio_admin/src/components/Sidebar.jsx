// Sidebar.js
import React from 'react';

const Sidebar = ({onPanelClick, onCreateProjectClick }) => {

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 overflow-y-auto z-50 mt-10">
       
      <div className="py-4 px-6">
        <h2 className="text-white text-lg font-semibold">Admin Panel</h2>
        <ul className="mt-6">
          <li className="mb-4">
            <a onClick={() => onPanelClick(1)}  className="text-white hover:bg-gray-700 py-2 px-4 block transition duration-300 cursor-pointer">Dashboard</a>
          </li>
          <li className="mb-4">
            <a onClick={() => onPanelClick(2)}  className="text-white hover:bg-gray-700 py-2 px-4 block transition duration-300 cursor-pointer">Proyectos</a>
          </li>
          {/* <li className="mb-4">
            <a onClick={ () => onPanelClick(3)}  className="text-white hover:bg-gray-700 py-2 px-4 block transition duration-300 cursor-pointer">Habilidades</a>
          </li>
          <li className="mb-4">
            <a onClick={ () => onPanelClick(4)}  className="text-white hover:bg-gray-700 py-2 px-4 block transition duration-300 cursor-pointer">Imágenes de Proyecto</a>
          </li> */}
          {/* Agregar más elementos de menú según sea necesario */}
        </ul>
        {/* Botón para crear proyecto */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 mx-4" onClick={onCreateProjectClick}>
        Crear Proyecto
      </button>
      </div>
    </div>
  );
};

export default Sidebar;
