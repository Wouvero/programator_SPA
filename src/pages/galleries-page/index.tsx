import { useState } from "react";
import useGetGalleries from "pages/galleries-page/hooks/use-get-galleries";
import GalleryCard from "pages/galleries-page/components/gallery-card";
import AddCategory from "components/modal/add-category";
import { IoAddCircleOutline } from "react-icons/io5";
import { galleryDataI } from "types/gallery";

const GalleriesPage = () => {
    const [openAddCategory, setOpenAddCategory] = useState<Boolean>(false);

    const { galleriesData } = useGetGalleries();

    return (
        <div className="container py-20">
            <div className="pb-10">
                <h1 className="text-4xl pb-10">Fotogaléria</h1>
                <div className="text-lg">Kategórie</div>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-4 gap-8 auto-rows-fr justify-center ">
                {galleriesData &&
                    galleriesData.map((item: galleryDataI) => {
                        return <GalleryCard {...item} key={item.path} />;
                    })}
                <div
                    className="bg-white w-full min-h-[285px] grid place-items-center rounded shadow-card cursor-pointer"
                    onClick={() => setOpenAddCategory(true)}
                >
                    <div className="flex flex-col items-center">
                        <IoAddCircleOutline className="text-[24px] text-gray-600" />
                        <p className="text-base pt-4">Pridať kategóriu</p>
                    </div>
                </div>
            </section>
            {openAddCategory && (
                <AddCategory setOpenModal={setOpenAddCategory} />
            )}
        </div>
    );
};

export default GalleriesPage;
