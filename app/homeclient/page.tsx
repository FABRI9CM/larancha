"use client";
import { useEffect } from 'react';
import { useState } from "react";
import CarruselMenu from "../components/CarruselMenu";
import CarruselPlatillos from "../components/CarruselPlatillos";
import styles from "../../styles/HomeClient.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarruselMenuEspecial from "../components/CarruselMenuEspecial";

const HomeClient = () => {
  // Aquí es donde colocas el hook useEffect
  useEffect(() => {
    const element = document.getElementById('elementId');
    if (element) {
      element.removeChild(someChild);
    }
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <>
      <Header />

      <div className={styles.carouselContainer}>
        {/* Sección Carrusel Menú */}
        <section className={styles.section}>
          <CarruselMenu />
          <h2 className={styles.sectionTitle}>Conocer Menú</h2>
        </section>

        {/* Sección Carrusel Platillos */}
        <section className={styles.section}>
          <CarruselPlatillos />
          <h2 className={styles.sectionTitle}>Platillos</h2>
        </section>
      </div>

      {/* Sección Carrusel Menú Especial */}
      <section className={styles.section}>
        <CarruselMenuEspecial />
        <h2 className={styles.sectionTitle}>Menús Especiales</h2>

      </section>

      <Footer />
    </>
  );
};

export default HomeClient;
