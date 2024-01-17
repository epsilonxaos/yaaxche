import cover from "../assets/thanks.jpg";
import logo from "../assets/logo-verde.svg";
import { useEffect } from "react";

export default function Thanks() {
	useEffect(() => {
		if (typeof window !== "undefined") {
			if (window.fbq != null) {
				window.fbq("track", "Lead");
			}
		}
	});

	return (
		<section className="min-h-[600px] h-[calc(100vh-96px)] md:h-[calc(100vh-48px)] bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: `url(${cover})` }}>
			<div className="bg-crema px-6 lg:px-14 pt-10 pb-16 md:py-10 max-w-[300px] md:max-w-[950px] text-verde uppercase flex flex-col md:flex-row md:items-center md:justify-start text-center md:text-left w-[85%] mx-auto absolute top-20 left-0 right-0 md:ml-0">
				<div className="w-full md:w-[115px]">
					<img src={logo} alt="Adana" className="mx-auto w-[70px] md:w-[115px] mb-8 md:mb-0" />
				</div>
				<div className="w-full md:w-[calc(100%-115px)] md:pl-4">
					<h2 className="font-tranja text-2xl lg:text-4xl mb-4 md:mb-1">
						Gracias por <br /> dejarnos tus datos,
					</h2>
					<p className="text-paragraph">Un asesor se contactará contigo.</p>
				</div>
			</div>
		</section>
	);
}
