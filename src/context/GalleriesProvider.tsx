import React, { createContext, useContext, useState } from "react";
import { galleriesContextI, galleryDataI } from "types/gallery";

export const GalleriesContext = createContext<galleriesContextI>(
    {} as galleriesContextI
);

type Props = {
    children: React.ReactNode;
};

export const GalleriesProvider = ({ children }: Props) => {
    const [galleriesData, setGalleriesData] = useState<Array<galleryDataI>>([]);

    return (
        <GalleriesContext.Provider value={{ galleriesData, setGalleriesData }}>
            {children}
        </GalleriesContext.Provider>
    );
};

export const useGalleriesContext = () => useContext(GalleriesContext);
