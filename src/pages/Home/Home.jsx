import React from "react";
import imgPrincipal from "../../utils/assets/img-fundo-principal.png";
import logo from "../../utils/assets/logo.svg";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <NavBar LogoInicio={logo} />
      <div className={styles["background-image"]}>
        <img src={imgPrincipal} alt="Imagem de fundo" />
        <div className={styles["titulo"]}>
          <h1>
            Deixe a musica <span> sair da caixa</span>
          </h1>
          <button>Começar</button>
        </div>
      </div>
    </>
  );
};

export default Home;
