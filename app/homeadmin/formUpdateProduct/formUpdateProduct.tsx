import React, { useState } from 'react';
import './updateProduct.css'; // Importa el archivo CSS para el estilo

const UpdateProduct: React.FC = () => {
  const [productData, setProductData] = useState({
    nombre: '',
    precio: '',
    disponibilidad: '',
    descripcion: '',
    imagen: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProductData((prevData) => ({
        ...prevData,
        imagen: e.target.files[0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del producto modificados:', productData);
  };

  return (
    <main className="form-container">
      <h1>Modificar producto</h1>
      <form id="modificarForm" onSubmit={handleSubmit}>
        <label htmlFor="codigo">Código de platillo:</label>
        <input
          type="text"
          id="codigo"
          name="codigo"
          value="NO EDITABLE"
          readOnly
        />

        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Escribe el nombre"
          value={productData.nombre}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="precio">Precio:</label>
        <input
          type="number"
          id="precio"
          name="precio"
          placeholder="Escribe el precio"
          value={productData.precio}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="disponibilidad">Disponibilidad:</label>
        <input
          type="text"
          id="disponibilidad"
          name="disponibilidad"
          placeholder="Disponible/No disponible"
          value={productData.disponibilidad}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Escribe la descripción"
          value={productData.descripcion}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="imagen">Imagen:</label>
        <input
          type="file"
          id="imagen"
          name="imagen"
          accept="image/*"
          onChange={handleImageChange}
        />

        <button type="submit" className="btn-modificar">
          Modificar
        </button>
      </form>
    </main>
  );
};

export default UpdateProduct;
