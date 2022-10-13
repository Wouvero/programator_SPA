import { useGalleriesContext } from "context/GalleriesProvider";
import axios from "setup/axios-manager/api_instance";

const useDeleteGallery = () => {
    const { galleriesData, setGalleriesData } = useGalleriesContext();

    const deleteGallery = async (gallerypath: string) => {
        await axios
            .delete(`/gallery/${gallerypath}`)
            .then(() => {
                const newGallery = galleriesData.filter(
                    (gallery) => gallery.path !== gallerypath
                );
                setGalleriesData(newGallery);
            })
            .catch((error) => console.log(error));
    };

    return { deleteGallery };
};

export default useDeleteGallery;
