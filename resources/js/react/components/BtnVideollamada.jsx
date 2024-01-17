import { Link } from "react-router-dom";
import Button from "./Button";

export default function BtnVideollamada({ themeCrema = false }) {
	return (
		<Link to={"/#contacto"}>
			<Button className="mb-4 md:mb-0" theme={themeCrema ? "crema" : "verde"}>
				Agendar Videollamada
			</Button>
		</Link>
	);
}
