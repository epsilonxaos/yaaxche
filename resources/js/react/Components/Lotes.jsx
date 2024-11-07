import React, { useContext, useEffect, useMemo, useState } from "react";
// import Masterplan from "./Masterplan";
import AppContext from "../context/AppContext";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import MasterplanMovil from "./MasterplanMovil";
import { Link, useNavigate } from "react-router-dom";

import masterplanEtapa3 from "../assets/etapa3/escritorio.png";
import masterplanEtapa3Movil from "../assets/etapa3/movil.jpeg";
import Masterplan from "./masterplan/Masterplan";
import { useMediaQuery } from "react-responsive";

export function formatearComoMoneda(valor) {
    // Verificar si el valor es una cadena, si es así, convertirlo a número
    if (typeof valor === "string") {
        valor = parseFloat(valor);
    }

    // Verificar si el valor es un número
    if (typeof valor === "number" && !isNaN(valor)) {
        // Formatear el número con separadores de miles y dos decimales
        return valor.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    } else {
        // Devolver un mensaje de error si el valor no es válido
        return "Valor no válido";
    }
}

export const Lotes = ({ isHome = true }) => {
    const { datos, setLote, lote } = useContext(AppContext);
    const navigate = useNavigate();

    const isDesktopOrTablet = useMediaQuery({ query: "(min-width: 768px)" });

    return (
        <div className="container-fluid lotes-container bg-[#374c1a] pb-0 md:pt-0">
            {/* <div className="info-container absolute z-10 md:w-[80%] flex items-center justify-center flex-col max-md:mx-auto max-md:mb-5 bg-transparent md:max-w-[360px] max-md:pt-10 max-md:w-full md:top-0 md:bottom-0 md:my-auto">
                <img src="/images/logo_cafe.svg" alt="" />
                <h2>
                    Entrega <br />
                    2027
                </h2>
                {isHome ? (
                    <a className="button" href="#contacto-section">
                        <img src="/images/amenidades/5.svg" alt="Icono" />
                        Agendar videollamada
                    </a>
                ) : (
                    <Link className="button" to={"/#contacto-section"}>
                        <img src="/images/amenidades/5.svg" alt="Icono" />
                        Agendar videollamada
                    </Link>
                )}
            </div> */}

            {/* Masterplan */}
            <div className="relative " id="masterplan">
                {isDesktopOrTablet ? (
                    <img
                        src={masterplanEtapa3}
                        alt="masterplan"
                        className="w-full"
                    />
                ) : (
                    <img
                        src={masterplanEtapa3Movil}
                        alt="masterplan"
                        className="w-full"
                    />
                )}
                <Masterplan />
                <LeyendaUI />
            </div>
        </div>
    );
};

function LeyendaUI() {
    return (
        <div className="bg-white absolute bottom-4 right-4 py-2 px-2 rounded-md">
            <ul className="flex flex-col sm:flex-row items-center justify-start sm:justify-center gap-3 sm:gap-6 p-0 mb-0">
                <Leyenda color={"disponible"} title={"Disponible"} />
                <Leyenda color={"apartado"} title={"Apartado"} />
                <Leyenda color={"vendido"} title={"Vendido"} />
            </ul>
        </div>
    );
}

function Leyenda({ color, title }) {
    return (
        <li className="flex items-center sm:justify-center text-sm text-left px-0 w-full">
            <span
                className={`${color} block h-[20px] w-[20px] rounded-full mr-2`}
            ></span>{" "}
            {title}
        </li>
    );
}
