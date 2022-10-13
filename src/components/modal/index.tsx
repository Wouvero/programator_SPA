import OutsideClickHandler from "react-outside-click-handler";
import { modalI } from "types/modal";

const ModalWindow = (props: modalI) => {
    return (
        <div className="w-full h-screen fixed inset-0 z-20 bg-modalBG grid place-items-center cursor-pointer">
            <div className="w-[100%] sm:w-[90%] grid place-items-center px-2 sm:px-10">
                <section className="w-[100%] max-w-modalBox bg-white p-10 sm:p-12 rounded-2xl cursor-default">
                    <OutsideClickHandler
                        onOutsideClick={() => props.closeModal(false)}
                    >
                        {props.children}
                    </OutsideClickHandler>
                </section>
            </div>
        </div>
    );
};

export default ModalWindow;
