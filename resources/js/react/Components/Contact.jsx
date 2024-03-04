import React, { useState } from 'react'

export const Contact = () => {
        const [name, setName] = useState("");
        const [lastname, setLastname] = useState("");
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [city, setCity] = useState("");
        
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('https://landing.grupols.mx/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
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
            console.log('Solicitud enviada con éxito');
            window.location.href = 'https://landing.grupols.mx/enviado';
          } else {
            // Manejo de errores
            console.error('Error al enviar la solicitud');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  return (
    <div className='container-fluid contact-container' id="contacto-section">
        <div className="row">
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 img-container'></div>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 form-container'>
                <img src="images/logo_completo.png" alt="" />
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre" required onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" className="form-control" id="apellido" required onChange={(e) => setLastname(e.target.value)}/>
                    </div>
                    </div>

                    <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="correo">Correo electrónico</label>
                        <input type="email" className="form-control" id="correo" required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="ciudad">Ciudad</label>
                        <input type="text" className="form-control" id="ciudad" required onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    </div>

                    <div className="row mb-3">
                    <div className="col-md-12">
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="text" className="form-control" id="telefono" required onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    </div>
                    <p>Este producto se encuentra en Dzidzantún, Yucatán.</p>
                    <p>¿Deseas continuar?</p>
                    <div className="row">
                    <div className="col-12">
                        <button type="submit" className="button"><img src="/images/amenidades/5.svg" alt="" />Agendar Videollamada</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
