"use client";

import styles from '../../styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/about">SOBRE NOSOTROS</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/rooms">HABITACIONES</Link>
          </li>
          
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"  
              alt="Logo"
              width={100}  // Ajusta el tamaño según sea necesario
              height={100} // Ajusta el tamaño según sea necesario
            />
          </div>

          <li className={styles.navItem}>
            <Link href="/restaurant">RESTAURANTE</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">CONTACTO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
