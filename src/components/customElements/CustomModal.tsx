import { Ref, forwardRef, useImperativeHandle, useState } from 'react';

type CustomModalType = {
    title: string;
    text: string;
};

export interface CustomModalRef {
    openModal: () => void;
}

const CustomModal = forwardRef(
    (modalProps: CustomModalType, ref: Ref<CustomModalRef>) => {
        const [modalOpen, setModalOpen] = useState<boolean>(false);

        useImperativeHandle(ref, () => ({
            openModal() {
                setModalOpen(true);
            },
        }));

        return (
            modalOpen && (
                <section
                    className="absolute left-0 top-0 flex size-full items-center justify-center bg-gray-500 bg-opacity-70"
                    onClick={() => setModalOpen(false)}
                >
                    <div className="relative rounded-md border border-gray-600 bg-white p-4">
                        <h3 className="text-center text-red-600">
                            {modalProps.title}
                        </h3>
                        <p className="mt-4">{modalProps.text}</p>
                    </div>
                </section>
            )
        );
    }
);

export default CustomModal;
