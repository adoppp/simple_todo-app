import type { Todo } from "@/constants";
import type { SxProps } from "@mui/material";
import { deepPurple, green, grey, purple } from "@mui/material/colors";

export const listItemStyles: SxProps = {
    border: 3,
    borderColor: purple[700],
    borderRadius: 2,
    backgroundColor: "#2a1d49",
    marginBottom: "12px"
};

export const listItemTextStyles = {
    styles: (todo: Todo) => ({ color: grey[50], textDecoration: `${todo.isCompleted ? "line-through" : ""}`, textDecorationColor: deepPurple[200] }),
};

export  const checkboxStyles: SxProps = {
    color: grey[50],
    transition: "color 0.3s ease",
    "&.Mui-checked": {
        color: green[300]
    },
    ":hover": {
        color: grey[600]
    },
    '&.Mui-checked:hover': {
        color: green[700],
    },
};

export const deleteIconStyles: SxProps = {
    color: purple[400],
    transition: "color 0.3s ease",
    ":hover": {
        color: purple[700]
    }
};