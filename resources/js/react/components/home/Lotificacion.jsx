import cover from "../../assets/lotificacion/cover.jpg";
import BtnVideollamada from "../BtnVideollamada";
import masterplan from "../../assets/lotificacion/masterplan.jpg";
import { Masterplan } from "../Assets";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import Button from "../Button";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

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

export default function Lotificacion() {
    const { datos } = useContext(AppContext);

    useEffect(() => {
        datos.forEach((lt) => {
            let dom = null;
            if (lt.id <= 9) dom = document.querySelector(`#lote0${lt.id} .st3`);
            else dom = document.querySelector(`#lote${lt.id} .st3`);

            if (dom) {
                if (lt.status == 1) dom.classList.add("disponible");
                else if (lt.status == 2) dom.classList.add("apartado");
                else dom.classList.add("vendido");

                tippy(dom, {
                    aria: null,
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
                    } h-[125px] w-3 "></div>
					<div class="p-3 font-mark text-verde">
						<h4 class="font-bold font-tranja">
							Lote #${lt.lote}
						</h4>
						<p class="text-sm">
							${formatearComoMoneda(lt.precio)} MXN
						</p>
						<p class="text-sm">
							${lt.m2} m<sup>2</sup>
						</p>
						<p class="text-sm mb-2 ">${
                            lt.status == 1
                                ? "Disponible"
                                : lt.status == 2
                                ? "Apartado"
                                : "Vendido"
                        }</p>

						${
                            lt.status == 1
                                ? `<button onClick="${() => {
                                      selectLote(lt.id);
                                  }}" class='bg-crema w-full py-1 text-center'>Cotizar</button>`
                                : ""
                        }
					</div>
				</div>`,
                });
            }
        });
    }, [datos]);

    return (
        <>
            <div className="bg-crema pb-[30px]">
                <ul className="flex items-center justify-center gap-6">
                    <Leyenda color={"disponible"} title={"Disponible"} />
                    <Leyenda color={"apartado"} title={"Apartado"} />
                    <Leyenda color={"vendido"} title={"Vendido"} />
                </ul>
            </div>

            <section className="relative">
                <header className="bg-crema pt-[35px] pb-[10px] lg:pt-[15px] lg:pb-[5px] px-[30px] text-center lg:max-w-[630px] lg:absolute lg:left-0 lg:right-0 lg:mx-auto lg:top-[0px]">
                    <h3 className="title-v1 mb-4 text-verde">
                        <span className="font-normal">entrega</span> diciembre
                        2024.
                    </h3>
                    <div className="lg:absolute lg:left-0 lg:right-0 lg:mx-auto lg:bottom-[-20px] lg:scale-75">
                        <BtnVideollamada />
                    </div>
                </header>

                <div
                    id="masterplan"
                    className="bg-contain bg-center bg-no-repeat relative"
                    style={{ backgroundImage: `url(${masterplan})` }}
                >
                    <Masterplan />
                </div>
                <div className="py-[25px] bg-verde lg:bg-opacity-90 lg:max-w-[850px] lg:absolute lg:left-0 lg:right-0 lg:mx-auto lg:bottom-0 lg:py-[10px] lg:pt-[5px]">
                    <ul className="flex flex-col lg:scale-[.80] 2xl:scale-100 text-paragraph md:text-base text-crema max-w-max mx-auto md:flex-row md:flex-wrap md:justify-center md:items-center md:gap-2 md:max-w-[850px] lg:gap-1 mb-4 lg:mb-0 2xl:mb-3">
                        <ListLoti
                            icon={"img/lotificacion/icons/1.png"}
                            title={"Caseta de acceso"}
                        />
                        <ListLoti
                            icon={"img/lotificacion/icons/2.png"}
                            title={"Pet Park"}
                        />
                        <ListLoti
                            icon={"img/lotificacion/icons/3.png"}
                            title={"Cancha de Pádel"}
                        />
                        <ListLoti
                            icon={"img/lotificacion/icons/4.png"}
                            title={"Cancha de uso múltiple"}
                        />
                        <ListLoti
                            icon={"img/lotificacion/icons/5.png"}
                            title={"Área de asador"}
                        />
                        <ListLoti
                            icon={"img/lotificacion/icons/6.png"}
                            title={"Casa club"}
                        />
                        <ListLoti
                            icon={"img/lotificacion/icons/8.png"}
                            title={"Parque infantil"}
                        />
                        <ListLoti
                            icon={"img/lotificacion/icons/7.png"}
                            title={"Circuito de Jogging y Ciclovía"}
                        />
                    </ul>
                    <p className="text-center opacity-75 text-paragraph font-normal text-crema lg:text-xs">
                        Imágenes con fines ilustrativos, sujeto a cambios
                    </p>
                </div>
            </section>
            <div className="text-center bg-crema py-8">
                <Link to={"/#contacto"}>
                    <Button className="mb-4 md:mb-0" theme={"verde"}>
                        Solicitar cotización
                    </Button>
                </Link>
            </div>
        </>
    );
}

function Test() {
    return <div>Hola</div>;
}

function ListLoti({ icon, title }) {
    return (
        <li className="mb-1 max-w-max lg:mr-2 lg:text-xs lg:mb-0">
            <ImgClicle icon={icon} /> {title}
            {/* <CircleNumber number={number} /> {title} */}
        </li>
    );
}
function ImgClicle({ icon }) {
    return (
        <img
            alt="icon"
            src={icon}
            className="bg-crema object-contain  inline rounded-full mr-1"
        />
    );
}

function Leyenda({ color, title }) {
    return (
        <li className="flex items-center justify-center">
            <span
                className={`${color} block h-[20px] w-[20px] rounded-full mr-2`}
            ></span>{" "}
            {title}
        </li>
    );
}
