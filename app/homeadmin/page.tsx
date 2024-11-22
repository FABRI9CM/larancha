"use client";

import { useState } from "react";
import styles from "../../styles/HomeAdmin.module.css";
import Header from "../components/Header";

const HomeAdmin = () => {
  const [dishes, setDishes] = useState([
    { src: "/pla1.jpeg", name: "Heladas" },
    { src: "/pla2.jpg", name: "Margarita" },
    { src: "/plat3.jpg", name: "Casado" },
  ]);

  const [menuImages, setMenuImages] = useState([
    { src: "/foto1.png", name: "Foto 1" },
    { src: "/foto2.png", name: "Foto 2" },
    { src: "/foto3.png", name: "Foto 3" },
    { src: "/foto4.png", name: "Foto 4" },
    { src: "/foto5.png", name: "Foto 5" },

    { src: "/foto9.png", name: "Foto 9" }
  ]);

  // Agregar imágenes al carrusel de platillos
  const handleAddDish = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Error al subir la imagen");

      const { path } = await res.json();
      setDishes((prev) => [...prev, { src: path, name: file.name }]);
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  // Agregar imágenes al carrusel del menú
  const handleAddMenuImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Error al subir la imagen");

      const { path } = await res.json();
      setMenuImages((prev) => [...prev, { src: path, name: file.name }]);
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  // Eliminar imagen del carrusel de platillos
  const handleDeleteDish = (index) => {
    const updatedDishes = dishes.filter((_, i) => i !== index);
    setDishes(updatedDishes);
  };

  // Eliminar imagen del carrusel del menú
  const handleDeleteMenuImage = (index) => {
    const updatedMenuImages = menuImages.filter((_, i) => i !== index);
    setMenuImages(updatedMenuImages);
  };

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Administra el Carrusel</h1>

      {/* Sección: Carrusel de Platillos */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Carrusel de Platillos</h2>
        <div className={styles.carousel}>
          {dishes.map((dish, index) => (
            <div key={index} className={styles.card}>
              <img src={dish.src} alt={dish.name} />
              <p>{dish.name}</p>
              <button
                className={styles.actionButton}
                onClick={() => handleDeleteDish(index)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
        <label htmlFor="dish-upload" className={styles.uploadButton}>
          Agregar Platillo
        </label>
        <input
          id="dish-upload"
          type="file"
          className={styles.fileInput}
          onChange={handleAddDish}
        />
      </section>

      {/* Sección: Carrusel del Menú */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Carrusel del Menú</h2>
        <div className={styles.carousel}>
          {menuImages.map((image, index) => (
            <div key={index} className={styles.card}>
              <img src={image.src} alt={image.name} />
              <p>{image.name}</p>
              <button
                className={styles.actionButton}
                onClick={() => handleDeleteMenuImage(index)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
        <label htmlFor="menu-upload" className={styles.uploadButton}>
          Agregar Foto al Menú
        </label>
        <input
          id="menu-upload"
          type="file"
          className={styles.fileInput}
          onChange={handleAddMenuImage}
        />
      </section>
    </div>
  );
};

export default HomeAdmin;
