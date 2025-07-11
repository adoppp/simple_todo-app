import { useAddPopUp } from "@components/AddPopUp/AddPopUp.hooks";
import { addButtonStyles } from "@/components/AddPopUp/AddPopUp.styles";
import { UiButton } from "@/ui/UiButton/UiButton";
import { AddTask } from "@components/AddPopUp/AddTask/AddTask";
import { ModalContainer } from "@components/ModalContainer/ModalContainer";

export const AddPopUp = () => {
    const { open, handleClose, handleOpen } = useAddPopUp();

    return (
        <>
            <UiButton
                label="+"
                styles={addButtonStyles}
                handleClick={handleOpen} 
            />
            <ModalContainer open={open} handleClick={handleClose} title="Add todo">
                <AddTask handleClick={handleClose} />
            </ModalContainer>
        </>
    );
};