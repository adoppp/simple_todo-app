import type { SxProps } from "@mui/material";

export const boxStyles: SxProps = {
    flexGrow: 1,
    width: "100%",
    maxWidth: "520px",
};

export const listStyles: SxProps = {
    "@media (max-width:475px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}
