import type { SxProps } from "@mui/material";
import { indigo, purple } from "@mui/material/colors";
import type { CSSProperties } from "react";

export const style: SxProps = {
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

export const iconButton: SxProps = {
    position: "absolute",
    right: "12px"
};

export const styleContent: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "380px",
    marginTop: "20px",
};
