import React from "react";
import { useForm } from "react-hook-form";

export const Contact = () => {
    return (
        <div
            className="container-fluid contact-container"
            id="contacto-section"
        >
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 img-container"></div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 form-container">
                    <img src="images/logo_completo.png" alt="" />

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
                callbackOnSuccess();
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
            <div className="w-full text-center lg:px-3">
                <button type="submit" className="button mx-auto">
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
                className={`bg-[#213229] bg-opacity-50 text-center !text-white px-6 w-full h-[50px] mb-0.5 rounded border-none ${
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
