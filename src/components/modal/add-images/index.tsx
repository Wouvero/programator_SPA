import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import ModalWindow from "..";
import DropFileInput from "./components/drop-file-input";
import useAddPhotos from "./hooks/use-add-photos";

type Props = {
    setOpenModal: any;
};

const AddImages = ({ setOpenModal }: Props) => {
    const [fileList, setFileList] = useState<any>([]);
    const { addNewPhotos } = useAddPhotos();
    return (
        <ModalWindow closeModal={setOpenModal}>
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-2xl">Pridať fotky</h1>
                <div
                    className="flex items-center cursor-pointer text-2xl"
                    onClick={() => setOpenModal(false)}
                >
                    <IoCloseOutline />
                </div>
            </div>
            <DropFileInput fileList={fileList} setFileList={setFileList} />

            <button
                onClick={() => {
                    addNewPhotos(fileList);
                    setOpenModal(false);
                }}
                className="text-base w-full h-16 rounded bg-black text-white hover:bg-blue-700 transition ease-in-out delay-75 mt-6"
            >
                Pridať
            </button>
        </ModalWindow>
    );
};

export default AddImages;
