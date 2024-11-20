"use client";

import styles from '../../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/about">SOBRE NOSOTROS</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/rooms">HABITACIONES</Link>
          </li>
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
