import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const Etapa = () => {
    return (
        <div className="container-fluid etapa-container">
            <div className="overlay"></div>
            <div className="info-container">
                <h2>
                    El proyecto
                    <br />
                    Etapa 3: YA ́AXCHÉ EFECTO
                </h2>
                <img src="/images/logo_oro.svg" alt="" />
                <p>
                    Destaca por sus numerosas ventajas, que lo convierten en{" "}
                    <i>una opción inmobiliaria excepcional</i>:
                </p>
                <b>
                    <i>Ubicación que garantiza tu tranquilidad</i>
                </b>
            </div>
            <div className="row list-items justify-content-evenly desktop-gallery">
                <div className="col-sm-8 col-md-5 col-lg-5 col-xl-2">
                    <div
                        className="img-container"
                        style={{ backgroundImage: `url("/images/izamal.jpg")` }}
                    ></div>
                    <h3>La ubicación privilegiada y accesibilidad:</h3>
                    <p>
                        Situado a solo diez minutos de la Playa de Santa Clara,
                        Ya ́axché ofrece un acceso rápido a bellas costas.
                        Además,{" "}
                        <b>
                            <i>su ubicación estratégica</i>
                        </b>
                        , a 50 minutos de Mérida, una hora del aeropuerto y
                        cercana a la futura estación del Tren Maya en Izamal,
                        asegura una conectividad excelente con puntos clave de
                        la región.
                    </p>
                </div>
                <div className="col-sm-8 col-md-5 col-lg-5 col-xl-2">
                    <div
                        className="img-container"
                        style={{ backgroundImage: `url("/images/ruinas.jpg")` }}
                    ></div>
                    <h3>Cercanía a destinos turísticos:</h3>
                    <p>
                        La proximidad a atractivos turísticos como el{" "}
                        <b>
                            <i>
                                Anillo de Cenotes y a destinos famosos como
                                Tulum y Cancún
                            </i>
                        </b>
                        , que se encuentran a solo unas horas de distancia,
                        añade un valor adicional a la propiedad.
                    </p>
                </div>
                <div className="col-sm-8 col-md-5 col-lg-5 col-xl-2">
                    <div
                        className="img-container"
                        style={{
                            backgroundImage: `url("/images/atardecer.jpg")`,
                        }}
                    ></div>
                    <h3>Belleza natural y playas:</h3>
                    <p>
                        <b>
                            <i>
                                Las playas prístinas y la naturaleza
                                impresionante en Santa Clara
                            </i>
                        </b>{" "}
                        ofrecen un entorno único para aquellos que buscan una
                        vida en armonía con el medio ambiente. El desarrollo
                        inmobiliario en esta zona predice un aumento en la
                        demanda de propiedades, lo cual es prometedor para
                        futuros inversionistas.
                    </p>
                </div>
                <div className="col-sm-8 col-md-5 col-lg-5 col-xl-2">
                    <div
                        className="img-container"
                        style={{ backgroundImage: `url("/images/zen.webp")` }}
                    ></div>
                    <h3>Enfoque en el desarrollo sustentable:</h3>
                    <p>
                        Al enfocarse en la{" "}
                        <b>
                            <i>sostenibilidad, Ya’axché</i>
                        </b>{" "}
                        se alinea con la creciente tendencia hacia estilos de
                        vida más ecológicos y responsables, ofreciendo una
                        experiencia de vida única y respetuosa con el entorno.
                    </p>
                </div>
            </div>
            <div className="row mobile-gallery">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div>
                            <div
                                className="img-container"
                                style={{
                                    backgroundImage: `url("/images/izamal.jpg")`,
                                }}
                            ></div>
                            <h3>La ubicación privilegiada y accesibilidad:</h3>
                            <p>
                                Situado a solo diez minutos de la Playa de Santa
                                Clara, Ya ́axché ofrece un acceso rápido a bellas
                                costas. Además,{" "}
                                <b>
                                    <i>su ubicación estratégica</i>
                                </b>
                                , a 50 minutos de Mérida, una hora del
                                aeropuerto y cercana a la futura estación del
                                Tren Maya en Izamal, asegura una conectividad
                                excelente con puntos clave de la región.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div
                                className="img-container"
                                style={{
                                    backgroundImage: `url("/images/ruinas.jpg")`,
                                }}
                            ></div>
                            <h3>Cercanía a destinos turísticos:</h3>
                            <p>
                                La proximidad a atractivos turísticos como el{" "}
                                <b>
                                    <i>
                                        Anillo de Cenotes y a destinos famosos
                                        como Tulum y Cancún
                                    </i>
                                </b>
                                , que se encuentran a solo unas horas de
                                distancia, añade un valor adicional a la
                                propiedad.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div
                                className="img-container"
                                style={{
                                    backgroundImage: `url("/images/atardecer.jpg")`,
                                }}
                            ></div>
                            <h3>Belleza natural y playas:</h3>
                            <p>
                                <b>
                                    <i>
                                        Las playas prístinas y la naturaleza
                                        impresionante en Santa Clara
                                    </i>
                                </b>{" "}
                                ofrecen un entorno único para aquellos que
                                buscan una vida en armonía con el medio
                                ambiente. El desarrollo inmobiliario en esta
                                zona predice un aumento en la demanda de
                                propiedades, lo cual es prometedor para futuros
                                inversionistas.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div
                                className="img-container"
                                style={{
                                    backgroundImage: `url("/images/zen.webp")`,
                                }}
                            ></div>
                            <h3>Enfoque en el desarrollo sustentable:</h3>
                            <p>
                                Al enfocarse en la{" "}
                                <b>
                                    <i>sostenibilidad, Ya’axché</i>
                                </b>{" "}
                                se alinea con la creciente tendencia hacia
                                estilos de vida más ecológicos y responsables,
                                ofreciendo una experiencia de vida única y
                                respetuosa con el entorno.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="sub-info">
                <p>
                    Precios desde <b>$61,250</b> | Espacios desde <b>200 M2</b>
                </p>
                <a href="#contacto-section" className="button">
                    Descargar Brochure
                </a>
            </div>
        </div>
    );
};
