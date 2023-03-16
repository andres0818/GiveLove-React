import React from 'react';
import styles from "./Footer.module.scss";
import LOG from '../../assets/LOG.png';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className={styles.seccion}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.columna}>
            <img src={LOG} alt="" className={styles.logofooter} />
            <h2 className={styles.love}>Give<span>Love</span></h2>
            </div>
            <div className={styles.columna}>
                    <h3>
                        Temas relacionados
                    </h3>
                    <ul>
                        <li>Quienes somos</li>
                        <li>Contactenos</li>
                        <li>Red de amigos</li>
                    </ul>
                </div>
                <div className={styles.columna}>
                    <h3>
                        Datos de contacto
                    </h3>
                    <ul>
                        <li>giovaniitj@gmail.com</li>
                        <li>+573502356987</li>
                        <li>Av cali con medellin <br /> Colombia -Cali</li>
                    </ul>
                </div>
                <div className={styles.columna}>
                    <h3 className="title">
                        Redes sociales
                    </h3>
                    <ul className={styles.redes}>
                        <li>
                                <BsFacebook />
                        </li>
                        <li>
                                <BsInstagram />
                        </li>
                        <li>
                                <BsTwitter />
                        </li>
                    </ul>
                </div>
                <div className={styles.barra}>
            &copy; Derechos Reservados - 2023
        </div>
    </div>
    </div>
    </footer>
  )
};

export default Footer