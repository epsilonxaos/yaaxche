import Header from "./modules/Header";
import Footer from "./modules/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Thanks from "./pages/Thanks";
import Aviso from "./pages/Aviso";
import ScrollToTop from "./components/ScrollToTop";
import "./css/tailwind.css";
import Masterplan from "./pages/Masterplan";
import AppContext from "./context/AppContext";
import { useEffect, useState } from "react";

function App() {
    const location = useLocation();
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
            <main>
                <ScrollToTop />
                <Routes location={location} key={location.pathname}>
                    <Route
                        index
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    ></Route>
                    <Route path="/thanks" element={<Thanks />}></Route>
                    <Route
                        path="/politicas-privacidad"
                        element={
                            <>
                                <Header themeCrema={false} />
                                <Aviso />
                            </>
                        }
                    ></Route>
                    <Route path="/masterplan" element={<Masterplan />}></Route>
                </Routes>
            </main>
            <Footer />
        </AppContext.Provider>
    );
}

export default App;
