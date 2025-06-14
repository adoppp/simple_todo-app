import type { Todo } from "@/constants";
import type { SxProps } from "@mui/material";
import { deepPurple, green, grey, indigo, purple, red } from "@mui/material/colors";
import type { CSSProperties } from "react";

export const listItemStyles: SxProps = {
    border: 3,
    borderColor: purple[700],
    borderRadius: 2,
    backgroundColor: "#2a1d49",
    marginBottom: "12px",
    display: "flex",
    justifyContent: "space-between"
};

export const listItemTextStyles = {
    styles: (todo: Todo) => ({ color: grey[50], textDecoration: `${todo.isCompleted ? "line-through" : ""}`, textDecorationColor: deepPurple[200] }),
};

export const checkboxStyles: SxProps = {
    color: grey[50],
    transition: "color 0.3s ease",
    "&.Mui-checked": {
        color: green[500]
    },
    ":hover": {
        color: grey[600]
    },
    '&.Mui-checked:hover': {
        color: green[700],
    },
    "&.Mui-disabled": {
        color: grey[800],
    },
    "&.Mui-checked.Mui-disabled": {
        color: grey[800],
    },
};

export const deleteIconStyles: SxProps = {
    color: purple[400],
    transition: "color 0.3s ease",
    ":hover": {
        color: red[900],
    },
    ":active": {
        color: "darkred",
    },
    "&.Mui-disabled": {
        color: grey[800],
    },
};

export const editIconStyles: SxProps = {
    color: purple[400],
    transition: "color 0.3s ease",
    ":hover": {
        color: purple[700]
    },
    ":active": {
        color: purple["A100"]
    },
    "&.Mui-disabled": {
        color: grey[800],
    },
};

export const inputStyles: SxProps = {
    "& .MuiInputLabel-root": {
        color: indigo[100],
        top: "50%",                        
        transform: "translate(14px, -50%)",
        transition: "all 0.2s ease-out",
        padding: "0 4px",
    },
    "& .MuiInputLabel-shrink": {
        top: 0,                                
        transform: "translate(14px, -6px) scale(0.75)",
        color: purple[500]
    },
    "& .MuiOutlinedInput-root": {                            
        "& input": {
            color: "white",
            padding: "8px 14px",                
        },
        "& fieldset": {
            borderColor: purple[500],
        },
        "&:hover fieldset": {
            borderColor: purple[500],
        },
        "&.Mui-focused fieldset": {
            borderColor: purple[700],
        },
    },
};

export const hiddenButton: CSSProperties = {
    position: 'absolute',
    left: '-9999px',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
};