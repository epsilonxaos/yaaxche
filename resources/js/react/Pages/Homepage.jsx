import React from "react";
import { Home } from "../Components/Home";
import { Discover } from "../Components/Discover";
import { Etapa } from "../Components/Etapa";
import { Hero } from "../Components/Hero";
import { Lotes } from "../Components/Lotes";
import { Mapa } from "../Components/Mapa";
import { Contact } from "../Components/Contact";
import { Amenidades } from "../Components/Amenidades";
import { Cotizador } from "../Components/Cotizador";
import { Footer } from "../Components/Footer";
import { Ubicacion } from "../Components/Ubicacion";
import { Helmet } from "react-helmet";

export const Homepage = () => {
    return (
        <>
            <Helmet>
                <script>
                    {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1572582986899747');
            fbq('track', 'PageView');
            `}
                </script>
            </Helmet>
            <Home />
            <Discover />
            <Etapa />
            <Hero />
            <Amenidades />
            <Lotes />
            <Mapa />
            <Cotizador />
            <Ubicacion />
            <Contact />
            <Footer />
        </>
    );
};
