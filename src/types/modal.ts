import { Dispatch, SetStateAction } from "react";

export interface modalI {
    closeModal: Dispatch<SetStateAction<boolean>>;
    children?: React.ReactNode;
}
