import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "setup/axios-manager/api_instance";
import { imageI } from "types/images";

const useLoadImageData = () => {
    const [load, setLoad] = useState<Boolean>(false);
    const [image, setImage] = useState<imageI>();
    const [prevImage, setPrevImage] = useState<string | null>(null);
    const [nextImage, setNextImage] = useState<string | null>(null);

    const { gallerypath, imagepath } = useParams();

    useEffect(() => {
        const controller = new AbortController();

        const loadData = async () => {
            axios
                .get(`/gallery/${gallerypath}`, { signal: controller.signal })
                .then((response) => response.data.images)
                .then((data) =>
                    data.map((image: imageI, index: number) => {
                        if (image.path === imagepath) {
                            const prevIndex =
                                index - 1 < 0 ? data.length - 1 : index - 1;
                            const nextIndex =
                                index + 1 > data.length - 1 ? 0 : index + 1;

                            setImage(image);

                            if (data.length > 1) {
                                setPrevImage(data[prevIndex].path);
                                setNextImage(data[nextIndex].path);
                            }
                        }
                    })
                )
                .then(() => setLoad(true))
                .catch((error) => console.log(error));
        };

        loadData();

        return () => controller.abort();
    }, [imagepath]);

    return { image, prevImage, nextImage, gallerypath, imagepath, load };
};

export default useLoadImageData;
