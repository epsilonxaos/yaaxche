import { useForm } from "react-hook-form";
import Button from "../components/Button";
import axios from "axios";

export default function FormContacto({
	callbackOnSuccess = () => {
		window.location.href = "/thanks";
	},
}) {
	const {
		formState: { errors },
		register,
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		axios
			.post("https://hooks.zapier.com/hooks/catch/16601330/3ax2u4e/", data, {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
				},
			})
			.then(function ({ data }) {
				if (data.status == "success") callbackOnSuccess();
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<form action="" className="flex flex-col lg:flex-row lg:flex-wrap lg:max-w-[720px] lg:mx-auto px-12" onSubmit={handleSubmit(onSubmit)}>
			<div className="w-full lg:w-1/2 lg:px-3 mb-2">
				<Input name={"nombre"} label={"Nombre"} register={register} validate={true} rules={{ required: "Este campo es obligatorio" }} validateError={!!errors.nombre} />
			</div>
			<div className="w-full lg:w-1/2 lg:px-3 mb-2">
				<Input name={"apellido"} label={"Apellido"} register={register} validate={true} rules={{ required: "Este campo es obligatorio" }} validateError={!!errors.apellido} validateErrorMessage={errors.apellido?.message} />
			</div>
			<div className="w-full lg:w-1/2 lg:px-3 mb-2">
				<Input name={"ciudad"} label={"Ciudad"} register={register} validate={true} rules={{ required: "Este campo es obligatorio" }} validateError={!!errors.ciudad} validateErrorMessage={errors.ciudad?.message} />
			</div>
			<div className="w-full lg:w-1/2 lg:px-3 mb-2">
				<Input
					name={"correo"}
					label={"Correo electrónico"}
					register={register}
					validate={true}
					rules={{
						required: "Este campo es obligatorio",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: "Ingrese un correo electrónico válido",
						},
					}}
					validateError={!!errors.correo}
					validateErrorMessage={errors.correo?.message}
				/>
			</div>
			<div className="w-full lg:w-1/2 lg:px-3 mb-4">
				<Input
					name={"telefono"}
					label={"Teléfono"}
					register={register}
					validate={true}
					rules={{
						required: "Este campo es obligatorio",
						pattern: {
							value: /^[0-9]{10}$/,
							message: "Ingrese un número de teléfono válido (10 dígitos)",
						},
					}}
					validateError={!!errors.telefono}
					validateErrorMessage={errors.telefono?.message}
				/>
			</div>
			<div className="w-full mb-4 lg:px-3">
				<p className="text-paragraph text-verde text-center md:text-left">
					Este producto se encuentra en Mérida, Yucatán, <br />
					<span className="font-bold">¿Deseas continuar?</span>
				</p>
			</div>
			<div className="w-full text-center md:text-left lg:px-3">
				<Button type="submit" className="mb-4 md:mb-0">
					Agendar Videollamada
				</Button>
			</div>
		</form>
	);
}

function Input({ name, label, register, validate = false, rules, validateError = "", validateErrorMessage = "" }) {
	return (
		<>
			<label className="text-paragraph text-verde mb-1 block" htmlFor={name}>
				{label}
			</label>
			<input {...(validate && register(name, rules))} type="text" {...(!validate && { name })} id={name} className={`bg-verde bg-opacity-50 text-center text-crema px-6 w-full h-[50px] mb-0.5 ${validateError && "bg-red-100 border-2 border-red-300 text-black"} outline-none shadow-none`} />
			{validateError && <span className="text-red-400 font-mark text-xs">{validateErrorMessage}</span>}
		</>
	);
}
