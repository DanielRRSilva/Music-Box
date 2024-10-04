import api from "../../api"
import React from "react";
import logo from "../../utils/assets/logo.svg"
import styles from "./Musicas.module.css"
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import CardMusica from "../../components/CardMusica/CardMusica";

const Musicas = () => {
    const [cardsData, setCardsData] = useState()
    function recuperarValorDoCard() {
        api.get().then((response) => {
            const {data} = response
            console.log(data)
            setCardsData(data)
        }).catch((error) => {
            console.log("Deu erro, tente novamente")
        })
    }

    useEffect(() => {
        recuperarValorDoCard()
    }, [])

    return(
        <>
            <NavBar LogoInicio={logo}/>
            <div className={styles["content-musicas"]}>
                {cardsData && cardsData.map((data, index) => (
                    <div key={index} className={styles["quadrado"]}>
                        <CardMusica artista={data.artista} nomeMusica={data.nomeMusica} genero={data.genero} anoLancamento={data.ano} imagemSrc={data.imagem}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Musicas