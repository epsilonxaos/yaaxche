import Button from "../Button";

import cover from "../../assets/brochure/cover.jpg";
import adorno from "../../assets/brochure/adorno.svg";
import MdForm from "../modal/MdForm";
import { useState } from "react";

export default function Brochure() {
	const [openMd, setOpenMd] = useState(false);

	return (
		<section className="bg-verde">
			<img src={cover} alt="Adara Residencial" className="w-full object-cover h-[500px]" />

			<article className="relative pt-[50px] md:pt-[120px] pb-[65px] text-crema px-[50px] z-10 text-center max-w-[1062px] mx-auto">
				<img src={adorno} alt="Decoracion" className="mx-auto mb-8 md:absolute md:-top-[74px] md:left-1/2 md:-translate-x-1/2" />

				<h3 className="title-v1 font-normal">Adana residencial</h3>

				<p className="text-paragraph mb-5">Combina un vanguardista diseño arquitectónico con un exuberante paisajismo y amenidades de primer nivel, lo que hará de cada momento y etapa de tu vida un verdadero placer de vivir, con la exclusividad que ningún otro proyecto inmobiliario de la zona puede ofrecer.</p>
				<p className="text-paragraph mb-5">Seguridad que garantiza tu tranquilidad</p>
				<p className="text-paragraph mb-5">
					<span className="font-bold">Adana Residencial</span> cuenta con un total de 68 lotes residenciales, donde la seguridad y privacidad destacan. Contará desde pórticos con casetas de vigilancia, sistema de CCTV de videovigilancia, seguridad perimetral con barda electrificada y personal de vigilancia las 24 horas los 365 días del año.
				</p>
				<Button
					onClick={() => {
						setOpenMd(true);
					}}
					theme="crema"
				>
					Descargar Brochure
				</Button>
			</article>

			<MdForm open={openMd} onClose={() => setOpenMd(false)} />
		</section>
	);
}
