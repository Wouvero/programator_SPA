import React from "react";

export interface galleryDataI {
    path: string;
    name: string;
    gallerySize: number;
    image?: {
        path: string;
        fullpath: string;
        name: string;
        modified: any;
    };
}

export interface galleriesContextI {
    galleriesData: Array<galleryDataI>;
    setGalleriesData: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface galleryContextI {
    galleryData: any;
    setGalleryData: React.Dispatch<React.SetStateAction<any[]>>;
}
