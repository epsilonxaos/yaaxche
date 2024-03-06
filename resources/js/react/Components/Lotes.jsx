import React, { useContext, useEffect } from "react";
import Masterplan from "./Masterplan";
import AppContext from "../context/AppContext";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

function formatearComoMoneda(valor) {
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

export const Lotes = () => {
    const { datos } = useContext(AppContext);

    useEffect(() => {
        datos.forEach((lt) => {
            let dom = document.querySelectorAll(`.lote${lt.lote} .st0`);

            if (dom) {
                dom.forEach((el) => {
                    if (lt.status == 1) el.classList.add("disponible");
                    else if (lt.status == 2) el.classList.add("apartado");
                    else el.classList.add("vendido");

                    tippy(el, {
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
								${formatearComoMoneda(lt.precio_6)} MXN
							</p>
							<p class="text-sm mb-0">
								${lt.m2} m<sup>2</sup>
							</p>
							<p class="text-sm  mb-0">${
                                lt.status == 1
                                    ? "Disponible"
                                    : lt.status == 2
                                    ? "Apartado"
                                    : "Vendido"
                            }</p>
		
						</div>
					</div>`,
                    });
                });
            }
        });
    }, [datos]);

    return (
        <div className="container-fluid lotes-container bg-[#374c1a] pb-0 md:pt-0">
            <div className="info-container md:absolute md:z-10 flex items-center justify-center flex-col max-md:mx-auto max-md:mb-5 bg-transparent md:max-w-[360px] md:top-0 md:bottom-0 md:my-auto">
                <img src="/images/logo_cafe.svg" alt="" />
                <h2>
                    Entrega <br />
                    2027
                </h2>
                <a className="button" href="#contacto-section">
                    <img src="/images/amenidades/5.svg" alt="" />
                    Agendar videollamada
                </a>
            </div>

            {/* Masterplan */}
            <div className="relative" id="masterplan">
                <img
                    src="/images/masterplan.webp"
                    alt="masterplan"
                    className="w-full"
                />
                <Masterplan />
            </div>
        </div>
    );
};
