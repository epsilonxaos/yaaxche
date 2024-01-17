import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import BtnVideollamada from "../components/BtnVideollamada";

export default function Header({ themeCrema = true }) {
	return (
		<header className="absolute top-0 left-0 w-full z-10 flex flex-col md:flex-row-reverse items-center py-[15px] md:px-[30px] lg:px-[60px] 2xl:px-[80px]">
			<div className="w-full md:w-1/2 lg:absolute lg:top-0 lg:max-w-max lg:h-full lg:flex lg:items-center text-center md:text-right">
				<BtnVideollamada themeCrema={themeCrema} />
			</div>
			<div className="w-full md:w-1/2 lg:w-full text-center md:text-left lg:text-center">
				<Link to={"/"}>
					<img src={logo} className="w-[215px] lg:w-[360px] inline-block" alt="Adara" />
				</Link>
			</div>
		</header>
	);
}
