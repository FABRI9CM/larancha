"use client";

import { useState } from "react";
import styles from "./CarruselMenu.module.css";

const CarruselMenu = () => {
  const images = [
    "foto1.png",
    "foto2.png",
    "foto3.png",
    "foto4.png",
    "foto5.png",
    "foto6.png",
    
  ]; // Nombres de las imágenes en /public

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.arrowButtonLeft} onClick={prevImage}>
        ◀
      </button>

      <div className={styles.carouselContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={`/${images[currentIndex]}`}
            alt={`Foto ${currentIndex + 1}`}
            className={styles.image}
          />
        </div>
      </div>

      <button className={styles.arrowButtonRight} onClick={nextImage}>
        ▶
      </button>
    </div>
  );
};

export default CarruselMenu;
