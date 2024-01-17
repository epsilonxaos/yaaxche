import Header from "./modules/Header";
import Footer from "./modules/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Thanks from "./pages/Thanks";
import Aviso from "./pages/Aviso";
import ScrollToTop from "./components/ScrollToTop";
import "./css/tailwind.css";

function App() {
	const location = useLocation();

	return (
		<>
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
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
