import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";
import {
    IoArrowBackOutline,
    IoArrowForwardOutline,
    IoCloseOutline,
} from "react-icons/io5";
import useLoadImageData from "./hooks/use-load-image-data";
import { Link } from "react-router-dom";
import Img from "components/image";

const ImageWindow = () => {
    const { src, location, gallerypath, imagepath, prevImage, nextImage } =
        useLoadImageData();

    location.pathname = `/gallery/${gallerypath}`;

    const navigate: any = useNavigate();

    return (
        <div className="w-full h-screen fixed inset-0 z-20 bg-modalBG grid place-items-center cursor-pointer">
            <div className="w-[90%] grid place-items-center px-2 sm:px-10">
                <div className="w-[100%] max-w-imageBox rounded-2xl cursor-default">
                    <OutsideClickHandler
                        onOutsideClick={() =>
                            navigate(`/gallery/${gallerypath}`)
                        }
                    >
                        <div className="aspect-video relative bg-gray-200 md:rounded-2xl rounded-lg">
                            {src && (
                                <Img
                                    src={src}
                                    name={imagepath}
                                    className="absolute inset-0 w-full h-full object-cover cursor-default rounded-lg shadow-card md:rounded-2xl"
                                />
                            )}

                            {prevImage === null ? null : (
                                <Link
                                    to={`/images/${gallerypath}/${prevImage}`}
                                    state={{
                                        backgroundLocation: location,
                                    }}
                                >
                                    <div className="w-[50px] h-[50px] rounded-full bg-white absolute left-0 top-1/2 -translate-y-2/4 -translate-x-2/4 cursor-pointer grid place-items-center text-base md:w-[80px] md:h-[80px] md:text-2xl shadow">
                                        <IoArrowBackOutline />
                                    </div>
                                </Link>
                            )}

                            {prevImage === null ? null : (
                                <Link
                                    to={`/images/${gallerypath}/${nextImage}`}
                                    state={{
                                        backgroundLocation: location,
                                    }}
                                >
                                    <div
                                        className="w-[50px] h-[50px] rounded-full bg-white absolute right-0 top-1/2 -translate-y-2/4 translate-x-2/4 cursor-pointer grid place-items-center text-base md:w-[80px] md:h-[80px] md:text-2xl shadow"
                                        onKeyPress={(e) => console.log(e)}
                                    >
                                        <IoArrowForwardOutline />
                                    </div>
                                </Link>
                            )}

                            <div
                                id="close-image"
                                onClick={() =>
                                    navigate(`/gallery/${gallerypath}`)
                                }
                                className="w-[50px] h-[50px] rounded-full bg-black bg-opacity-50 text-white absolute right-6 top-6 cursor-pointer grid place-items-center text-base md:w-[80px] md:h-[80px] md:text-2xl"
                            >
                                <IoCloseOutline />
                            </div>
                        </div>
                    </OutsideClickHandler>
                </div>
            </div>
        </div>
    );
};

export default ImageWindow;
