import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export const Amenidades = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className='container-fluid amenidades-container'>
        <div className="row justify-content-evenly">
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-4">
                <img src="/images/amenidades/4.svg" />
                <h2>En Ya'axché comunidad sustentable;</h2>
                <p>
                Cada día sus habitantes diseñarán sus propias experiencias de vida. Para ello tienen a su alcance amenidades que promueven la convivencia con uno mismo y la naturaleza.
                </p>
                <h3>Amenidades</h3>
                <p><b><i>En Ya'axché</i></b>, la vida comunitaria se enriquece con nuestras amenidades:</p>
                <ul>
                    <li>
                        <img src="/images/amenidades/4.svg" alt="" />
                        <p><b><i>Santuario Ya'axché:</i></b> Un espacio de paz y conexión con la naturaleza.</p>
                    </li>
                    <li>
                        <img src="/images/amenidades/1.svg" alt="" />
                        <p><b><i>Ludoteca:</i></b> Para los más pequeños, un lugar lleno de aprendizaje y diversión.</p>
                    </li>
                    <li>
                        
                    <img src="/images/amenidades/2.svg" alt="" />
                        <p><b><i>Casa Club:</i></b> Encuentra la comunidad en un espacio exclusivo.</p>
                    </li>
                    <li>
                        <img src="/images/amenidades/3.svg" alt="" />
                        <p><b><i>Park Grill:</i></b> Disfruta de momentos especiales al aire libre.</p>
                    </li>
                </ul>
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-5">
            <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-gallery"
            >
                <SwiperSlide>
                <img src="/images/galeria/1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/images/galeria/2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/images/galeria/3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/images/galeria/4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/images/galeria/5.jpg" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-thumbs"
            >
                <SwiperSlide>
                <img src="/images/galeria/1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/images/galeria/2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/images/galeria/3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/images/galeria/4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="/images/galeria/5.jpg" />
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    </div>
  )
}
