import { useEffect, useState } from "react"
import { MasonryPhotoAlbum } from "react-photo-album"
import type { Photo } from "react-photo-album"
import "react-photo-album/masonry.css"

type CloudinaryPhoto = {
    public_id: string
    secure_url: string
    width: number
    height: number
}

export default function Kulinarika() {
    const [photos, setPhotos] = useState<Photo[]>([])
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch("/.netlify/functions/fetchPhotos")

                if (!response.ok) {
                    const rawError = await response.text()
                    let message = "Failed to fetch photos."

                    try {
                        const errorData = JSON.parse(rawError)
                        message = errorData?.error ?? message
                    } catch {
                        if (rawError.trim()) {
                            message = rawError
                        }
                    }

                    throw new Error(message)
                }

                const data: CloudinaryPhoto[] = await response.json()
                const formattedPhotos: Photo[] = data.map((photo) => ({
                    key: photo.public_id,
                    src: photo.secure_url,
                    width: photo.width,
                    height: photo.height,
                }))

                setPhotos(formattedPhotos)
            } catch (error) {
                console.error("Failed to load Cloudinary photos:", error)
                setErrorMessage(
                    error instanceof Error
                        ? error.message
                        : "Fotografij trenutno ni bilo mogoce naloziti."
                )
            } finally {
                setIsLoading(false)
            }
        }

        fetchPhotos()
    }, [])

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

            {isLoading ? (
                <div className="flex min-h-40 items-center justify-center text-center font-roboto text-sm tracking-[0.2em] text-neutral-500 uppercase">
                    Nalagam fotografije...
                </div>
            ) : errorMessage ? (
                <div className="flex min-h-40 items-center justify-center text-center font-roboto text-sm tracking-[0.08em] text-neutral-500">
                    {errorMessage}
                </div>
            ) : (
                <div className="mx-auto w-full">
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
