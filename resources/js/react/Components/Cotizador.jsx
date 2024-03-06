import React, { useState, useEffect } from "react";
import Select from "react-select";
import data from "../data.json";

export const Cotizador = () => {
    const [selectedLote, setSelectedLote] = useState(null);
    const [selectedMensualidad, setSelectedMensualidad] = useState(null);

    const [enganche, setEnganche] = useState(0);
    const [mensualidades, setMensualidades] = useState(0);

    const handleLoteChange = (selectedOption) => {
        setSelectedLote(selectedOption.value);
    };

    const handleMensualidadChange = (selectedOptions) => {
        setSelectedMensualidad(selectedOptions.value);
    };

    useEffect(() => {
        if (selectedLote != null && selectedMensualidad != null) {
            setEnganche(selectedLote * 0.15);
            setMensualidades(
                (
                    (selectedLote - selectedLote * 0.15) /
                    selectedMensualidad
                ).toFixed(2)
            );
        } else {
            setEnganche(0);
            setMensualidades(0);
        }
    }, [selectedLote, selectedMensualidad]);

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
        <div className="container-fluid cotizador-container">
            <div className="overlay"></div>
            <div className="info-container">
                <img src="/images/amenidades/4.svg" alt="" />
                <h2>Financiamiento directo con nosotros</h2>
                <a href="#contacto-section" className="button">
                    Precios desde $55,000
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
                                options={data.lotes}
                                onChange={handleLoteChange}
                                styles={customStyles}
                                placeholder="Elija un lote a cotizar"
                            />
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-5 col-lg-5">
                            <label>Enganche - 15%</label>
                            <input
                                type="text"
                                readOnly
                                value={`${enganche}`}
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
                                value={`${mensualidades}`}
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
