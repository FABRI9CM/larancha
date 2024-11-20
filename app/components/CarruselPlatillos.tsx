"use client";

import { useState } from "react";
import styles from "./CarruselPlatillos.module.css";

const platillos = [
  { src: "/pla1.jpeg", name: "HELADAS" },
  { src: "/pla2.jpg", name: "MARGARITA" },
  { src: "/plat3.jpg", name: "CASADO" },
];

const CarruselPlatillos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === platillos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? platillos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.imageWrapper}>
        <img
          src={platillos[currentIndex].src}
          alt={platillos[currentIndex].name}
          className={styles.image}
        />
        <p className={styles.name}>{platillos[currentIndex].name}</p>
      </div>
      <div className={styles.controls}>
        <button className={styles.button} onClick={prevImage}>
          ◀
        </button>
        <button className={styles.button} onClick={nextImage}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default CarruselPlatillos;
