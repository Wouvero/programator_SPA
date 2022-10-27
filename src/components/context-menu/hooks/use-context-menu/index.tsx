import React, { useEffect, useState } from "react";

const useContextMenu = (parrentRef: React.MutableRefObject<null>) => {
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    const [isVisible, setIsVisible] = useState<Boolean>(false);

    useEffect(() => {
        const parrent: any = parrentRef.current;

        if (!parrent) return;

        const showMenu = (e: any) => {
            e.preventDefault();

            e.pageX + 200 > window.innerWidth
                ? setX(e.pageX - 224)
                : setX(e.pageX);

            setY(e.pageY);

            setIsVisible(true);
        };

        const closeMenu = () => {
            setIsVisible(false);
        };

        parrent.addEventListener("contextmenu", showMenu);
        window.addEventListener("click", closeMenu);

        return () => {
            parrent.removeEventListener("contextmenu", showMenu);
            window.removeEventListener("click", closeMenu);
        };
    });

    return { isVisible, x, y };
};

export default useContextMenu;
