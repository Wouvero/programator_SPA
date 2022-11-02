import { useGalleryContext } from "context/GalleryProvider";
import { useParams } from "react-router-dom";
import axios from "setup/axios-manager/api_instance";

const useAddPhotos = () => {
    const { galleryPath } = useParams();
    const { galleryData, setGalleryData } = useGalleryContext();

    const addNewPhotos = async (files: any) => {
        files &&
            files.forEach((file: any) => {
                const fd = new FormData();
                fd.append("file", file);

                axios
                    .post(`/gallery/${galleryPath}`, fd, {
                        headers: { "Content-Type": "multipart/form-data" },
                    })
                    .then((response) => {
                        let temp = galleryData;

                        temp = {
                            ...temp,
                            images: [...temp.images, ...response.data.uploaded],
                        };

                        setGalleryData(temp);
                    })

                    .catch((error) => {
                        const { code } = error.response.data;

                        switch (code) {
                            case 400:
                                alert("Neplatný súbor.");
                                break;
                            case 404:
                                alert("Galéria sa nenašla.");
                                break;
                            default:
                                break;
                        }
                    });
            });
    };

    return { addNewPhotos };
};

export default useAddPhotos;
