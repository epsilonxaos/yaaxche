import Banner from "../components/home/Banner";
import Introduccion from "../components/home/Introduccion";
import Brochure from "../components/home/Brochure";
import Amenidades from "../components/home/Amenidades";
import Lotificacion from "../components/home/Lotificacion";
import Croquis from "../components/home/Croquis";
import Cotizador from "../components/home/Cotizador";
import Maps from "../components/home/Maps";
import Contacto from "../components/home/Contacto";
import { useEffect, useState } from "react";
import axios from "axios";
import AppContext from "../context/AppContext";

export default function Home() {
    const [datos, setDatos] = useState([]);
    const [lote, setLote] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                import.meta.env.VITE_APP_URL + "api/lotificacion"
            );

            setDatos(response.data);
        }
        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ datos, lote, setLote }}>
            <Banner />
            <Introduccion />
            <Brochure />
            <Amenidades />
            <Croquis />
            <Lotificacion />
            <Cotizador />
            <Maps />
            <Contacto />
        </AppContext.Provider>
    );
}
