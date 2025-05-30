import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { deepPurple, green, grey, purple } from "@mui/material/colors";
import type { Todo } from "@/constants/globalConstants";
import type { FC } from "react";

interface TodoItemProps {
    todo: Todo,
    handleDelete: (id: string) => void,
    toggleIsComplited: (todo: Todo) => void,
}

export const TodoItem: FC<TodoItemProps> = ({todo, handleDelete, toggleIsComplited}) => {

    return (
        <ListItem 
        sx={{border: 3, borderColor: purple[700], borderRadius: 2, backgroundColor: "#2a1d49", marginBottom: "12px"}}>
            <ListItemText sx={{color: grey[50], textDecoration: `${todo.isCompleted ? "line-through" : ""}`, textDecorationColor: deepPurple[200] }} primary={todo.title} />
            <Checkbox sx={{
                color: grey[50], transition: "color 0.3s ease",
                "&.Mui-checked": {
                    color:  green[300]
                },
                ":hover": {
                color: grey[600]
                },
                '&.Mui-checked:hover': {
                    color: green[700], 
                },
            }
            } checked={todo.isCompleted} onClick={() => toggleIsComplited(todo)} />
            <IconButton onClick={() => handleDelete(todo.id)} >
                <DeleteIcon sx={{
                    color: purple[400],
                    transition: "color 0.3s ease",
                    ":hover": {
                    color: purple[700]
                }}}/>
            </IconButton>
        </ListItem>
    )
}