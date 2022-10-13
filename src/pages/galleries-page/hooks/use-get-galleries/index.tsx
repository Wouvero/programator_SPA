import { rejects } from "assert";
import { useGalleriesContext } from "context/GalleriesProvider";
import { useEffect, useState } from "react";
import axios from "setup/axios-manager/api_instance";

const useGetGalleries = () => {
    const [loadData, setLoadData] = useState<Boolean>(false);
    const { galleriesData, setGalleriesData } = useGalleriesContext();

    const loadGalleryInfo = async (galleries: any) => {
        let data: Array<{}> = [];

        Promise.all(
            galleries.map(async (galleryItem: any) => {
                await axios
                    .get(`/gallery/${galleryItem.path}`)
                    .then((response) => {
                        data.push({
                            ...galleryItem,
                            gallerySize: response.data.images.length,
                        });
                    })
                    .catch((error) =>
                        console.log(
                            `Gallery path /gallery${galleryItem.path} is not found`
                        )
                    );
            })
        ).then(() => setGalleriesData(data));

        return data;
    };

    const loadGallery = async () => {
        axios
            .get("/gallery")
            .then((response) => response.data)
            .then((data) => {
                loadGalleryInfo(data.galleries);
            })
            .catch((error) => console.log(error));

        setLoadData(true);
    };

    useEffect(() => {
        loadGallery();
    }, []);

    return { galleriesData, loadData };
};

export default useGetGalleries;
