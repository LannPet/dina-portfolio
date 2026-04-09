import { useState } from "react"
import { MasonryPhotoAlbum } from "react-photo-album"
import type { Photo } from "react-photo-album"
import "react-photo-album/masonry.css"
import { LoaderCircle } from "lucide-react"
import { useFetchPhotos } from "../../hooks/useFetchPhotos"

export default function Kulinarika() {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

    const {data: photosArray = [], isFetching} = useFetchPhotos()


    return (
        <section className="w-full shrink grow basis-auto px-4 py-4 sm:px-4 sm:h-full sm:overflow-y-auto">
            <div className="mt-20 mb-5 flex w-full items-center justify-center font-roboto text-3xl font-extralight tracking-widest sm:hidden">
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

            {isFetching ? (
                <div className="flex min-h-40 items-center justify-center text-center font-roboto text-sm tracking-[0.2em] text-neutral-500 uppercase gap-5 flex-row">
                    Nalagam dobrote
                    <LoaderCircle className="animate-spin"/>
                </div>
            ) : photosArray.length == 0 ? (
                <div className="flex min-h-40 items-center justify-center text-center font-roboto text-sm tracking-[0.08em] text-neutral-500">

                </div>
            ) : (
                <div className="mx-auto w-full">
                    <MasonryPhotoAlbum
                        photos={photosArray}
                        columns={(containerWidth) => {
                            if (containerWidth < 640) return 1
                            if (containerWidth < 1024) return 2
                            return 3
                        }}
                        spacing={16}
                        onClick={({ photo }) => setSelectedPhoto(photo)}
                        componentsProps={{
                            button: {
                                className: "overflow-hidden rounded-sm transition-all duration-300 hover:shadow-xl",
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
            )}

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
