import React from "react";
import "./addProduct.css"; // Importa el CSS

const AddProduct: React.FC = () => {
  return (
    <main className="add-product-main">
      <h1 className="add-product-title">Añadir un producto</h1>
      <form id="productForm" className="add-product-form">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="price">Precio:</label>
        <input type="number" id="price" name="price" required step="0.01" />

        <label htmlFor="category">Categoría:</label>
        <input type="text" id="category" name="category" required />

        <label htmlFor="description">Descripción:</label>
        <textarea id="description" name="description" rows={5}></textarea>

        <label htmlFor="image">Imagen:</label>
        <input type="file" id="image" name="image" accept="image/*" />

        <button type="submit" className="add-product-submit">Añadir</button>
      </form>
    </main>
  );
};

export default AddProduct;
