import React from "react";
import Formulario from "./Formulario";

const Modal = ({ isOpen, onClose,children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50 ">
          <div className="bg-white rounded-lg p-6 relative">
            <h2 className="text-xl font-semibold mb-4">Crear Proyecto</h2>
            <button
              className="absolute top-0 right-0 mr-4 mt-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={onClose}
            >
              X
            </button>
           {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
