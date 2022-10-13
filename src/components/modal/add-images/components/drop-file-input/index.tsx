import React, { useRef, useState } from "react";
import { IoImageOutline } from "react-icons/io5";

type Props = {
    fileList: any;
    setFileList: any;
};

const DropFileInput = ({ fileList, setFileList }: Props) => {
    const wrapperRef: any = useRef(null);

    const handleDragOver = (e: any) => {
        e.preventDefault();
    };
    const handleDrop = (e: any) => {
        e.preventDefault();

        setFileList([...fileList, ...e.dataTransfer.files]);
        onDrop();
    };

    const selectFiles = (e: any) => {
        setFileList([...fileList, ...e.target.files]);
    };

    const onDragEnter = () => {
        wrapperRef.current.classList.add("bg-[#ededed]");
    };
    const onDragLeave = () => {
        wrapperRef.current.classList.remove("bg-[#ededed]");
    };
    const onDrop = () => wrapperRef.current.classList.remove("bg-[#ededed]");

    return (
        <React.Fragment>
            <div
                className="w-full border border-[#DDDDDD] rounded border-dashed transition ease-in-out delay-75"
                ref={wrapperRef}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e)}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
            >
                <div className="flex justify-center p-12">
                    <div className="flex flex-col items-center">
                        <div className="text-2xl">
                            <IoImageOutline />
                        </div>

                        <div className="pt-3 flex flex-col items-center">
                            <span className="inline-block">
                                Sem presuňte fotky
                            </span>
                            <span className="block pt-4 opacity-50">alebo</span>
                            <div>
                                <label
                                    htmlFor="upload-files"
                                    className="border-[2px] border-[#000] rounded  h-12 mt-6 flex items-center px-8 cursor-pointer hover:bg-black hover:text-white transition ease-in-out delay-75"
                                >
                                    Vyberte súbory
                                </label>
                                <input
                                    type="file"
                                    id="upload-files"
                                    className="hidden"
                                    multiple
                                    onChange={(e) => selectFiles(e)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {fileList &&
                fileList.map((file: any, index: number) => {
                    return <p key={index}>{file.name}</p>;
                })}
        </React.Fragment>
    );
};

export default DropFileInput;
