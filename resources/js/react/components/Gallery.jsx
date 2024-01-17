import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function Gallery({ photos }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<>
			<Swiper
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
				}}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mb-3"
			>
				{photos.map((cover, idx) => (
					<SwiperSlide key={"galeria_" + idx}>
						<img src={cover} className="object-cover h-[250px] sm:h-[400px] md:h-[540px] w-full" />
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				breakpoints={{
					320: {
						slidesPerView: 2,
					},
					640: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 4,
					},
				}}
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				// slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper"
			>
				{photos.map((cover, idx) => (
					<SwiperSlide key={"galeria_thumbs_" + idx}>
						<img src={cover} className="w-full h-[100px] md:h-[140px] object-cover" />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
