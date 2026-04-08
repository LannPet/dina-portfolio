import { useState } from "react"
import { MasonryPhotoAlbum } from "react-photo-album"
import type { Photo } from "react-photo-album"
import "react-photo-album/masonry.css"
import img1 from "../../assets/images/food/img1.webp"
import img2 from "../../assets/images/food/img2.webp"
import img3 from "../../assets/images/food/img3.webp"
import img5 from "../../assets/images/food/img5.webp"
import img6 from "../../assets/images/food/img6.webp"
import img7 from "../../assets/images/food/img7.webp"
import img8 from "../../assets/images/food/img8.webp"
import img9 from "../../assets/images/food/img9.webp"
import img10 from "../../assets/images/food/img10.webp"
import img11 from "../../assets/images/food/img11.webp"
import img12 from "../../assets/images/food/img12.webp"
import img13 from "../../assets/images/food/img13.webp"
import img14 from "../../assets/images/food/img14.webp"
import img15 from "../../assets/images/food/img15.webp"
import img16 from "../../assets/images/food/img16.webp"
import img17 from "../../assets/images/food/img17.webp"
import img18 from "../../assets/images/food/img18.webp"
import img19 from "../../assets/images/food/img19.webp"
import img20 from "../../assets/images/food/img20.webp"
import img21 from "../../assets/images/food/img21.webp"

const photos: Photo[] = [
    { src: img1, width: 1968, height: 2047 },
    { src: img2, width: 1536, height: 2048 },
    { src: img3, width: 2048, height: 1536 },
    { src: img5, width: 1893, height: 2047 },
    { src: img6, width: 1536, height: 2048 },
    { src: img7, width: 1536, height: 2048 },
    { src: img8, width: 1536, height: 2048 },
    { src: img9, width: 1536, height: 2048 },
    { src: img10, width: 1536, height: 2048 },
    { src: img11, width: 1536, height: 2048 },
    { src: img12, width: 880, height: 1168 },
    { src: img13, width: 880, height: 1168 },
    { src: img14, width: 1168, height: 880 },
    { src: img15, width: 3024, height: 4032 },
    { src: img16, width: 880, height: 1168 },
    { src: img17, width: 880, height: 1168 },
    { src: img18, width: 1168, height: 880 },
    { src: img19, width: 880, height: 1168 },
    { src: img20, width: 880, height: 1168 },
    { src: img21, width: 960, height: 1072 },
]

export default function Kulinarika() {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)



    return (
        <section className="w-full shrink grow basis-auto px-4 py-4 sm:px-4 sm:h-full sm:overflow-y-auto">
            <div className="w-full sm:hidden font-extralight tracking-widest font-roboto text-3xl mb-5 mt-20 flex justify-center items-center">
                Moja kulinarika
            </div>
            <style>
                {`
                    @keyframes kulinarikaPhotoReveal {
                        from {
                            opacity: 0;
                            transform: translateY(12px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>

            <div className="mx-auto w-full ">
                <MasonryPhotoAlbum
                    photos={photos}
                    columns={(containerWidth) => {
                        if (containerWidth < 640) return 1
                        if (containerWidth < 1024) return 2
                        return 3
                    }}
                    spacing={16}
                    onClick={({ photo }) => setSelectedPhoto(photo)}
                    componentsProps={{
                        button: {
                            className: "overflow-hidden rounded-sm hover:shadow-xl transition-all duration-300",
                        },
                        image: ({ index }) => ({
                            className:
                                "transition-transform duration-300 ease-out hover:scale-[1.02]",
                            style: {
                                animation: `kulinarikaPhotoReveal 450ms ease-out ${index * 90}ms both`,
                            },
                        }),
                    }}
                />
            </div>

            {selectedPhoto && (
                <button
                    type="button"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setSelectedPhoto(null)}
                    aria-label="Close expanded image"
                >
                    <img
                        src={selectedPhoto.src}
                        alt=""
                        className="max-h-full max-w-full rounded-sm object-contain"
                    />
                </button>
            )}
        </section>
    )
}
