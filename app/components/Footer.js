"use client";

import styles from '../../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        
        <div className={styles.socialIcons}>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <Image src="/whatsapp.png" alt="WhatsApp" width={30} height={30} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.png" alt="Instagram" width={30} height={30} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/facebook.webp" alt="Facebook" width={30} height={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
