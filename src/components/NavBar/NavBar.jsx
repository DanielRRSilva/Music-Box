import React from "react";
import styles from "./NavBar.module.css"

const NavBar =  ({LogoInicio}) => {
    return(
        <nav className={styles["navbar"]}>
            <img src={LogoInicio} alt="Logo Início" className={styles["logo-inicio"]} />
            <button className={styles['logo-fim']}>Ver Musicas</button>
        </nav>
    );
}

export default NavBar;