import { useEffect, useState } from "react";
import { fallbackImageI } from "types/images";

const FallbackImage = (props: fallbackImageI) => {
    const [imgSrc, setImgSrc] = useState(props.src);

    useEffect(() => {
        setImgSrc(props.src);
    }, [props.src]);

    return (
        <img
            src={
                imgSrc
                    ? imgSrc
                    : require("../../assets/images/corupted-file.webp")
            }
            alt={imgSrc ? props.name : "corupted image"}
            className={props.className}
            onError={() =>
                setImgSrc(require("../../assets/images/corupted-file.webp"))
            }
        />
    );
};

export default FallbackImage;
