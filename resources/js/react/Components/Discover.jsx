import React from 'react'

export const Discover = () => {
  return (
    <div className='container-fluid discover-container'>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
                <div className='list-items'>
                    <div className='list-item'>
                        <h3>Yucatán</h3>
                        <p>Se destaca como el núcleo cultural y financiero del sureste mexicano. Conocida como <i>"La Ciudad Blanca"</i>, actualmente se posiciona entre las ciudades con altos niveles de seguridad y calidad de vida en México.</p>
                    </div>
                    <div className='list-item'>
                        <h3>Residencial sostenible en Dzidzantún, Yucatán.</h3>
                        <p>Dzidzantún muestra signos de crecimiento económico y desarrollo, con un enfoque en el turismo y una infraestructura educativa y de salud que atiende a las necesidades de su población. Este contexto proporciona una <i>base sólida para el desarrollo y la inversión en el sector inmobiliario y turístico</i>.</p>
                    </div>
                    <div className='list-item'>
                        <h3>Crecimiento de comercios.</h3>
                        <p>Actualmente, Dzidzantún, ha recibido inversión de las siguientes empresas; Bodega Aurrera, Elektra, La Mexicana y Oxxo. Lo cual hacer que la localidad se vea beneficiada en:<br/>Generación de empleo, mejora en la oferta de productos y servicios, mejora en la infraestructura y el entorno urbano, mejora en el desarrollo del turismo y atractivo comercial.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
                <div className='img-container'>
                    <div className='logo-container'>
                        <img src="images/logo_cafe.svg" alt="" />
                    </div>
                    <img className="gallery" src="/images/mid.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
