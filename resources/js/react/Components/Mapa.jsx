import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

export const Mapa = () => {
    // To open the lightbox change the value of the "toggler" prop.
    const [toggler, setToggler] = useState(false);
    return (
        <div className="container-fluid mapa-container">
            <h2>
                Ubicación estratégica y cercanía de
                <br />
                lugares turísticos de la zona
            </h2>
            <img className="mapa" src="/images/mapa.png" alt="" />
            <div className="video-container !w-auto">
                <img className="video" src="/images/video.jpg" alt="" />
                <img
                    className="player"
                    src="/images/player.svg"
                    alt=""
                    onClick={() => setToggler(!toggler)}
                />
            </div>
            <FsLightbox
                toggler={toggler}
                sources={[
                    <iframe
                        src="https://player.vimeo.com/video/898175865"
                        width="1920px"
                        height="1080px"
                        title="test"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />,
                ]}
            />
            {/* <img className="tronco" src="/images/tronco.webp" alt="" /> */}
        </div>
    );
};
