"use client";

import { useState } from "react";
import styles from "./CarruselMenuEspecial.module.css";

const menuEspecial = [
  { src: "/Me1.png", name: "", description: "Un delicioso sándwich con pollo crujiente y más..." },
  { src: "/Me2.png", name: "  ", description: "Sándwich picante con pollo crujiente..." },
  { src: "/Me3.png", name: "  ", description: "Sándwich deluxe con pollo crujiente..." },
];

const CarruselMenuEspecial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === menuEspecial.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? menuEspecial.length - 1 : prevIndex - 1));
  };

  const handleClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.arrowButtonLeft} onClick={prevImage}>◀</button>

      <div className={styles.carouselContainer} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {menuEspecial.map((item, index) => (
          <div
            className={styles.imageWrapper}
            key={index}
            onClick={() => handleClick(item)} // Llamar al modal con la información
          >
            <img src={item.src} alt={item.name} className={styles.image} />
            <p className={styles.name}>{item.name}</p>
          </div>
        ))}
      </div>

      <button className={styles.arrowButtonRight} onClick={nextImage}>▶</button>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalImageContainer}>
              {/* Imagen más pequeña a la izquierda */}
              <img src={selectedProduct.src} alt={selectedProduct.name} className={styles.modalImageSmall} />
              <div className={styles.productInfo}>
                <h2>{selectedProduct.name}</h2>
                <p>{selectedProduct.description}</p>
                <p className={styles.productPrice}>$12.99</p> {/* Aquí puedes agregar el precio o dinámicamente */}
                <button className={styles.closeModal} onClick={closeModal}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarruselMenuEspecial;
