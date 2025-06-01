import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import type { Todo } from "@/constants/globalConstants";
import type { FC } from "react";
import { checkboxStyles, deleteIconStyles, listItemStyles, listItemTextStyles } from "@sections/TodoList/TodoItem/TodoItem.styles";
import { useTodoItem } from "./TodoItem.hooks";

interface TodoItemProps {
    todo: Todo,
};

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    const { toggleIsComplited, handleDelete } = useTodoItem();

    return (
        <ListItem sx={listItemStyles}>
            <ListItemText sx={listItemTextStyles.styles(todo)} primary={todo.title} />
            <Checkbox sx={checkboxStyles} checked={todo.isCompleted} onClick={() => toggleIsComplited(todo)} />
            <IconButton onClick={() => handleDelete(todo.id)} >
                <DeleteIcon sx={deleteIconStyles}/>
            </IconButton>
        </ListItem>
    )
}