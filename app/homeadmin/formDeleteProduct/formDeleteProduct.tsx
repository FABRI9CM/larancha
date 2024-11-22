import React from "react";
import "./deleteProduct.css"; // Importa el archivo de estilos

const DeleteProduct: React.FC = () => {
  // Manejar el evento de eliminación
  const handleDelete = (): void => {
    // Aquí puedes agregar lógica para eliminar el producto (e.g., llamada a la API)
    alert("Producto eliminado correctamente.");
    // Redirige al usuario a la página principal
    window.location.href = "/homeadmin";
  };

  // Manejar la cancelación
  const handleCancel = (): void => {
    // Redirige al usuario a la página principal
    window.location.href = "/homeadmin";
  };

  return (
    <div className="form-container">
      <h1>Eliminar producto</h1>
      <div className="alert">
        ¿Desea eliminar el producto seleccionado?
      </div>
      <div className="button-container">
        <button
          type="button"
          className="btn-eliminar"
          onClick={handleDelete}
        >
          Eliminar
        </button>
        <button
          type="button"
          className="btn-cancelar"
          onClick={handleCancel}
        >
          CANCELAR
        </button>
      </div>
    </div>
  );
};

export default DeleteProduct;
