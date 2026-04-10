import { useQuery } from "@tanstack/react-query"
import type { Photo } from "react-photo-album"

export async function fetchPhotos(): Promise<Photo[]> {
    let fetchedPhotos: Photo[] = []

    try {
        const response = await fetch("/.netlify/functions/fetchPhotos")
        if (response) {
            const data = await response.json()
            const refactoredData = data.map((d: any): Photo => ({
                src: d.url,
                width: d.width,
                height: d.height,
                alt: d.display_name ?? "",
            }))

            return fetchedPhotos = refactoredData.reverse() || []
        }

        return fetchedPhotos

    } catch (e) {
        return fetchedPhotos
    }

}



export function useFetchPhotos(){
    return useQuery({
        queryFn: () => fetchPhotos(),
        queryKey: ["fetched-photos"],
        placeholderData: [],
        staleTime: 1000 * 60 * 5
    });

}
