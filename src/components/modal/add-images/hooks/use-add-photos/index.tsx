import { useGalleryContext } from "context/GalleryProvider";
import { useParams } from "react-router-dom";
import axios from "setup/axios-manager/api_instance";

const useAddPhotos = () => {
    const { galleryPath } = useParams();
    const { galleryData, setGalleryData } = useGalleryContext();

    const addNewPhotos = async (files: any) => {
        files &&
            files.map((file: any) => {
                const fd = new FormData();
                fd.append("file", file);

                console.log(fd);
                axios
                    .post(`/gallery/${galleryPath}`, fd, {
                        headers: { "Content-Type": "multipart/form-data" },
                    })
                    .then((response) => {
                        let temp = galleryData;
                        //  console.log(response.data.uploaded);
                        temp = {
                            ...temp,
                            images: [...temp.images, ...response.data.uploaded],
                        };
                        console.log(temp);
                        setGalleryData(temp);
                    })

                    .catch((error) => console.log(error));
            });
    };

    return { addNewPhotos };
};

export default useAddPhotos;
