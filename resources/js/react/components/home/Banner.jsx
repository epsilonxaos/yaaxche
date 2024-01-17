import mainBanner from "../../assets/home/main_banner.jpg";

function Banner() {
	return (
		<section className="relative w-full z-[1]">
			<img className="min-h-[80vh] lg:min-h-screen object-cover max-h-[650px] w-full" src={mainBanner} alt="banner principal" />

			<article className="w-full md:w-[635px] bg-crema py-[35px] px-[30px] text-center text-verde md:absolute md:bottom-[80px] lg:bottom-[120px] md:left-1/2 md:-translate-x-1/2">
				<h1 className="title-v1 w-[260px] md:w-[497px] mx-auto mb-1">
					Lotes residenciales de lujo <span className="font-normal">más exclusivos de Xcanatún, Yucatán.</span>
				</h1>

				<p className="text-paragraph uppercase tracking-[1.87px] text-sm mb-3">Rodeada de historia y cultura</p>
				<span className="text-paragraph lg:text-xl uppercase text-crema bg-verde inline-flex px-4 py-3 md:absolute md:-bottom-[25px] md:left-1/2 md:-translate-x-1/2">desde $1,768,000</span>
			</article>
		</section>
	);
}

export default Banner;
