import patron from "../../assets/patron-01.png";
import mapa from "../../assets/mapa.png";
import coverVideo from "../../assets/video.jpg";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

export default function Croquis() {
    const [toggler, setToggler] = useState(false);

    return (
        <section className="text-verde bg-crema pt-[60px] pb-[65px] lg:pb-[85px] xl:pt-0">
            <div className="flex flex-col xl:flex-row xl:items-center max-w-[1550px] mx-auto mb-[40px]">
                <div className="xl:w-2/3 2xl:w-1/2 py-[40px]">
                    <div className="md:flex md:items-center md:justify-start md:w-[450px] md:mx-auto md:mb-8 xl:ml-[40px]">
                        <img
                            src={patron}
                            className="w-[60px] h-[60px] mx-auto mb-2 md:mb-0"
                        />
                        <h3 className="title-v1 text-center md:text-left mb-[50px] md:mb-0 pl-2">
                            <span className="font-normal">
                                Rodeada de la más
                            </span>{" "}
                            amplia y <br /> selecta gama de servicios
                        </h3>
                    </div>
                    <div className="flex flex-wrap px-[20px] text-paragraph">
                        <div className="w-1/2 md:w-full">
                            <div className="md:hidden">
                                <Recreacion />
                                <CentrosComerciales />
                                <MiniSupers />
                            </div>
                            <div className="hidden md:flex">
                                <Recreacion />
                                <MiniSupers />
                                <Restaurantes />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-full">
                            <div className="md:hidden">
                                <Educacion />
                                <Restaurantes />
                                <Servicios />
                            </div>
                            <div className="hidden md:flex">
                                <CentrosComerciales />
                                <Educacion />
                                <Servicios />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:1/3 2xl:w-1/2">
                    <img src={mapa} className="w-full" alt="Mapa" />
                </div>
            </div>

            <div className="max-w-[1300px] mx-auto relative">
                <div
                    onClick={() => setToggler(!toggler)}
                    className="bg-[#000] bg-opacity-25 absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center cursor-pointer"
                >
                    <svg
                        className="hover:scale-105 transition-transform "
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="75"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#ffffff"
                            d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                        />
                    </svg>
                </div>
                <img
                    src={coverVideo}
                    className="w-full max-h-[580px] object-cover"
                    alt=""
                />
            </div>

            <FsLightbox
                toggler={toggler}
                sources={[
                    <iframe
                        key="videoVimeo"
                        src="https://player.vimeo.com/video/893950881"
                        width="1920px"
                        height="1080px"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />,
                ]}
            />
        </section>
    );
}
function Servicios() {
    return (
        <div className="w-full px-[20px] mb-8">
            <h4 className="title-v2 mb-2">Servicos</h4>
            <ul>
                <li>31. Hospital El Faro</li>
                <li>32. Farmacia del Ahorro</li>
                <li>33. Grúas Abimerhi</li>
                <li>34. Pemex</li>
            </ul>
        </div>
    );
}
function Educacion() {
    return (
        <div className="w-full px-[20px] mb-8">
            <h4 className="title-v2 mb-2">Educación</h4>
            <ul>
                <li>16. Universidad Marista</li>
                <li>17. Facultad Ingenieria UADY</li>
                <li>18. UVM</li>
                <li>19. Allianz</li>
                <li>20. Anáhuac Mayab</li>
                <li>21. Instituto Arrayanes</li>
                <li>22. Colegio Teresiano</li>
            </ul>
        </div>
    );
}
function CentrosComerciales() {
    return (
        <div className="w-full px-[20px] mb-8">
            <h4 className="title-v2 mb-2">Centros comerciales</h4>
            <ul>
                <li>8. La Isla</li>
                <li>9. The Harbor</li>
            </ul>
        </div>
    );
}
function Recreacion() {
    return (
        <div className="w-full px-[20px] mb-8">
            <h4 className="title-v2 mb-2">Recreación y deportes</h4>
            <ul className="text-paragraph">
                <li>1. Sport Center</li>
                <li>2. Sport World</li>
                <li>3. Club de Golf La Ceiba</li>
                <li>4. La Cancha Fútbol</li>
                <li>5. La Jaula fútbol</li>
                <li>6. Foro GNP</li>
                <li>7. Angsana Xcanatún</li>
            </ul>
        </div>
    );
}
function MiniSupers() {
    return (
        <div className="w-full px-[20px] mb-8">
            <h4 className="title-v2 mb-2">Mini supers</h4>
            <ul>
                <li>10. Súper Akí Xcanatún</li>
                <li>11. Oxxo</li>
                <li>12. La Europea</li>
                <li>13. Go Mart</li>
                <li>14. Bodega Aurrera</li>
                <li>15. Delishop</li>
            </ul>
        </div>
    );
}

function Restaurantes() {
    return (
        <div className="w-full px-[20px] mb-8">
            <h4 className="title-v2 mb-2">restaurantes</h4>
            <ul>
                <li>23. Hermana República</li>
                <li>24. Carl&apos;s Jr</li>
                <li>25. Mítica Burger</li>
                <li>26. Café Indédito</li>
                <li>27. La Libertad</li>
                <li>28. Dairy Queen</li>
                <li>29. Tatemar</li>
                <li>30. Wendy&apos;s</li>
            </ul>
        </div>
    );
}
