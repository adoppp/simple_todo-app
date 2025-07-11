import type { FC } from "react";
import { Box, Checkbox, FormControl, IconButton, ListItem, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import type { Todo } from "@/constants/global";
import { 
    checkboxStyles, 
    deleteIconStyles, 
    editIconStyles, 
    listItemStyles, 
    listItemTextStyles, 
    inputStyles, 
    hiddenButton, 
    iconsBox, 
    containerStyles 
} from "@/components/TodoList/TodoItem/TodoItem.styles";
import { useTodoItem } from "@components/TodoList/TodoItem/TodoItem.hooks";
import { UiInput } from "@/ui/UiInput/UiInput";

interface TodoItemProps {
    todo: Todo,
};

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    const { toggleIsComplited, handleDelete, handleEdit, handleChange, handleSubmit, wrapperRef, inputValue, isEdit } = useTodoItem();

    return (
        <div ref={wrapperRef} style={containerStyles}>
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
                <Box sx={iconsBox}>
                    <IconButton sx={editIconStyles} onClick={handleEdit} disabled={todo.isCompleted}>
                        <EditIcon />
                    </IconButton>
                    <Checkbox sx={checkboxStyles} checked={todo.isCompleted} onClick={() => toggleIsComplited(todo)} disabled={isEdit} />
                    <IconButton sx={deleteIconStyles} onClick={() => handleDelete(todo.id)} disabled={isEdit} >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </ListItem>
        </div>
    );
};