import patron from "../../assets/amenidades/patron.svg";
import patron2 from "../../assets/amenidades/patron-01.png";
import Gallery from "../Gallery";
import photosGallery from "../../data/galeriaAmenidades.json";

export default function Amenidades() {
	return (
		<section className="bg-white relative pt-[120px] pb-[40px] xl:pb-[125px] text-verde">
			<div style={{ backgroundImage: `url(${patron})` }} className="w-full top-0 left-0 absolute h-[60px] bg-bottom bg-repeat-x bg-cover"></div>

			<div className="flex flex-col flex-wrap lg:flex-row xl:w-[95%] xl:mx-auto xl:max-w-[1550px] relative">
				<div className="px-[50px] xl:pr-[150px] mb-8 w-full lg:w-1/2">
					<h3 className="title-v1 font-normal text-center mb-1 xl:text-left">En adana residencial</h3>
					<p className="text-paragraph mb-8">Cada día sus habitantes diseñarán sus propias experiencias de vida. Para ello tienen a su alcance una gama de exclusivos servicios y amenidades que promueven la convivencia, o bien, el goce de espacios idóneos para el encuentro con uno mismo.</p>

					<h3 className="title-v1 font-normal text-center mb-1 xl:mb-3 xl:text-left">amenidades:</h3>
					<ol className="list-decimal pl-4 xl:pl-2">
						<li>Caseta de acceso</li>
						<li>Pet Park</li>
						<li>Cancha de Pádel</li>
						<li>Cancha de uso múltiple</li>
						<li>Área de asador</li>
						<li>Casa club con: Kids club, gimnasio, salón de Yoga y funcional, Sauna, coworking, Lobby bar, Alberca con canal de nado, locker room, deck de asoleaderos, salón de fiestas</li>
						<li>Circuito de Jogging y Ciclovía</li>
						<li>Parque infantil</li>
					</ol>
				</div>
				<div className="px-3 xl:pr-[50px] w-full lg:w-1/2">
					<Gallery photos={photosGallery} />
				</div>
				<div className="w-full">
					<img src={patron2} className="w-[100px] md:w-[115px] h-[100px] md:h-[115px] xl:absolute mx-auto mt-[30px] xl:m-0 xl:-bottom-[60px] xl:-left-[0px]" alt="Decoracion 2" />
				</div>
			</div>
		</section>
	);
}
