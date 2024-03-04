import { Enviado } from "./Pages/Enviado";
import { Homepage } from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";

import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/enviado" element={<Enviado />} />
        </Routes>
    );
}

export default App;
