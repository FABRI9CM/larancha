"use client"; // Asegúrate de incluir esta línea

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Login.module.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Lógica de redirección basada en el nombre de usuario
        if (username === 'Admin') {
            router.push('/homeadmin'); // Redirige a /homeadmin
        } else if (username) {
            router.push('/homeclient'); // Redirige a /homeclient
        } else {
            alert('Por favor, ingresa un nombre de usuario válido.');
        }
    };

    return (
        <div className={styles.container}>
            <Image src="/img1.avif" alt="Background" fill style={{ objectFit: 'cover' }} className={styles.background} />
            <div className={styles.overlay}></div>
            <div className={styles.loginBox}>
                <Image src="/logo.png" alt="Logo" width={60} height={60} className={styles.logo} />
                <h2 className={styles.title}>Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <input 
                        type="text" 
                        placeholder="Nombre de usuario" 
                        className={styles.input} 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        className={styles.input} 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type="submit" className={styles.button}>Ingresar</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
