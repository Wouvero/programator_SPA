import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import ModalWindow from "..";
import useAddCategory from "./hooks/use-add-category";

type Props = {
    setOpenModal: any;
};

const AddCategory = ({ setOpenModal }: Props) => {
    const { addNewCategory } = useAddCategory();

    const [category, setCategory] = useState<string>("");

    const inputRef = useRef<any>();

    useEffect(() => {
        inputRef && inputRef.current.focus();
    }, []);

    return (
        <ModalWindow closeModal={setOpenModal}>
            <div className="p-10 sm:p-12">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-2xl">Pridať kategóriu</h1>
                    <div
                        className="flex items-center cursor-pointer text-2xl"
                        onClick={() => setOpenModal(false)}
                    >
                        <IoCloseOutline />
                    </div>
                </div>

                <div className="relative h-16 mb-6">
                    <label
                        htmlFor="title"
                        className="text-xs absolute top-[-8px] bg-white px-2 left-6 z-10"
                    >
                        Názov kategórie *
                    </label>
                    <input
                        id="title"
                        type="text"
                        ref={inputRef}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="absolute top-0 left-0 px-6 w-full h-full border border-[#DDDDDD] rounded outline-none focus:border-blue-300 transition ease-in-out delay-75"
                    />
                </div>
                <button
                    onClick={() => {
                        addNewCategory(category);
                    }}
                    className="text-base w-full h-16 rounded bg-black text-white hover:bg-blue-700 transition ease-in-out delay-75"
                >
                    Pridať
                </button>
            </div>
        </ModalWindow>
    );
};

export default AddCategory;
