import React, { useState } from "react";
import axios from "axios";

const cloudName = "dyh51ysjo";

const FormularioEditar = ({ proyecto, regresar }) => {
  const [formData, setFormData] = useState({
    title: proyecto.title,
    description: proyecto.description,
    link: proyecto.link,
    type: proyecto.type,
    tech: proyecto.tech.join(", "),
    images: proyecto.images,
    destacado: proyecto.destacado,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange =async (e) => {
    const files = Array.from(e.target.files);

    const formDataImages = new FormData();
         for (const file of files) {
        formDataImages.append("file", file);
        formDataImages.append("upload_preset", "pruebaimg");
        
        try {
          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            formDataImages
          );
          const imageUrl = response.data.secure_url;
        //   console.log(imageUrl);
          setFormData((prevFormData) => ({
            ...prevFormData,
            images: [...prevFormData.images, imageUrl],
          }));
        } catch (error) {
          console.error("Error al subir la imagen:", error);
        }
      }
    // setFormData({
    //   ...formData,
    //   images: [...formData.images, ...fileNames],
    // });
   
  };

  const handleImageDelete = (index) => {
    console.log(index)

    const updatedImages = formData.images.filter((image, i) => i !== index);
    console.log(updatedImages)
    setFormData({
      ...formData,
      images: updatedImages,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProject = {
      ...proyecto,
      ...formData,
      tech: formData.tech.split(",").map((tech) => tech.trim()),
    };
    console.log(formData);
    console.log(updatedProject);
    try {
      // Utilizar POST para actualizar el proyecto
      const response = await axios.put(`http://localhost:3000/api/projects/${proyecto._id}`, updatedProject);
      console.log("Proyecto actualizado:", response.data);
      
      // Aquí puedes agregar lógica para mostrar un mensaje de éxito o redirigir a otra página
    } catch (error) {
      console.error("Error al actualizar el proyecto:", error);
      // Aquí puedes agregar lógica para mostrar un mensaje de error
    }
  };

  return (
    <div className="w-full mx-auto">
    
      <div className="bg-white rounded-lg p-6 ">
        <h2 className="text-xl font-semibold mb-4 ">Editar Proyecto</h2>
        <button
          className="absolute top-0 right-0 mr-4 mt-2 text-xl cursor-pointer"
          onClick={regresar}
        >
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
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
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
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
            <label
              htmlFor="link"
              className="block text-gray-700 font-semibold mb-2"
            >
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
            <label
              htmlFor="type"
              className="block text-gray-700 font-semibold mb-2"
            >
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
            <label
              htmlFor="tech"
              className="block text-gray-700 font-semibold mb-2"
            >
              Tecnologías (Separadas por comas)
            </label>
            <input
              type="text"
              id="tech"
              name="tech"
              value={formData.tech}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="images"
              className="block text-gray-700 font-semibold mb-2"
            >
              Imágenes
            </label>
            <input
              type="file"
              id="images"
              name="images"
              onChange={handleImageChange}
              accept="image/*"
              multiple
              className="w-full px-3 py-2 border rounded-md"
            />
            <div className="mt-2 flex flex-wrap">
              {formData.images.map((image, index) => (
                <div key={index} className="relative mr-2 mb-2">
                  <img
                    src={image}
                    alt={`Imagen ${index}`}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <button
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center"
                    onClick={() => handleImageDelete(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="destacado"
              className="block text-gray-700 font-semibold mb-2"
            >
              Destacado
            </label>
            <input
              type="checkbox"
              id="destacado"
              name="destacado"
              checked={formData.destacado}
              onChange={(e) =>
                setFormData({ ...formData, destacado: e.target.checked })
              }
              className="mr-2"
            />
            <span className="text-gray-700">Marcar como destacado</span>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={regresar}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioEditar;
