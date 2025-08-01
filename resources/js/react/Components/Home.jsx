import React from "react";

export const Home = () => {
    return (
        <div className="container-fluid banner-container">
            <div className="info">
                <img src="/images/logo_blanco.png" alt="" />
                <h1>
                    Lotes patrimoniales con amenidades premium en Dzidzantún,
                    Yucatán
                </h1>
                <p>Rodeada de sostenibilidad y exclusividad</p>
                <p className="price">Precios desde $90,200</p>
            </div>
            <a className="schedule button" href="#contacto-section">
                <img src="/images/amenidades/5.svg" alt="" />
                Agendar videollamada
            </a>
        </div>
    );
};
