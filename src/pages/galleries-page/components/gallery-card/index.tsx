import FallbackImage from "components/fallback-image";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useContextMenu from "components/context-menu/hooks/use-context-menu";
import ContextMenu from "components/context-menu";
import { galleryDataI } from "types/gallery";
import { IoRefresh, IoTrashOutline } from "react-icons/io5";
import useDeleteGallery from "pages/galleries-page/hooks/use-delete-gallery";

const GalleryCard = (props: galleryDataI) => {
    const galleryCardRef: React.MutableRefObject<null> = useRef(null);

    const { isVisible, x, y } = useContextMenu(galleryCardRef);
    const { deleteGallery } = useDeleteGallery();

    const galleryLabelText = (size: number) => {
        if (size === 0) return `${size} fotiek`;
        if (size === 1) return `${size} fotka`;
        if (size > 1 && size < 5) return `${size} fotky`;
        else return `${size} fotiek`;
    };

    const contextData = [
        {
            text: "Update gallery",
            icon: <IoRefresh size={20} />,
            onClickFunction() {},
        },
        {
            text: "Delete gallery",
            icon: <IoTrashOutline size={20} />,
            onClickFunction() {
                deleteGallery(props.path);
            },
        },
    ];

    return (
        <Link to={isVisible ? "#" : `/gallery/${props.path}`}>
            <section ref={galleryCardRef} className="shadow-card rounded">
                <div className="w-full h-[228px] relative rounded-t">
                    <div className="absolute top-4 left-4 z-10 px-[15px] py-[5px] bg-cardLabel rounded-full">
                        <h4 className="text-xs text-white">
                            {galleryLabelText(props.gallerySize)}
                        </h4>
                    </div>
                    {props.image ? (
                        <FallbackImage
                            src={`http://api.programator.sk/images/500x500/${props.image?.fullpath}`}
                            name={props.image?.name}
                            className="w-full h-full absolute top-0 left-0 object-cover object-center rounded-t"
                        />
                    ) : (
                        <div className="w-full h-full rounded-t bg-blue-600" />
                    )}
                </div>
                <div className="w-full grid place-items-center">
                    <h3 className="py-5 text-base">{props.name}</h3>
                </div>
                {isVisible && <ContextMenu x={x} y={y} items={contextData} />}
            </section>
        </Link>
    );
};

export default GalleryCard;
