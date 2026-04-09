import { useQuery } from "@tanstack/react-query";

export async function fetchPhotos(){
    let fetchedPhotos = [] as any;

    try {
        const response = await fetch("/.netlify/functions/fetchPhotos")
        if(response){
            const data = await response.json();
            const refactoredData = data.map((d: any) => {
                console.log("D", d)
                const img = new Image();
                    img.src = d.url;
                    img.width = d.width;
                    img.height = d.height;
                return img
            });

            return fetchedPhotos = refactoredData || []
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