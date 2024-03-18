import { Enviado } from "./Pages/Enviado";
import { Homepage } from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context/AppContext";
import { useEffect, useState } from "react";

import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ScrollToTop from "./Components/ScrollToTop";
import Masterplan from "./Pages/Masterplan";

function App() {
    const [datos, setDatos] = useState([]);
    const [lote, setLote] = useState(0);

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
            <ScrollToTop />
            <Routes>
                <Route path="/" index element={<Homepage />} />
                <Route path="/enviado" element={<Enviado />} />
                <Route path="/masterplan" element={<Masterplan />} />
            </Routes>
        </AppContext.Provider>
    );
}

export default App;
