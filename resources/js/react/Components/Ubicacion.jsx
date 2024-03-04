import React from 'react'

export const Ubicacion = () => {
  return (
    <div className='container-fluid ubicacion-container'>    
    <iframe
        title="Ubicación"
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d118061.24455774373!2d-89.16908708878695!3d21.309271478948066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE4JzA0LjIiTiA4OcKwMDQnMDIuNyJX!5e0!3m2!1ses-419!2smx!4v1703694439980!5m2!1ses-419!2smx?key=${AIzaSyBOmwSYP4c2X0ZnEpBUZrikSr6pr6GH6x4}"
      ></iframe>
    </div>
  )
}
