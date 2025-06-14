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
    const { toggleIsComplited, handleDelete, handleEdit, handleChange, handleSubmit, wrapperRef, inputValue, isEdit } = useTodoItem();

    return (
        <div ref={wrapperRef}>
            <ListItem sx={listItemStyles}>
                {isEdit ?
                    <FormControl component="form" onSubmit={(e) => handleSubmit(e, todo)}>
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
                    <IconButton sx={editIconStyles} onClick={handleEdit} disabled={todo.isCompleted}>
                        <EditIcon />
                    </IconButton>
                    <Checkbox sx={checkboxStyles} checked={todo.isCompleted} onClick={() => toggleIsComplited(todo)} disabled={isEdit} />
                    <IconButton sx={deleteIconStyles} onClick={() => handleDelete(todo.id)} disabled={isEdit} >
                        <DeleteIcon />
                    </IconButton>
                </div>
            </ListItem>
        </div>
    );
};