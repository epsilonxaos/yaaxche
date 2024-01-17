import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-verde  md:px-[55px] py-3 text-center text-crema">
			<div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-[1550px] mx-auto">
				<p>Adana Residencial, 2023</p>
				<p>
					Diseño y desarrollo x <span className="font-bold">MadebyPartners®</span>
				</p>
				<Link to="politicas-privacidad">Políticas de privacidad</Link>
			</div>
		</footer>
	);
}
