import { Ref, forwardRef, useImperativeHandle, useState } from 'react';

type CustomModalType = {
    title: string;
    text: string;
    modalOpened?: boolean;
    canClose?: boolean;
};

export interface CustomModalRef {
    openModal: () => void;
}

const CustomModal = forwardRef(
    (
        { text, title, modalOpened = false, canClose = true }: CustomModalType,
        ref: Ref<CustomModalRef>
    ) => {
        const [modalOpen, setModalOpen] = useState<boolean>(modalOpened);

        useImperativeHandle(ref, () => ({
            openModal() {
                setModalOpen(true);
            },
        }));

        return (
            modalOpen && (
                <section
                    className="absolute left-0 top-0 flex size-full items-center justify-center bg-gray-500 bg-opacity-70"
                    onClick={() => canClose && setModalOpen(false)}
                >
                    <div className="relative rounded-md border border-gray-600 bg-white p-4">
                        <h3 className="text-center text-red-600">{title}</h3>
                        <p className="mt-4">{text}</p>
                    </div>
                </section>
            )
        );
    }
);

export default CustomModal;
