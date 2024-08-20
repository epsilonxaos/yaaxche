import { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Tooltip } from "react-tooltip";

const Plantilla = ({ lote = [] }) => {
    return (
        <div>
            <h2 className="text-base font-medium">{lote.nombre}</h2>
            <p className="text-sm capitalize">{lote.status}</p>
            <small>Haga clic para ver más</small>
        </div>
    );
};

const Masterplan = ({ lotes }) => {
    const [finish, setFinish] = useState(false);
    const { state, dispatch } = useContext(AppContext);

    const isDesktopOrTablet = useMediaQuery({ query: "(min-width: 768px)" });

    useEffect(() => {
        if (lotes.length > 0) {
            lotes.forEach((lo, idx) => {
                const el = document.getElementById("L" + lo.lote);

                if (el) {
                    if (lo.status == "DISPONIBLE")
                        el.classList.add("masterplan-disponible");
                    else if (lo.status == "APARTADO")
                        el.classList.add("masterplan-apartado");
                    else el.classList.add("masterplan-vendido");

                    el.setAttribute("data-tooltip-id", "my-tooltip");
                    el.setAttribute("data-lote-index", idx);
                    el.setAttribute(
                        "data-tooltip-html",
                        ReactDOMServer.renderToStaticMarkup(
                            <Plantilla lote={lo} />
                        )
                    );

                    if (lo.status == "DISPONIBLE")
                        el.addEventListener("click", (ev) => {
                            dispatch({ loteSelect: lo });
                            window.scrollTo({
                                behavior: "smooth",
                                top: document.getElementById("cotizador")
                                    ? document.getElementById("cotizador")
                                          .offsetTop
                                    : 0,
                            });
                        });
                }
            });

            setFinish(true);
        }
    }, [lotes, isDesktopOrTablet]);

    useEffect(() => {
        if (state.loteSelect) {
            document
                .querySelectorAll("#masterplan .st0")
                .forEach((el) => el.classList.remove("select"));
            document
                .querySelector("#masterplan #L" + state.loteSelect.lote)
                ?.classList.add("select");
        }
    }, [state.loteSelect]);

    return (
        <>
            {isDesktopOrTablet ? <MasterplanSVG /> : <MasterplanSVGMovil />}

            {finish && <Tooltip id="my-tooltip" />}
        </>
    );
};

function MasterplanSVG() {
    return null;
}

function MasterplanSVGMovil() {
    return null;
}

export default Masterplan;
