import { useState } from "react";
import useGetGallery from "pages/gallery-page/hooks/use-get-gallery";
import { IoAddCircleOutline, IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ImageCard from "./components/ImageCard";
import AddImages from "components/modal/add-images";
import { imageI } from "types/images";

const GalleryPage = () => {
    const [openAddImages, setOpenAddImages] = useState<Boolean>(false);

    const { galleryData, loadData } = useGetGallery();

    const navigate = useNavigate();

    return (
        <div className="w-[90%] px-10 py-20 m-auto">
            {loadData ? (
                <>
                    <h1 className="text-4xl">Fotogaléria</h1>

                    <div className="inline-block py-10">
                        <span
                            className="flex items-center text-lg cursor-pointer"
                            onClick={() => navigate("/")}
                        >
                            <IoArrowBack className="mr-2" />
                            {galleryData.gallery?.name}
                        </span>
                    </div>

                    <section className="grid grid-cols-4 auto-rows-fr gap-8">
                        {galleryData.images &&
                            galleryData.images.map((item: imageI) => {
                                return (
                                    <ImageCard {...item} key={item.fullpath} />
                                );
                            })}
                        <div
                            className="bg-white w-full min-h-[285px] grid place-items-center rounded shadow-card cursor-pointer"
                            onClick={() => setOpenAddImages(true)}
                        >
                            <div className="flex flex-col items-center">
                                <IoAddCircleOutline className="text-[24px] text-gray-600" />
                                <p className="text-base pt-4">Pridať fotky</p>
                            </div>
                        </div>
                        {openAddImages && (
                            <AddImages setOpenModal={setOpenAddImages} />
                        )}
                    </section>
                </>
            ) : (
                <>Loading</>
            )}
        </div>
    );
};

export default GalleryPage;
