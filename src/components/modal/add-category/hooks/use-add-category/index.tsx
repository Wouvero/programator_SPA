import { useGalleriesContext } from "context/GalleriesProvider";
import { useNavigate } from "react-router-dom";
import axios from "setup/axios-manager/api_instance";

const useAddCategory = () => {
    const { galleriesData, setGalleriesData } = useGalleriesContext();
    const navigate = useNavigate();

    const addNewCategory = async (categoryName: string) => {
        axios
            .post("/gallery", { name: categoryName })
            .then((response) => {
                setGalleriesData([
                    ...galleriesData,
                    { ...response.data, gallerySize: 0 },
                ]);

                navigate(`/gallery/${response.data.path}`);
            })
            .catch((error) => {
                const { code } = error.response.data;
                switch (code) {
                    case 400:
                        alert("Neplatný názov kategórie.");
                        break;
                    case 409:
                        alert("Galéria s týmto názvom už existuje.");
                        break;
                    case 500:
                        alert("Neznáma príčina problému.");
                        break;
                    default:
                        break;
                }
            });
    };

    return { addNewCategory };
};

export default useAddCategory;
