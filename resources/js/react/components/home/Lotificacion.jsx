import cover from "../../assets/lotificacion/cover.jpg";
import BtnVideollamada from "../BtnVideollamada";

export default function Lotificacion() {
	return (
		<section className="relative">
			<header className="bg-crema pt-[35px] pb-[10px] lg:pb-[20px] px-[30px] text-center lg:max-w-[630px] lg:absolute lg:left-0 lg:right-0 lg:mx-auto lg:top-[50px]">
				<h3 className="title-v1 mb-4 text-verde">
					<span className="font-normal">entrega</span> diciembre 2024.
				</h3>
				<div className="lg:absolute lg:left-0 lg:right-0 lg:mx-auto">
					<BtnVideollamada />
				</div>
			</header>
			<img src={cover} alt="Lotificacion" className="w-full min-h-[400px] object-cover max-h-screen lg:min-h-[800px]" />
			<div className="py-[25px] bg-verde lg:max-w-[960px] lg:absolute lg:left-0 lg:right-0 lg:mx-auto lg:bottom-8 lg:py-[15px]">
				<ul className="flex flex-col text-paragraph md:text-base text-crema max-w-max mx-auto md:flex-row md:flex-wrap md:justify-center md:items-center md:gap-2 md:max-w-[850px] lg:gap-1 mb-4">
					<ListLoti icon={"img/lotificacion/icons/1.png"} title={"Caseta de acceso"} />
					<ListLoti icon={"img/lotificacion/icons/2.png"} title={"Pet Park"} />
					<ListLoti icon={"img/lotificacion/icons/3.png"} title={"Cancha de Pádel"} />
					<ListLoti icon={"img/lotificacion/icons/4.png"} title={"Cancha de uso múltiple"} />
					<ListLoti icon={"img/lotificacion/icons/5.png"} title={"Área de asador"} />
					<ListLoti icon={"img/lotificacion/icons/6.png"} title={"Casa club"} />
					<ListLoti icon={"img/lotificacion/icons/7.png"} title={"Circuito de Jogging y Ciclovía"} />
					<ListLoti icon={"img/lotificacion/icons/8.png"} title={"Parque infantil"} />
				</ul>
				<p className="text-center opacity-75 text-paragraph font-normal text-crema">Imágenes con fines ilustrativos, sujeto a cambios</p>
			</div>
		</section>
	);
}

function ListLoti({ icon, title }) {
	return (
		<li className="mb-1 max-w-max lg:mr-2">
			<ImgClicle icon={icon} /> {title}
			{/* <CircleNumber number={number} /> {title} */}
		</li>
	);
}
function ImgClicle({ icon }) {
	return <img alt="icon" src={icon} className="bg-crema object-contain w-[28px] h-[28px] inline rounded-full mr-1" />;
}
function CircleNumber({ number }) {
	return <span className="bg-crema text-verde w-[20px] h-[20px] inline-flex items-center justify-center rounded-full mr-1">{number}</span>;
}
