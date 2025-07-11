import type { FC, ReactNode } from "react";
import { Close } from "@mui/icons-material"
import { Box, IconButton, Modal, Typography } from "@mui/material"

import { iconButton, boxStyle, styleContent } from "@components/ModalContainer/ModalContainer.styles";

interface ModalContainerProps {
    open: boolean
    children: ReactNode,
    title?: string,
    handleClick: () => void,
}

export const ModalContainer: FC<ModalContainerProps> = ({ open, children, title, handleClick }) => {
    return (
        <Modal open={open} onClose={handleClick} >
            <Box component="section" sx={boxStyle}>
                <IconButton onClick={handleClick} sx={iconButton}>
                    <Close />
                </IconButton>
                <Typography sx={{ fontWeight: 700, mt: "4px" }} variant="h5" component="h3">
                    {title}
                </Typography>
                <div style={styleContent}>
                    {children}
                </div>
            </Box>
        </Modal>
    );
};