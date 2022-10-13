import { useGalleryContext } from "context/GalleryProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "setup/axios-manager/api_instance";

const useGetGallery = () => {
    const { galleryPath } = useParams();
    const { galleryData, setGalleryData } = useGalleryContext();

    const [loadData, setLoadData] = useState<Boolean>(false);

    const loadGalleryImages = async () => {
        axios
            .get(`/gallery/${galleryPath}`)
            .then((response) => response.data)
            .then((data) => {
                setGalleryData(data);
            });

        setLoadData(true);
    };

    useEffect(() => {
        loadGalleryImages();
    }, []);

    return { galleryData, loadData };
};

export default useGetGallery;
