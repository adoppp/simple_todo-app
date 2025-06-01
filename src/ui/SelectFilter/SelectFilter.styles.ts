import type { SxProps } from "@mui/material";
import { indigo, purple } from "@mui/material/colors";

export const menuItemStyles: SxProps = {
    '&.Mui-selected': {
        backgroundColor: purple[200],
    },
    '&.Mui-selected:hover': {
        backgroundColor: purple[400],
    },
    '&:hover': {
        backgroundColor: purple[300],
    },
};

export const menuPaperStyles: SxProps = {
    backgroundColor: indigo[200],
    border: '2px solid',
    borderColor: purple[500],
};