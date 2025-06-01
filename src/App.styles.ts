import type { SxProps } from "@mui/material";

export const containerStyles: SxProps = {
    p: "80px 16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
};

export const typographyStyles: SxProps = {
    mb: 2,
    textAlign: "center",
};

export const boxStyles: SxProps = {
    flexGrow: 1,
    width: "100%",
    maxWidth: "520px"
};

export const addButtonStyles: SxProps = {
    position: "fixed",
    bottom: "10px",
    right: "24px",
    borderRadius: "50%",
    display: "block",
    padding: "8px",
    minWidth: "60px",
    fontSize: "24px"
};