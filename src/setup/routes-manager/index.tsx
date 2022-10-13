import React from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

import ErrorPage from "pages/error-page";
import GalleriesPage from "pages/galleries-page";
import GalleryPage from "pages/gallery-page";
import ImageWindow from "components/modal/image-window";

import { GalleriesProvider } from "context/GalleriesProvider";
import { GalleryProvider } from "context/GalleryProvider";

const RouterProvider = () => {
    const location = useLocation();
    const state = location.state as { backgroundLocation?: Location };

    return (
        <React.Fragment>
            <Routes location={state?.backgroundLocation || location}>
                <Route path="/" element={<Outlet />}>
                    <Route
                        path="/"
                        element={
                            <GalleriesProvider>
                                <GalleriesPage />
                            </GalleriesProvider>
                        }
                    />
                    <Route
                        path="/gallery/:galleryPath"
                        element={
                            <GalleryProvider>
                                <GalleryPage />
                            </GalleryProvider>
                        }
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>

            {state?.backgroundLocation && (
                <Routes>
                    <Route
                        path="/images/:gallerypath/:imagepath"
                        element={<ImageWindow />}
                    />
                </Routes>
            )}
        </React.Fragment>
    );
};

export default RouterProvider;
