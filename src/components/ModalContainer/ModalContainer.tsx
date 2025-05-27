import { Close } from "@mui/icons-material"
import { Box, IconButton, Modal, Typography } from "@mui/material"
import { indigo, purple } from "@mui/material/colors";
import type { CSSProperties, FC, ReactNode } from "react";

const style: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: "24",
    width: "100%",
    maxWidth: "380px",
    backgroundColor: indigo[200],
    padding: "12px",
    borderRadius: "15px",
    border: `solid 2px ${purple[500]}`
};

const styleContent: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "380px",
    marginTop: "20px",
};

interface ModalContainerProps {
    open: boolean
    children: ReactNode,
    title?: string,
    handleClick: () => void,
}

export const ModalContainer: FC<ModalContainerProps> = ({ open, children, title, handleClick }) => {
    return (
        <Modal open={open} onClose={handleClick}>
            <Box component="section" sx={style}>
                <IconButton onClick={handleClick} sx={{position: "absolute", right: "12px"}}>
                    <Close />
                </IconButton>
                <Typography sx={{ fontWeight: 700,  mt: "4px" }} variant="h5" component="h3">
                    {title}
                </Typography>
                <div style={styleContent}>
                    {children}
                </div>
            </Box>
        </Modal>
    )
}