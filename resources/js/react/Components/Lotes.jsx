import React from "react";
import Masterplan from "./Masterplan";

export const Lotes = () => {
    return (
        <div className="container-fluid lotes-container">
            <Masterplan />
            <div className="info-container">
                <img src="/images/logo_cafe.svg" alt="" />
                <h2>
                    Entrega <br />
                    2026
                </h2>
                <a className="button" href="#contacto-section">
                    <img src="/images/amenidades/5.svg" alt="" />
                    Agendar videollamada
                </a>
            </div>
        </div>
    );
};
