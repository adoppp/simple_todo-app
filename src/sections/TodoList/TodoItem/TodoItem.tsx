import { Checkbox, FormControl, IconButton, ListItem, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import type { Todo } from "@/constants/globalConstants";
import type { FC } from "react";
import { checkboxStyles, deleteIconStyles, editIconStyles, listItemStyles, listItemTextStyles, inputStyles, hiddenButton } from "@sections/TodoList/TodoItem/TodoItem.styles";
import { useTodoItem } from "./TodoItem.hooks";
import EditIcon from '@mui/icons-material/Edit';
import { UiInput } from "@/ui/UiInput";

interface TodoItemProps {
    todo: Todo,
};

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    const { toggleIsComplited, handleDelete, handleEdit, handleChange, handleSubmit, inputValue, isEdit } = useTodoItem();

    return (
        <ListItem sx={listItemStyles}>
            {isEdit ?
                <FormControl  component="form" onSubmit={(e) => handleSubmit(e, todo)}>
                    <UiInput id="title" label={todo.title} onChange={handleChange} inputValue={inputValue} customVariant="outlined" styles={inputStyles} />
                    <button
                        type="submit"
                        style={hiddenButton}
                        aria-hidden="true"
                        tabIndex={-1}
                    >
                        Submit
                    </button>
                </FormControl> :
                <Typography variant="h6" component="span" sx={listItemTextStyles.styles(todo)}>
                    {todo.title}
                </Typography>
            }
            <div>
                <IconButton onClick={handleEdit}>
                    <EditIcon sx={editIconStyles} />
                </IconButton>
                <Checkbox sx={checkboxStyles} checked={todo.isCompleted} onClick={() => toggleIsComplited(todo)} />
                <IconButton onClick={() => handleDelete(todo.id)} >
                    <DeleteIcon sx={deleteIconStyles}/>
                </IconButton>
            </div>
        </ListItem>
    )
}