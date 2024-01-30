export default function Maps() {
    return (
        <section className="bg-crema h-[500px] md:h-[950px] lg:h-[800px] md:pt-[480px] lg:pt-[230px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25043.150126739405!2d-89.62935864207977!3d21.085178303447538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5675bfd6c0ee65%3A0xd9b254f5941ca85f!2sAdana%20Residencial!5e0!3m2!1ses!2smx!4v1703050914192!5m2!1ses!2smx"
                width="100%"
                height="100%"
                className="border-none"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
}
