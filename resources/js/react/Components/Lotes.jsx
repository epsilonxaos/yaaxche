import React, { useContext, useEffect, useMemo, useState } from "react";
import Masterplan from "./Masterplan";
import AppContext from "../context/AppContext";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import MasterplanMovil from "./MasterplanMovil";
import { Link, useNavigate } from "react-router-dom";

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

    useEffect(() => {
        datos.forEach((lt) => {
            let dom = document.querySelectorAll(`.lote${lt.lote} .st0`);

            if (dom) {
                dom.forEach((el) => {
                    if (lt.status == 1) el.classList.add("disponible");
                    else if (lt.status == 2) el.classList.add("apartado");
                    else el.classList.add("vendido");
                });
            }
        });

        datos.forEach((lt) => {
            let dom = document.querySelector(
                `#masterplan .lote${lt.lote} .st0`
            );

            if (dom) {
                if (lt.status == 1) dom.classList.add("disponible");
                else if (lt.status == 2) dom.classList.add("apartado");
                else dom.classList.add("vendido");

                tippy(dom, {
                    aria: null,
                    // trigger: "click",
                    // Important: the tooltip should be DIRECTLY after the reference element
                    // in the DOM source order, which is why it has its own wrapper element
                    appendTo: document.getElementById("masterplan"),
                    // Let the user know the dropdown has been expanded using these lifecycle
                    // functions
                    onMount({ reference }) {
                        reference.setAttribute("aria-expanded", "true");
                    },
                    onHide({ reference }) {
                        reference.setAttribute("aria-expanded", "false");
                    },
                    interactive: true,
                    allowHTML: true,
                    content: `<div
					class="shadow-sm bg-white pr-3 pl-0 flex"
				>
					<div class="${
                        lt.status == 1
                            ? "disponible"
                            : lt.status == 2
                            ? "apartado"
                            : "vendido"
                    } h-[105px] w-3 "></div>
					<div class="px-3 py-1 font-mark text-verde">
						<h5 class="font-bold">
							Lote #${lt.lote}
						</h5>
						<p class="text-sm mb-0">
							${formatearComoMoneda(lt.precio_total)} MXN
						</p>
						<p class="text-sm mb-0">
							${lt.m2} m<sup>2</sup>
						</p>
						<p class="text-sm  mb-2">${
                            lt.status == 1
                                ? "Disponible"
                                : lt.status == 2
                                ? "Apartado"
                                : "Vendido"
                        }</p>
						${
                            lt.status == 1
                                ? `<button
									class="bg-[#b68401] text-white py-1 px-2 w-full rounded-sm"
									type="button"
									onClick="changeCurrentLote(${lt.lote})"
								>
									Cotizar
								</button>`
                                : ""
                        }
					</div>
				</div>`,
                });
            }
        });
        datos.forEach((lt) => {
            let dom = document.querySelector(
                `#masterplan2 .lote${lt.lote} .st0`
            );

            if (dom) {
                if (lt.status == 1) dom.classList.add("disponible");
                else if (lt.status == 2) dom.classList.add("apartado");
                else dom.classList.add("vendido");

                tippy(dom, {
                    aria: null,
                    // trigger: "click",
                    // Important: the tooltip should be DIRECTLY after the reference element
                    // in the DOM source order, which is why it has its own wrapper element
                    appendTo: document.getElementById("masterplan2"),
                    // Let the user know the dropdown has been expanded using these lifecycle
                    // functions
                    onMount({ reference }) {
                        reference.setAttribute("aria-expanded", "true");
                    },
                    onHide({ reference }) {
                        reference.setAttribute("aria-expanded", "false");
                    },
                    interactive: true,
                    allowHTML: true,
                    content: `<div
					class="shadow-sm bg-white pr-3 pl-0 flex"
				>
					<div class="${
                        lt.status == 1
                            ? "disponible"
                            : lt.status == 2
                            ? "apartado"
                            : "vendido"
                    } h-[105px] w-3 "></div>
					<div class="px-3 py-1 font-mark text-verde">
						<h5 class="font-bold">
							Lote #${lt.lote}
						</h5>
						<p class="text-sm mb-0">
							${formatearComoMoneda(lt.precio_total)} MXN
						</p>
						<p class="text-sm mb-0">
							${lt.m2} m<sup>2</sup>
						</p>
						<p class="text-sm  mb-2">${
                            lt.status == 1
                                ? "Disponible"
                                : lt.status == 2
                                ? "Apartado"
                                : "Vendido"
                        }</p>
						${
                            lt.status == 1
                                ? `<button
									class="bg-[#b68401] text-white py-1 px-2 w-full rounded-sm"
									type="button"
									onClick="changeCurrentLote(${lt.lote})"
								>
									Cotizar
								</button>`
                                : ""
                        }
					</div>
				</div>`,
                });
            }
        });
    }, [datos]);

    window.changeCurrentLote = (lote) => {
        window.loteActual = lote;
        setLote(lote);

        if (!isHome) navigate("/");
    };

    return (
        <div className="container-fluid lotes-container bg-[#374c1a] pb-0 md:pt-0">
            <div className="info-container absolute z-10 md:w-[80%] flex items-center justify-center flex-col max-md:mx-auto max-md:mb-5 bg-transparent md:max-w-[360px] max-md:pt-10 max-md:w-full md:top-0 md:bottom-0 md:my-auto">
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
            </div>

            {/* Masterplan */}
            <div className="relative md:block hidden" id="masterplan">
                <img
                    src="/images/masterplan.webp"
                    alt="masterplan"
                    className="w-full"
                />
                <Masterplan />
                <LeyendaUI />
            </div>

            <div className="relative md:hidden" id="masterplan2">
                <img
                    src="/images/masterplanmovil.png"
                    alt="masterplan"
                    className="w-full"
                />
                <MasterplanMovil />
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
