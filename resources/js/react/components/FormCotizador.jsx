import { useEffect, useMemo, useState } from "react";
import lotesData from "../data/lotes.json";
import plazosData from "../data/plazos.json";
import { formatearNumero } from "../utils/helpers";

export default function FormCotizador() {
	const lotesJson = useMemo(() => lotesData, []);
	const plazosJson = useMemo(() => plazosData, []);
	const plazosKey = {
		18: "precio18",
		12: "precio12",
		contado: "precio",
	};

	const [lote, setLote] = useState("");
	const [plazo, setPlazo] = useState("");

	const [resultados, setResultados] = useState({
		enganche: "",
		contraentrega: "",
		mensualidad: "",
		montoDiferir: "",
	});

	function calcularResultados() {
		const currentLote = lotesJson[lote];
		const currentPlazo = plazosKey[plazo];
		const precio = currentLote[currentPlazo];

		const enganche = (precio * 30) / 100;
		const contraentrega = (precio * 20) / 100;
		const montoDiferir = (precio * 50) / 100;
		const mensualidad = montoDiferir / plazo;

		console.log({ currentPlazo, enganche, contraentrega, mensualidad, montoDiferir });

		setResultados({ enganche, contraentrega, mensualidad, montoDiferir });
	}

	useEffect(() => {
		if (lote && plazo) calcularResultados();
	}, [lote, plazo]);

	return (
		<div className="relative">
			<form action="" className="flex flex-col md:flex-row md:flex-wrap text-paragraph md:text-sm lg:text-lg bg-crema max-w-[1100px] md:w-[90%] px-[25px] lg:px-[80px] py-[50px] md:mx-auto md:absolute md:left-0 md:right-0 md:-top-[50px] lg:-top-[170px]">
				<h3 className="text-verde title-v1 text-center mb-8 w-full">Cotizador</h3>
				<div className="w-full md:w-1/2 px-5 mb-8 relative">
					<ArrowSelect />
					<select onChange={(ev) => setLote(ev.target.value)} defaultValue={lote} name="lote" id="lote" className="bg-verde appearance-none px-5 uppercase text-crema select w-full h-[70px] mb-1">
						<option value="" selected>
							Selecciona tu lote
						</option>
						{lotesJson.map(({ status, lote }, index) => {
							if (status == "disponible")
								return (
									<option key={"lote" + lote} value={index}>
										Lote {lote}
									</option>
								);
						})}
					</select>
				</div>
				<div className="w-full md:w-1/2 px-5 mb-8 relative">
					<ArrowSelect />
					<select onChange={(ev) => setPlazo(ev.target.value)} defaultValue={plazo} name="plazo" id="plazo" className="bg-verde appearance-none px-5 uppercase text-crema select w-full h-[70px] mb-1">
						<option value="" selected>
							Plazo de mensualidades
						</option>
						{plazosJson.map(({ plazo, active, title }) => {
							if (active)
								return (
									<option key={plazo} value={plazo}>
										{title}
									</option>
								);
						})}
					</select>
				</div>
				<div className="w-full md:w-1/2 px-5 mb-8">
					<Input name="enganche" value={formatearNumero(resultados.enganche, 0, "$")} />
					<label htmlFor="enganche" className="uppercase text-verde text-paragraph">
						30% enganche
					</label>
				</div>
				<div className="w-full md:w-1/2 px-5 mb-8">
					<Input name="contraentrega" value={formatearNumero(resultados.contraentrega, 0, "$")} />
					<label htmlFor="contraentrega" className="uppercase text-verde text-paragraph">
						20% contraentrega
					</label>
				</div>
				<div className="w-full md:w-1/2 px-5 mb-8">
					<Input name="montoDiferir" value={formatearNumero(resultados.montoDiferir, 0, "$")} />
					<label htmlFor="montoDiferir" className="uppercase text-verde text-paragraph">
						Monto a diferir
					</label>
				</div>
				<div className="w-full md:w-1/2 px-5 mb-8">
					<Input name="mensualidades" value={formatearNumero(resultados.mensualidad, 0, "$")} />
					<label htmlFor="mensualidades" className="uppercase text-verde text-paragraph">
						Mensualidades
					</label>
				</div>
			</form>
		</div>
	);
}

function Input({ name, onChange = () => {}, value }) {
	return <input type="text" {...(onChange && { onChange })} {...(value && { value })} name={name} id={name} className="bg-verde pointer-events-none text-center text-crema px-6 w-full h-[70px] mb-1" />;
}

function ArrowSelect() {
	return (
		<span className="absolute top-1/2 -translate-y-1/2 right-8 z-10">
			<img
				width={20}
				height={20}
				src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yNCAwdjI0SDBWMHpNMTIuNTkzIDIzLjI1OGwtLjAxMS4wMDJsLS4wNzEuMDM1bC0uMDIuMDA0bC0uMDE0LS4wMDRsLS4wNzEtLjAzNWMtLjAxLS4wMDQtLjAxOS0uMDAxLS4wMjQuMDA1bC0uMDA0LjAxbC0uMDE3LjQyOGwuMDA1LjAybC4wMS4wMTNsLjEwNC4wNzRsLjAxNS4wMDRsLjAxMi0uMDA0bC4xMDQtLjA3NGwuMDEyLS4wMTZsLjAwNC0uMDE3bC0uMDE3LS40MjdjLS4wMDItLjAxLS4wMDktLjAxNy0uMDE3LS4wMThtLjI2NS0uMTEzbC0uMDEzLjAwMmwtLjE4NS4wOTNsLS4wMS4wMWwtLjAwMy4wMTFsLjAxOC40M2wuMDA1LjAxMmwuMDA4LjAwN2wuMjAxLjA5M2MuMDEyLjAwNC4wMjMgMCAuMDI5LS4wMDhsLjAwNC0uMDE0bC0uMDM0LS42MTRjLS4wMDMtLjAxMi0uMDEtLjAyLS4wMi0uMDIybS0uNzE1LjAwMmEuMDIzLjAyMyAwIDAgMC0uMDI3LjAwNmwtLjAwNi4wMTRsLS4wMzQuNjE0YzAgLjAxMi4wMDcuMDIuMDE3LjAyNGwuMDE1LS4wMDJsLjIwMS0uMDkzbC4wMS0uMDA4bC4wMDQtLjAxMWwuMDE3LS40M2wtLjAwMy0uMDEybC0uMDEtLjAxeiIvPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMi43MDcgMTUuNzA3YTEgMSAwIDAgMS0xLjQxNCAwTDUuNjM2IDEwLjA1QTEgMSAwIDEgMSA3LjA1IDguNjM2bDQuOTUgNC45NWw0Ljk1LTQuOTVhMSAxIDAgMCAxIDEuNDE0IDEuNDE0eiIvPjwvZz48L3N2Zz4="
				alt="Arrow select"
			/>
		</span>
	);
}
