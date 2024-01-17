import cover from "../../assets/introduccion/cover.jpg";
import adorno from "../../assets/introduccion/adorno.svg";

export default function Introduccion() {
	return (
		<section className="bg-white relative lg:py-[100px]">
			<div className="flex flex-col lg:flex-row-reverse lg:w-[90%] lg:mr-0 lg:ml-auto relative z-10">
				<div className="w-full lg:w-[calc(100%-450px)] xl:w-[calc(100%-560px)]">
					<img src={cover} alt="Casa Club" className="h-[320px] lg:h-[580px] w-full object-cover" />
				</div>
				<div className="w-full lg:w-[450px] xl:w-[560px] text-verde px-[50px] py-[70px] lg:px-0 lg:pr-[65px]">
					<h3 className="title-v1 mb-1">Mérida, Yucatán</h3>
					<p className="text-paragraph mb-10">
						Es también la capital cultural y económica del sureste de México. <span className="font-bold">La Ciudad Blanca</span> es hoy una de las entidades con mayores índices de seguridad y calidad de vida en México, comparable con las ciudades más seguras del mundo.
					</p>

					<h3 className="title-v1 mb-1">La privada más exclusiva de Xcanatún</h3>
					<p className="text-paragraph">
						Xcanatún es una localidad ubicada al norte de Mérida, Yucatán, conocida por su destacada plusvalía. Esta zona se caracteriza por ofrecer un entorno residencial exclusivo y de alta calidad de vida. Xcanatún ha experimentado un notable aumento en su plusvalía gracias a su atractiva combinación de servicios e infraestructura moderna, así como a su cercanía con <span className="font-bold">los mejores clubes de golf de la zona.</span>
					</p>
				</div>
			</div>

			<div className="lg:w-[80px] lg:h-[205px] xl:w-[121px] xl:h-[245px] hidden lg:block lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0">
				<img className="w-full" src={adorno} alt="Decoración" />
			</div>
			<div className="bg-crema h-[33px] w-full lg:absolute lg:bottom-0 lg:right-0 lg:w-[35%] lg:h-[calc(100%+85px)] z-0"></div>
		</section>
	);
}
