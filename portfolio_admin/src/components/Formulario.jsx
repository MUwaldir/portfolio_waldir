import React, { useState } from "react";
import axios from "axios";

const URLAPI = "http://localhost:3000/api/projects";
const cloudName = "dyh51ysjo";

const Formulario = ({onClose}) => {
    const [formData, setFormData] = useState({
      title: "",
      description: "",
      link: "",
      type: "",
      tech: [],
      images: [],
      destacado: false,
    });
  
  
  
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "tech") {
          // Si el campo es "tech", dividimos la cadena en un array utilizando comas como separadores
          const techArray = value.split(",").map((tech) => tech.trim()); // Eliminamos los espacios en blanco alrededor de cada tecnología
          setFormData({
            ...formData,
            [name]: techArray,
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      };
  
    // const handleImageChange = async (e) => {
    //   const files = Array.from(e.target.files);
  
    //   const formDataImages = new FormData();
  
    //   for (const file of files) {
    //     formDataImages.append("file", file);
    //     formDataImages.append("upload_preset", "pruebaimg");
        
    //     try {
    //       const response = await axios.post(
    //         `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    //         formDataImages
    //       );
    //       const imageUrl = response.data.secure_url;
    //       console.log(imageUrl);
    //       setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         images: [...prevFormData.images, imageUrl],
    //       }));
    //     } catch (error) {
    //       console.error("Error al subir la imagen:", error);
    //     }
    //   }
    // };
  
   
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // const response = await axios.post(URLAPI, formData);
        // console.log("Proyecto creado:", response.data);
        console.log(formData)
        // Aquí puedes agregar lógica para mostrar un mensaje de éxito o redirigir a otra página
      } catch (error) {
        console.error("Error al crear el proyecto:", error);
        // Aquí puedes agregar lógica para mostrar un mensaje de error
      }
    };
  

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 pt-1 ">
      <div className="bg-white rounded-lg p-6 overflow-y-auto max-h-screen relative">
        <h2 className="text-xl font-semibold mb-4">Crear Proyecto</h2>
        <button
          className="absolute top-0 right-0 mr-4 mt-2 text-xl cursor-pointer z-10 bg-red-500 text-white w-8 rounded-md "
          onClick={onClose}
        >
          &times;
        </button>
    <form onSubmit={handleSubmit} className="w-96 py-4 px-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
          Título
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="link" className="block text-gray-700 font-semibold mb-2">
          Enlace
        </label>
        <input
          type="text"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700 font-semibold mb-2">
          Tipo
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        >
          <option value="">Seleccione un tipo</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="tech" className="block text-gray-700 font-semibold mb-2">
          Tecnologías (Separadas por comas)
        </label>
        <input
          type="text"
          id="tech"
          name="tech"
          value={formData.tech.join(", ")}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="images" className="block text-gray-700 font-semibold mb-2">
          Imágenes
        </label>
        <input
          type="file"
          id="images"
          name="images"
        //   onChange={handleImageChange}
          accept="image/*"
          multiple
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="destacado" className="block text-gray-700 font-semibold mb-2">
          Destacado
        </label>
        <input
          type="checkbox"
          id="destacado"
          name="destacado"
          checked={formData.destacado}
          onChange={(e) => setFormData({ ...formData, destacado: e.target.checked })}
          className="mr-2"
        />
        <span className="text-gray-700">Marcar como destacado</span>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
        Crear Proyecto
      </button>
    </form>
    </div>
    </div>
  );
};

export default Formulario;
