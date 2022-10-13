import { useState } from "react";
import useGetGalleries from "pages/galleries-page/hooks/use-get-galleries";
import GalleryCard from "pages/galleries-page/components/gallery-card";
import AddCategory from "components/modal/add-category";
import { IoAddCircleOutline } from "react-icons/io5";
import { galleryDataI } from "types/gallery";

const GalleriesPage = () => {
    const [openAddCategory, setOpenAddCategory] = useState<Boolean>(false);

    const { galleriesData, loadData } = useGetGalleries();

    return (
        <div className="w-[90%] px-10 py-20 m-auto">
            {loadData ? (
                <>
                    <h1 className="text-4xl">Fotogaléria</h1>
                    <div className="text-lg py-10">Kategórie</div>
                    <section className="grid grid-cols-4 auto-rows-fr gap-8">
                        {galleriesData &&
                            galleriesData.map((item: galleryDataI) => {
                                return (
                                    <GalleryCard {...item} key={item.path} />
                                );
                            })}
                        <div
                            className="bg-white w-full min-h-[285px] grid place-items-center rounded shadow-card cursor-pointer"
                            onClick={() => setOpenAddCategory(true)}
                        >
                            <div className="flex flex-col items-center">
                                <IoAddCircleOutline className="text-[24px] text-gray-600" />
                                <p className="text-base pt-4">
                                    Pridať kategóriu
                                </p>
                            </div>
                        </div>
                    </section>
                    {openAddCategory && (
                        <AddCategory setOpenModal={setOpenAddCategory} />
                    )}
                </>
            ) : (
                <p>loading</p>
            )}
        </div>
    );
};

export default GalleriesPage;
