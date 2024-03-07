import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Contact = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://landing.grupols.mx/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    lastname: lastname,
                    city: city,
                    email: email,
                    phone: phone,
                }),
            });

            if (response.ok) {
                // La solicitud fue exitosa, puedes redirigir o manejar la respuesta
                console.log("Solicitud enviada con éxito");
                window.location.href = "https://landing.grupols.mx/enviado";
            } else {
                // Manejo de errores
                console.error("Error al enviar la solicitud");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div
            className="container-fluid contact-container"
            id="contacto-section"
        >
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 img-container"></div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 form-container">
                    <img src="images/logo_completo.png" alt="" />
                    {/* <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="apellido">Apellido</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="apellido"
                                    required
                                    onChange={(e) =>
                                        setLastname(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="correo">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="correo"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="ciudad">Ciudad</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ciudad"
                                    required
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label htmlFor="telefono">Teléfono</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="telefono"
                                    required
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <p>
                            Este producto se encuentra en Dzidzantún, Yucatán.
                        </p>
                        <p>¿Deseas continuar?</p>
                        <div className="row">
                            <div className="col-12">
                                <button type="submit" className="button">
                                    <img
                                        src="/images/amenidades/5.svg"
                                        alt=""
                                    />
                                    Agendar Videollamada
                                </button>
                            </div>
                        </div>
                    </form> */}

                    <FormContacto />
                </div>
            </div>
        </div>
    );
};

function FormContacto({
    callbackOnSuccess = () => {
        window.location.href = "/enviado";
    },
}) {
    const {
        formState: { errors },
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        axios
            .post(import.meta.env.VITE_APP_URL + "api/send", data)
            .then(function ({ data }) {
                if (data.status == "success") callbackOnSuccess();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <form
            action=""
            className="flex flex-col sm:flex-row sm:flex-wrap sm:max-w-[720px] sm:mx-auto "
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="w-full sm:w-1/2 sm:px-3 mb-2">
                <Input
                    name={"nombre"}
                    label={"Nombre"}
                    register={register}
                    validate={true}
                    rules={{ required: "Este campo es obligatorio" }}
                    validateError={!!errors.nombre}
                    validateErrorMessage={errors.nombre?.message}
                />
            </div>
            <div className="w-full sm:w-1/2 sm:px-3 mb-2">
                <Input
                    name={"apellido"}
                    label={"Apellido"}
                    register={register}
                    validate={true}
                    rules={{ required: "Este campo es obligatorio" }}
                    validateError={!!errors.apellido}
                    validateErrorMessage={errors.apellido?.message}
                />
            </div>
            <div className="w-full sm:w-1/2 sm:px-3 mb-2">
                <Input
                    name={"ciudad"}
                    label={"Ciudad"}
                    register={register}
                    validate={true}
                    rules={{ required: "Este campo es obligatorio" }}
                    validateError={!!errors.ciudad}
                    validateErrorMessage={errors.ciudad?.message}
                />
            </div>
            <div className="w-full sm:w-1/2 sm:px-3 mb-2">
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
            <div className="w-full sm:w-1/2 sm:px-3 mb-4">
                <Input
                    name={"telefono"}
                    label={"Teléfono"}
                    register={register}
                    validate={true}
                    rules={{
                        required: "Este campo es obligatorio",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message:
                                "Ingrese un número de teléfono válido (10 dígitos)",
                        },
                    }}
                    validateError={!!errors.telefono}
                    validateErrorMessage={errors.telefono?.message}
                />
            </div>
            <div className="w-full mb-4 lg:px-3">
                <p className="text-paragraph text-verde text-center md:text-left">
                    Este producto se encuentra en Dzidzantún, Yucatán. <br />
                    <span className="font-bold">¿Deseas continuar?</span>
                </p>
            </div>
            <div className="w-full text-center md:text-left lg:px-3">
                <button type="submit" className="button">
                    <img src="/images/amenidades/5.svg" alt="" />
                    Agendar Videollamada
                </button>
            </div>
        </form>
    );
}

function Input({
    name,
    label,
    register,
    validate = false,
    rules,
    validateError = "",
    validateErrorMessage = "",
}) {
    return (
        <>
            <label
                className="text-paragraph text-[#213229] mb-1 block"
                htmlFor={name}
            >
                {label}
            </label>
            <input
                {...(validate && register(name, rules))}
                type="text"
                {...(!validate && { name })}
                id={name}
                className={`bg-[#213229] bg-opacity-50 text-center text-crema px-6 w-full h-[50px] mb-0.5 rounded border-none ${
                    validateError &&
                    "bg-red-100 border-2 border-red-300 text-black"
                } outline-none shadow-none`}
            />
            {validateError && (
                <span className="text-red-600 font-mark text-xs">
                    {validateErrorMessage}
                </span>
            )}
        </>
    );
}
