import FormContacto from "../FormContacto";
import Swal from "sweetalert2";
import { CgClose } from "react-icons/cg";

export default function MdForm({ open = false, onClose = () => {} }) {
	if (!open) return false;

	return (
		<div className="bg-black bg-opacity-25 z-50 h-screen w-full fixed top-0 left-0 flex items-center justify-center">
			<section className="bg-crema py-8">
				<div className="text-right px-8">
					<button className="text-verde hover:text-red-500">
						<CgClose size={20} className="" onClick={onClose} />
					</button>
				</div>
				<FormContacto
					callbackOnSuccess={() => {
						Swal.fire({
							title: "Gracias!",
							// text: "Aqui tienes el brochure.",
							icon: "success",
						});

						onClose();

						window.open("pdf/brochure.pdf");
					}}
				/>
			</section>
		</div>
	);
}
