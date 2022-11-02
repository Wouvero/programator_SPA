import useKeyPress from "hooks/useKeyPress";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios, { BASE_URL } from "setup/axios-manager/api_instance";
import { imageI } from "types/images";

const useLoadImageData = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const { gallerypath, imagepath } = useParams();
    const [image, setImage] = useState<imageI>();
    const [prevImage, setPrevImage] = useState<string | null>(null);
    const [nextImage, setNextImage] = useState<string | null>(null);
    const [src, setSrc] = useState<string>("");

    const leftPress = useKeyPress("ArrowLeft");
    const rightPress = useKeyPress("ArrowRight");
    const escPress = useKeyPress("Escape");

    useEffect(() => {
        if (leftPress) {
            navigate(`/images/${gallerypath}/${prevImage}`, {
                state: {
                    backgroundLocation: location,
                },
            });
        }
    }, [leftPress, location, navigate, prevImage, gallerypath]);

    useEffect(() => {
        if (rightPress) {
            navigate(`/images/${gallerypath}/${nextImage}`, {
                state: {
                    backgroundLocation: location,
                },
            });
        }
    }, [rightPress, location, navigate, nextImage, gallerypath]);
    useEffect(() => {
        if (escPress) {
            navigate(`/gallery/${gallerypath}`);
        }
    }, [escPress, gallerypath, navigate]);

    useEffect(() => {
        setSrc(`${BASE_URL}/images/${500}x${500}/${gallerypath}/${imagepath}`);
    }, [gallerypath, imagepath]);

    useEffect(() => {
        axios
            .get(`/gallery/${gallerypath}`)
            .then((response) => response.data.images)
            .then((data) =>
                data.forEach((image: imageI, index: number) => {
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
            .catch((error) => console.log(error));
    }, [gallerypath, imagepath]);

    return {
        src,
        image,
        prevImage,
        nextImage,
        gallerypath,
        imagepath,
        location,
    };
};

export default useLoadImageData;
