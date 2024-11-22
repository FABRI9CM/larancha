"use client";

import React, { useState } from "react";
import styles from "../../styles/HomeAdmin.module.css";
import Header from "../components/Header";
import AddProduct from "@/app/homeadmin/formAddProduct/formAddProduct";
import { useRouter } from "next/router";
import FormDeleteProduct from "./formDeleteProduct/formDeleteProduct";
import FormEditProduct from "./formUpdateProduct/formUpdateProduct"; // Importa el formulario de edición

const HomeAdmin: React.FC = () => {
  const [dishes, setDishes] = useState([
    { src: "/pla1.jpeg", name: "Heladas", description: "Sándwich frío con pollo y vegetales.", price: 12.99 },
    { src: "/pla2.jpg", name: "Margarita", description: "Pizza con salsa de tomate y mozzarella.", price: 10.99 },
    { src: "/plat3.jpg", name: "Casado", description: "Plato tradicional con arroz, carne y ensalada.", price: 8.99 },
  ]);

<<<<<<< HEAD
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false); // Nuevo estado para editar
  const [selectedDishIndex, setSelectedDishIndex] = useState<number | null>(null);
=======
  const [menuImages, setMenuImages] = useState([
    { src: "/foto1.png", name: "Foto 1" },
    { src: "/foto2.png", name: "Foto 2" },
    { src: "/foto3.png", name: "Foto 3" },
    { src: "/foto4.png", name: "Foto 4" },
    { src: "/foto5.png", name: "Foto 5" },

    { src: "/foto9.png", name: "Foto 9" }
  ]);
>>>>>>> 6f2034e919bb903c017fb52514af7992b3afbe11

  const handleAddDishClick = () => {
    setShowAddProduct(true);
  };

  const handleCloseAddProduct = () => {
    setShowAddProduct(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteProduct(false);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedDishIndex !== null) {
      const updatedDishes = dishes.filter((_, i) => i !== selectedDishIndex);
      setDishes(updatedDishes);
    }
    setShowDeleteProduct(false);
  };

  const handleEditDish = (index: number) => {
    setSelectedDish(dishes[index]);
    setSelectedDishIndex(index);
    setShowModal(false); // Cierra el modal de detalles
    setShowEditProduct(true); // Abre el formulario de editar
  };
  
  const handleDeleteClick = (index: number) => {
    setSelectedDishIndex(index);
    setShowModal(false); // Cierra el modal de detalles
    setShowDeleteProduct(true); // Abre el formulario de eliminar
  };
  

  // Guardar los cambios en el platillo
  const handleSaveEdit = (updatedDish) => {
    const updatedDishes = [...dishes];
    updatedDishes[selectedDishIndex!] = updatedDish;  // Actualizar el platillo
    setDishes(updatedDishes);
    setShowEditProduct(false); // Cerrar el modal después de guardar
  };

  const handleCancelEdit = () => {
    setShowEditProduct(false); // Cerrar el modal sin guardar
    setShowModal(true);
  };

  const handleViewDetails = (index: number) => {
    setSelectedDish(dishes[index]);
    setSelectedDishIndex(index);
    setShowModal(true); // Mostrar los detalles del platillo en un modal
  };

  
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Administra el Carrusel</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Carrusel de Platillos</h2>
        <div className={styles.carousel}>
          {dishes.map((dish, index) => (
            <div key={index} className={styles.card}>
              <img src={dish.src} alt={dish.name} />
              <p>{dish.name}</p>
              <button
                className={styles.actionButton}
                onClick={() => handleViewDetails(index)} // Mostrar detalles
              >
                Ver detalles
              </button>
            </div>
          ))}
        </div>
        <button
          className={styles.uploadButton}
          onClick={handleAddDishClick}
        >
          Agregar Platillo
        </button>
      </section>

{/* Modal para eliminar */} 
{showDeleteProduct && (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <FormDeleteProduct 
        onConfirmDelete={handleConfirmDelete} 
        onCancel={handleCancelDelete} 
      />
      <button
        className={styles.closeButton}
        onClick={handleCancelDelete}
      >
        Cerrar
      </button>
    </div>
  </div>
)}

{/* Modal para editar */} 
{showEditProduct && selectedDish && (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <FormEditProduct
        dish={selectedDish}
        onSave={handleSaveEdit}
        onCancel={handleCancelEdit}
      />
      <button
        className={styles.closeButton}
        onClick={handleCancelEdit}
      >
        Cerrar
      </button>
    </div>
  </div>
)}


      {/* Modal de detalles (Ver detalles) */}
      {showModal && selectedDish && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.detailsContainer}>
              {/* Columna izquierda para la imagen */}
              <div className={styles.detailsImage}>
                <img src={selectedDish.src} alt={selectedDish.name} />
              </div>

              {/* Columna derecha para la descripción */}
              <div className={styles.detailsDescription}>
                <h2>{selectedDish.name}</h2>
                <p>{selectedDish.description}</p>
                <p>Precio: ${selectedDish.price}</p>
              </div>
            </div>

            {/* Botones de Modificar y Eliminar */}
            <div className={styles.actionButtons}>
              <button
                className={styles.actionButton}
                onClick={() => handleEditDish(selectedDishIndex!)} // Activar edición
              >
                Modificar
              </button>
              <button
                className={styles.actionButton}
                onClick={() => handleDeleteClick(selectedDishIndex!)} // Eliminar
              >
                Eliminar
              </button>
            </div>

            {/* Botón de Cerrar Modal */}
            <button
              className={styles.closeButton}
              onClick={() => setShowModal(false)} // Cerrar el modal de detalles
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Mostrar formulario para añadir producto */}
      {showAddProduct && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <AddProduct />
            <button
              className={styles.closeButton}
              onClick={handleCloseAddProduct}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeAdmin;
