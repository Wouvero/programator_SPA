import ContextMenu from "components/context-menu";
import useContextMenu from "components/context-menu/hooks/use-context-menu";
import Img from "components/image";
import useDeleteImage from "pages/gallery-page/hooks/use-delete-image";
import React, { useRef } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { BASE_URL } from "setup/axios-manager/api_instance";
import { imageI } from "types/images";

const ImageCard = (props: imageI) => {
    let location = useLocation();
    const imageCardRef: React.MutableRefObject<null> = useRef(null);
    const { deleteImage } = useDeleteImage();

    const { isVisible, x, y } = useContextMenu(imageCardRef);

    const contextData = [
        {
            text: "Delete gallery",
            icon: <IoTrashOutline size={20} />,
            onClickFunction() {
                deleteImage(props.fullpath);
            },
        },
    ];

    return (
        <Link
            to={isVisible ? "#" : `/images/${props.fullpath}`}
            state={{
                backgroundLocation: location,
            }}
        >
            <div
                ref={imageCardRef}
                className="bg-white shadow-card rounded cursor-pointer h-[295px]"
            >
                <div className="rounded relative w-full h-full bg-gray-50">
                    <Img
                        src={`${BASE_URL}/images/300x300/${props.fullpath}`}
                        name={props.name}
                        className="absolute top-0 left-0 object-cover object-center w-full h-full rounded"
                    />
                </div>
                {isVisible && <ContextMenu x={x} y={y} items={contextData} />}
            </div>
        </Link>
    );
};

export default ImageCard;
