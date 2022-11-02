const useDeleteImage = () => {
    const deleteImage = async (fullpath: string) => {
        console.log("delete image: ", fullpath);
    };

    return { deleteImage };
};

export default useDeleteImage;
