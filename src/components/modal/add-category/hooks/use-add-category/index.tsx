import { useGalleriesContext } from "context/GalleriesProvider";
import axios from "setup/axios-manager/api_instance";

const useAddCategory = () => {
    const { galleriesData, setGalleriesData } = useGalleriesContext();

    const addNewCategory = async (categoryName: string) => {
        axios
            .post("/gallery", { name: categoryName })
            .then((response) => {
                setGalleriesData([
                    ...galleriesData,
                    { ...response.data, gallerySize: 0 },
                ]);
            })
            .catch((error) => console.log(error));
    };

    return { addNewCategory };
};

export default useAddCategory;
