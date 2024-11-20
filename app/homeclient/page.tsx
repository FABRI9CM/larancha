"use client";

import { useState } from "react";
import CarruselMenu from "../components/CarruselMenu";
import CarruselPlatillos from "../components/CarruselPlatillos";
import styles from "../../styles/HomeClient.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeClient = () => {
  const [view, setView] = useState<"menu" | "platillos">("menu");

  return (
    <>
      <Header />

      <div className={styles.carouselContainer}>
        <div className={styles.menuButtons}>
          <button
            className={`${styles.menuButton} ${
              view === "menu" ? styles.activeButton : ""
            }`}
            onClick={() => setView("menu")}
          >
            Conocer Menú
          </button>
          <button
            className={`${styles.menuButton} ${
              view === "platillos" ? styles.activeButton : ""
            }`}
            onClick={() => setView("platillos")}
          >
            Ver Platillos
          </button>
        </div>

        <div className={styles.carouselDisplay}>
          {view === "menu" ? <CarruselMenu /> : <CarruselPlatillos />}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomeClient;
