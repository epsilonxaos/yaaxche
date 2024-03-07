import React from "react";
import { Home } from "../Components/Home";
import { Discover } from "../Components/Discover";
import { Etapa } from "../Components/Etapa";
import { Hero } from "../Components/Hero";
import { Lotes } from "../Components/Lotes";
import { Mapa } from "../Components/Mapa";
import { Contact } from "../Components/Contact";
import { Amenidades } from "../Components/Amenidades";
import { Cotizador } from "../Components/Cotizador";
import { Footer } from "../Components/Footer";
import { Ubicacion } from "../Components/Ubicacion";

export const Homepage = () => {
    return (
        <>
            <Home />
            <Discover />
            <Etapa />
            <Hero />
            <Amenidades />
            <Lotes />
            <Mapa />
            <Cotizador />
            <Ubicacion />
            <Contact />
            <Footer />
        </>
    );
};
