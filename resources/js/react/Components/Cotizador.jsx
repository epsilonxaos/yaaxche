import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
import data from "../data.json";
import AppContext from "../context/AppContext";
import { formatearComoMoneda } from "./Lotes";
import { useNavigate } from "react-router-dom";

export const Cotizador = () => {
    const [selectedLote, setSelectedLote] = useState(null);
    const [selectedMensualidad, setSelectedMensualidad] = useState(null);
    const [dataLote, setDataLote] = useState([]);
    const { datos, lote } = useContext(AppContext);

    const [enganche, setEnganche] = useState(0);
    const [mensualidades, setMensualidades] = useState(0);
    const navigate = useNavigate();
    const handleLoteChange = (selectedOption) => {
        setSelectedLote(selectedOption);
    };

    const handleMensualidadChange = (selectedOptions) => {
        setSelectedMensualidad(selectedOptions.value);
    };

    useEffect(() => {
        if (selectedLote != null && selectedMensualidad != null) {
            const currentLote = datos.find((l) => l.lote == selectedLote.value);
            setEnganche(currentLote.precio_total * 0.15);
            setMensualidades(
                (
                    (currentLote.precio_total -
                        currentLote.precio_total * 0.15) /
                    selectedMensualidad
                ).toFixed(2)
            );
        } else {
            setEnganche(0);
            setMensualidades(0);
        }
    }, [selectedLote, selectedMensualidad]);

    useEffect(() => {
        if (datos.length) {
            const loteFormatted = [];
            datos.forEach((lote) => {
                if (lote.status == 1) {
                    loteFormatted.push({
                        value: lote.lote,
                        label: `Lote #${lote.lote} - ${formatearComoMoneda(
                            lote.precio_total
                        )}`,
                    });
                }
            });

            setDataLote(loteFormatted);
        }
    }, [datos]);

    useEffect(() => {
        if (lote) {
            const currentLote = datos.find((l) => l.lote == lote);
            setSelectedLote({
                value: currentLote.lote,
                label: `Lote #${currentLote.lote} - ${formatearComoMoneda(
                    currentLote.precio_total
                )}`,
            });

            navigate("/#cotizador");
        }
    }, [lote]);

    const customStyles = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: state.isSelected ? "#213229" : "#213229",
            backgroundColor: state.isSelected ? "#fff" : "#fff",
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "#213229",
            padding: "10px",
            border: "none",
            boxShadow: "none",
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
    };
    return (
        <div className="container-fluid cotizador-container" id="cotizador">
            <div className="overlay"></div>
            <div className="info-container">
                <img src="/images/amenidades/4.svg" alt="" />
                <h2>Financiamiento directo con nosotros</h2>
                <a href="#contacto-section" className="button">
                    Precios desde $61,250
                </a>
                <h6>15% de enganche</h6>
                <p>
                    Financiamiento de 6, 12, 36 y{" "}
                    <b>
                        <i>hasta 48 meses.</i>
                    </b>
                </p>
            </div>
            <div className="cotizador">
                <h3>Cotizador</h3>
                <form action="">
                    <div className="row justify-content-evenly">
                        <div className="col-xs-10 col-sm-10 col-md-5 col-lg-5">
                            <label>Lotes</label>
                            <Select
                                options={dataLote}
                                onChange={handleLoteChange}
                                value={selectedLote}
                                styles={customStyles}
                                placeholder="Elija un lote a cotizar"
                            />
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-5 col-lg-5">
                            <label>Enganche - 15%</label>
                            <input
                                type="text"
                                readOnly
                                value={`${formatearComoMoneda(enganche)}`}
                                placeholder="15% Enganche"
                            />
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-5 col-lg-5">
                            <label>Mensualidades</label>
                            <Select
                                options={data.mensualidades}
                                onChange={handleMensualidadChange}
                                styles={customStyles}
                                placeholder="Mensualidades"
                            />
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-5 col-lg-5">
                            <label>Pago mensual</label>
                            <input
                                type="text"
                                readOnly
                                value={`${formatearComoMoneda(mensualidades)}`}
                                placeholder="Mensualidades"
                            />
                        </div>
                    </div>
                </form>
                <span>
                    Información meramente informativa y sujeto a cambio de
                    precio sin previo aviso*
                </span>
            </div>
        </div>
    );
};
