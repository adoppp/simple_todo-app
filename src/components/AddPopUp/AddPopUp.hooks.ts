import { useState } from "react";

export const useAddPopUp = () => {
    const [open, setOpen] = useState<boolean>(false);
        
    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    return { open, handleClose, handleOpen };
};