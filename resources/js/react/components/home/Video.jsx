import FsLightbox from "fslightbox-react";
import { useState } from "react";

import coverVideo from "../../assets/video.jpg";

export default function Video() {
    const [toggler, setToggler] = useState(false);
    return (
        <section className="bg-crema">
            <div className="max-w-[1300px] mx-auto relative">
                <div
                    onClick={() => setToggler(!toggler)}
                    role="button"
                    className="bg-[#000] bg-opacity-25 absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center cursor-pointer"
                >
                    <svg
                        className="hover:scale-105 transition-transform "
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="75"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#ffffff"
                            d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                        />
                    </svg>
                </div>
                <img
                    src={coverVideo}
                    className="w-full max-h-[580px] object-cover"
                    alt=""
                />
            </div>

            <FsLightbox
                toggler={toggler}
                sources={[
                    <iframe
                        title="Video"
                        key="videoVimeo"
                        src="https://player.vimeo.com/video/893950881"
                        width="1920px"
                        height="1080px"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />,
                ]}
            />
        </section>
    );
}
