import { useGalleriesContext } from "context/GalleriesProvider";
import { useEffect, useState } from "react";
import axios, { BASE_URL } from "setup/axios-manager/api_instance";

const useGetGalleries = () => {
    const [loadData, setLoadData] = useState<Boolean>(false);
    const { galleriesData, setGalleriesData } = useGalleriesContext();

    useEffect(() => {
        setLoadData(true);

        const loadGalleryInfo = async (galleries: any) => {
            let tempLoadData: Array<{}> = [];

            Promise.all(
                galleries.map((galleryItem: any) =>
                    fetch(`${BASE_URL}/gallery/${galleryItem.path}`)
                )
            )
                .then((responses: any) => {
                    return Promise.all(
                        responses.map((response: any) => {
                            return response.json();
                        })
                    );
                })
                .then((data: any) => {
                    galleries.forEach((galleryItem: any, index: number) => {
                        if (!data[index].code) {
                            tempLoadData.push({
                                ...galleryItem,
                                gallerySize: data[index].images.length,
                            });
                        }
                    });

                    setGalleriesData(tempLoadData);
                    setLoadData(false);
                })
                .catch((error) => console.log(error));
        };

        const loadGallery = async () => {
            axios
                .get("/gallery")
                .then((response) => response.data)
                .then((data) => {
                    loadGalleryInfo(data.galleries);
                })
                .catch((error) => console.log(error));
        };

        loadGallery();
    }, [setGalleriesData]);

    return { galleriesData, loadData };
};

export default useGetGalleries;
