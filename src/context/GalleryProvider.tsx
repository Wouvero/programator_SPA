import React, { createContext, useContext, useState } from "react";
import { galleryContextI } from "types/gallery";
import { imageI } from "types/images";

export const GalleryContext = createContext<galleryContextI>(
    {} as galleryContextI
);

type Props = {
    children: React.ReactNode;
};

export const GalleryProvider = ({ children }: Props) => {
    const [galleryData, setGalleryData] = useState<Array<imageI>>([]);

    return (
        <GalleryContext.Provider value={{ galleryData, setGalleryData }}>
            {children}
        </GalleryContext.Provider>
    );
};

export const useGalleryContext = () => useContext(GalleryContext);
