import React, { useEffect } from "react";

export const Thanks = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.fbq != null) {
                window.fbq("track", "Lead");
            }
        }
    });

    return (
        <div className="container-fluid thanks-container">
            <div className="info-container">
                <div className="logo-container">
                    <img src="images/logo_cafe.svg" alt="" />
                </div>
                <h1>
                    Gracias por
                    <br />
                    dejarnos tus datos
                </h1>
                <p>
                    En la brevedad posible un asesor se
                    <br />
                    pondrá <i>en contacto contigo.</i>
                </p>
            </div>
        </div>
    );
};
