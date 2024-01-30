import logotipo from "../../assets/contacto/logotipo.svg";
import cover from "../../assets/contacto/cover.jpg";

import FormContacto from "../FormContacto";
import whatsapp from "../../assets/WhatsAppButtonGreenSmall.svg";

export default function Contacto() {
    return (
        <section className="bg-crema" id="contacto">
            <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2 h-full">
                    <figure className="w-full h-full">
                        <img
                            className="min-h-[400px] lg:min-h-[800px] h-full object-cover w-full"
                            src={cover}
                            alt="Fondo contacto"
                        />
                    </figure>
                </div>
                <div className="w-full lg:w-1/2 pt-8 pb-14 lg:py-0">
                    <figure>
                        <img
                            className="w-[125px] lg:w-[170px] mb-9 mx-auto"
                            src={logotipo}
                            alt="Adana"
                        />
                    </figure>
                    <FormContacto />
                </div>
            </div>

            <a
                href=" https://wa.me/529999498508?text=Hola%2C%20me%20encuentro%20interesado%20en%20Adana%20Residencial."
                aria-label="Chat on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block fixed bottom-12 md:bottom-14 right-8 hover:scale-105 scale-100 transition-transform cursor-pointer rounded-full z-20"
            >
                <img src={whatsapp} alt="Chat en whatsapp" />
            </a>
        </section>
    );
}
